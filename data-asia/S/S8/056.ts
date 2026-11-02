import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ハガネール",
		'zh-tw': "大鋼蛇",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 190,
	types: ["Fighting"],

	description: {
		ja: "土と 一緒に 飲みこんだ 鉄分が 溜まっていって 体が 変化したとも 考えられる。",
		'zh-tw': "人們認為牠的身體是因為堆積了和泥土一起吞下的鐵質，才會發生變化的。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "パワーレイジ",
				'zh-tw': "强力激怒",
			},
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×20ダメージ。",
				'zh-tw': "造成這隻寶可夢身上放置的傷害指示物的數量×20點傷害。",
			},
		},
		{
			name: {
				ja: "じしん",
				'zh-tw': "地震",
			},
			damage: 180,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "自分のベンチポケモン全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "自己的所有備戰寶可夢也各受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575611,
				tcgplayer: 569557,
			},
		},
	],

	evolveFrom: {
		ja: "イワーク",
	},

	retreat: 4,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [208],
};

export default card;
