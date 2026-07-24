import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "マグカルゴex",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 270,
	types: ["Fire"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "あついマグマ" },
			damage: 70,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
		{
			name: { ja: "グラウンドバーン" },
			damage: "140+",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "おたがいの山札を上から1枚ずつトラッシュし、その中にあるエネルギーの枚数×140ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863390,
			},
		},
	],

	evolveFrom: {
		ja: "マグマッグ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [219],

	suffix: "EX",
};

export default card;
