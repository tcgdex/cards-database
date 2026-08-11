import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒンバス",
		'zh-tw': "醜醜魚",
		th: "ฮินบาส",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		ja: "一番 みすぼらしい ポケモン。 水草の 多い 川底で 大勢 集まって 暮らしている。",
		'zh-tw': "最寒酸的寶可夢。 在有許多水草的河底 群聚而居。",
		th: "โปเกมอนที่ดูโทรมที่สุด อาศัยอยู่กันเป็นฝูงที่ก้นแม่น้ำที่มีพืชน้ำมากมาย",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "じたばた",
				'zh-tw': "抓狂",
				th: "กระเสือกกระสน",
			},
			damage: "10×",
			cost: ["Water"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージ。",
				'zh-tw': "造成這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
				th: "แดเมจจะเท่ากับจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767122,
				tcgplayer: 568019,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [349],
};

export default card;
