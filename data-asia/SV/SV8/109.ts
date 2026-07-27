import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "ソウブレイズ",
	},

	illustrator: "Rond",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "怨念の 染みついた 古い 鎧により 進化した 姿。 容赦なく 敵を 切り刻む。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ブレイズカース" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のポケモン全員についている特殊エネルギーを、すべてトラッシュする。",
			},
		},
		{
			name: { ja: "こくえんぎり" },
			damage: 160,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793573,
				tcgplayer: 587688,
			},
		},
	],

	evolveFrom: {
		ja: "カルボウ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [937],
};

export default card;
