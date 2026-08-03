import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ポリゴン２",
		'zh-tw': "多邊獸Ⅱ",
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "宇宙空間 でも 死なないが 無重力 では うまく 身動きを とることが できない。",
		'zh-tw': "雖然在宇宙空間裡也不會死亡，但在無重力的環境下，牠根本無法順利活動身體。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "トライアタック",
				'zh-tw': "三重攻擊",
			},
			damage: "30×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数×30ダメージ。",
				'zh-tw': "擲3次硬幣，造成正面出現的次數×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560469,
				tcgplayer: 569185,
			},
		},
	],

	evolveFrom: {
		ja: "ポリゴン",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [233],
};

export default card;
