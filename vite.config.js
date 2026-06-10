import Inspect from "vite-plugin-inspect";
import { qrcode } from "vite-plugin-qrcode";

export default {
	plugins: [Inspect(), qrcode()],

	build: {
		rollupOptions: {
			input: {
				game1: "game-1/index.html",
			},
		},
	},
};
