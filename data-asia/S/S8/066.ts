import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "フーパV",
		'zh-tw': "胡帕V",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ダブルフェイス",
				'zh-tw': "雙面",
			},
			effect: {
				ja: "このポケモンは、場にいるかぎり[超]と[悪]の2つのタイプになる。",
				'zh-tw': "只要這隻寶可夢在場上，改為【超】與【惡】2種屬性。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "シャドーインパクト",
				'zh-tw': "暗影衝擊",
			},
			damage: 170,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "自分のポケモン1匹に、ダメカンを3個のせる。",
				'zh-tw': "在自己的1隻寶可夢身上放置3個傷害指示物。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575621,
				tcgplayer: 569567,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [720],
};

export default card;
