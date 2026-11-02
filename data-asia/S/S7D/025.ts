import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ルガルガンVMAX",
		'zh-tw': "鬃岩狼人VMAX",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 320,
	types: ["Fighting"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "ハンティングクロー",
				'zh-tw': "狩獵爪",
			},
			cost: ["Fighting"],
			effect: {
				ja: "相手の場の残りHPが「60」以下のポケモンを1匹選び、きぜつさせる。",
				'zh-tw': "選擇1隻對手場上的剩餘HP為「60」以下的寶可夢，將其【氣絕】。",
			},
		},
		{
			name: {
				ja: "ダイエッジ",
				'zh-tw': "極巨刀鋒",
			},
			damage: 190,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 571607,
				tcgplayer: 569348,
			},
		},
	],

	evolveFrom: {
		ja: "ルガルガンV",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [745],
};

export default card;
