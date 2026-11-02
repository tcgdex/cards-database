import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "コドラ",
		'zh-tw': "可多拉",
		th: "โคโดรา",
	},

	illustrator: "takashi shiraishi",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "コドラが 暮らす 山は 湧き水と 鉄鉱石が 豊富なので 人と 争いに なることも 多かった。",
		'zh-tw': "可多拉棲息的山區有 豐富的泉水和鐵礦石， 因此常會與人類起紛爭。",
		th: "ภูเขาที่โคโดราอาศัยอยู่อุดมไปด้วยน้ำแร่และแร่เหล็ก ดังนั้นจึงเคยเกิดการต่อสู้กับมนุษย์หลายครั้ง",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "こうてつタックル",
				'zh-tw': "鋼鐵衝撞",
				th: "กระแทกพลังเหล็ก",
			},
			damage: 40,
			cost: ["Metal"],
			effect: {
				ja: "このポケモンにも20ダメージ。",
				'zh-tw': "這隻寶可夢也受到20點傷害。",
				th: "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย",
			},
		},
		{
			name: {
				ja: "メタルクロー",
				'zh-tw': "金屬爪",
				th: "เมทัลคลอว์",
			},
			damage: 60,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767167,
				tcgplayer: 568064,
			},
		},
	],

	evolveFrom: {
		ja: "ココドラ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [305],
};

export default card;
