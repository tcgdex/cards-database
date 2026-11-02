import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "シキジカ",
		'zh-tw': "四季鹿",
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "季節の 変わり目に なると 体毛と においが 変化する。 季節を 告げる ポケモン。",
		'zh-tw': "到了季節交替之際，體毛與氣味就會產生變化。是通知季節來臨的寶可夢。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "なきごえ",
				'zh-tw': "迴轉攻擊",
			},
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-20」される。",
			},
		},
		{
			name: { ja: "うしろげり" },
			damage: 20,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560421,
				tcgplayer: 569137,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [585],
};

export default card;
