import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "メガヤンマ",
		'zh-tw': "遠古巨蜓",
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "６本の 脚で 大人を 抱えて 楽々と 飛ぶ ことが できる。 尻尾の 羽で バランスを とる。",
		'zh-tw': "能以６隻腳攫住成年人並輕鬆地飛行。以尾部的翅膀保持平衡。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "つきぬける",
				'zh-tw': "穿通",
			},
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的1隻備戰寶可夢也受到20點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
		{
			name: {
				ja: "ジェットウイング",
				'zh-tw': "噴射之翼",
			},
			damage: 160,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673000,
				tcgplayer: 570766,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570860,
			},
		},
	],

	evolveFrom: {
		ja: "ヤンヤンマ",
	},

	retreat: 0,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [469],
};

export default card;
