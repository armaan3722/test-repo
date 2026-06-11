export default {
	base: "/test-repo/",

	build: {
		rollupOptions: {
			input: {
				"game-1": "game-1/index.html",
				"game-2": "game-2/index.html",
			},
		},
	},
};
