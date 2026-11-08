import { Card } from "models/database/card";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スコヴィランex",
		'zh-tw': "狠辣椒ex",
		'zh-cn': "狠辣椒ex",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ダブルタイプ",
				'zh-tw': "雙重屬性",
				'zh-cn': "雙重屬性",
			},
			effect: {
				'ja-jp': "このポケモンは、場にいるかぎり[G]と[R]の2つのタイプになる。",
				'zh-tw': "只要這隻寶可夢在場上，改為【草】與【火】2種屬性。",
				'zh-cn': "只要這隻寶可夢在場上，改為【草】與【火】2種屬性。",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "スパイシーレイジ",
				'zh-tw': "香料激怒",
				'zh-cn': "香料激怒",
			},
			damage: "10+",
			cost: ["Fire", "Fire"],
			effect: {
				'ja-jp': "このポケモンにのっているダメカンの数×70ダメージ追加。",
				'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×70點傷害。",
				'zh-cn': "增加這隻寶可夢身上放置的傷害指示物的數量×70點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793457,
				tcgplayer: 587603,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "カプサイジ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [952],

	suffix: "EX",
};

export default card;
