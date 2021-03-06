import $ from "jquery";

import "ui/rich_text_editor";

const RICH_TEXT_EDITOR_CLASS = "dx-richtexteditor";
const QUILL_CONTAINER_CLASS = "dx-quill-container";

const { test } = QUnit;

QUnit.module("Base markup", () => {
    test("render markup", (assert) => {
        const instance = $("#richTextEditor").dxRichTextEditor({
                value: "<h1>Hi!</h1><p>Test</p>"
            }).dxRichTextEditor("instance"),
            $element = instance.$element();

        assert.ok($element.hasClass(RICH_TEXT_EDITOR_CLASS), "Widget has a specific class on the root level");
        assert.ok($element.children().hasClass(QUILL_CONTAINER_CLASS), "Widget has a child marked as quill container");
        assert.equal($element.text(), "Hi!Test");
    });

    test("change value", (assert) => {
        const instance = $("#richTextEditor").dxRichTextEditor({
                value: "<h1>Hi!</h1><p>Test</p>"
            }).dxRichTextEditor("instance"),
            $element = instance.$element();

        instance.option("value", "<p>New value</p>");
        assert.equal($element.text(), "New value");
    });
});
