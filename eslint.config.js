import js from "@eslint/js";
import css from "@eslint/css";
import html from "@html-eslint/eslint-plugin";
import htmlParser from "@html-eslint/parser";
import globals from "globals";
export default [
    // 1. Target JS files specifically
    {
        files: ["**/*.js"],
        languageOptions: {
            globals: {
                ...globals.browser, // Tells ESLint you are in a vanilla browser environment
            }
        },
    },
    // 2. Target CSS files
    {
        files: ["**/*.css"],
        plugins: { css },
        language: "css/css",
        rules: {
            "css/no-empty-blocks": "error",
            "css/no-invalid-properties": "error",
        },
    },

    // 3. Target HTML files
    {
        files: ["**/*.html"],
        plugins: { html },
        languageOptions: {
            parser: htmlParser,
        },
        rules: {
            "html/require-img-alt": "error",
        },
    },
];
