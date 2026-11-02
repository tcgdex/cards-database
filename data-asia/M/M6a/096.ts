import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ププリン",
	},

	illustrator: "Kanami Ogata",
	category: "Pokemon",
	hp: 30,
	types: ["Colorless"],

	description: {
		ja: "歌うのが 好きだが まだ 下手。 ちゃんと ほめてあげると 少しずつ 上手に なっていくよ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぷにぷにサークル" },
			damage: "30×",
			cost: [],
			effect: {
				ja: "最大HPが「30」の自分のベンチポケモンの数×30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908274,
			},
		},
	],

	retreat: 0,
	regulationMark: "J",
	rarity: "None",
	dexId: [174],
};

export default card;
