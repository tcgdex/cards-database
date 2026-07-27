import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホエルオー",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],

	description: {
		ja: "あまりに たくさん さかなポケモンを 食らうので 数が 増えすぎると 漁師たちに 追い払われている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ヘビーインパクト" },
			damage: 90,
			cost: ["Water", "Colorless", "Colorless"],
		},
		{
			name: { ja: "ハイドロスプラッシュ" },
			damage: 140,
			cost: ["Water", "Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556607,
			},
		},
	],

	evolveFrom: {
		ja: "ホエルコ",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [321],
};

export default card;
