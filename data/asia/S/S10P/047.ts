import { Card } from "models/database/card";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "トリデプス",
		'zh-tw': "護城龍",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	description: {
		'ja-jp': "約１億年前の ポケモン。 恐ろしく 頑丈な 顔は 鋼鉄以上の 硬度を 持つ。",
		'zh-tw': "大約１億年前的寶可夢。 結實到極點的臉擁有 超越鋼鐵的硬度。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "げんしのとりで",
				'zh-tw': "原始要塞",
			},
			effect: {
				'ja-jp': "このポケモンがいるかぎり、自分のポケモン全員が、相手の「ポケモンV」から受けるワザのダメージは「-30」される。",
				'zh-tw': "只要這隻寶可夢在場上，自己的所有寶可夢受到對手的「寶可夢【V】」招式的傷害「-30」點。",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "アイアンタックル",
				'zh-tw': "鐵之衝撞",
			},
			damage: 180,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも30ダメージ。",
				'zh-tw': "這隻寶可夢也受到30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651106,
				tcgplayer: 569890,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "タテトプス",
	},

	retreat: 4,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [411],
};

export default card;
