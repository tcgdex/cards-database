import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "コドラ",
		'zh-tw': "可多拉",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "コドラが 暮らす 山は 湧き水と 鉄鉱石が 豊富なので 人と 争いに なることも 多かった。",
		'zh-tw': "可多拉棲息的山區有 豐富的泉水和鐵礦石， 因此常會與人類起紛爭。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "こうてつタックル",
				'zh-tw': "鋼鐵衝撞",
			},
			damage: 40,
			cost: ["Metal"],
			effect: {
				ja: "このポケモンにも20ダメージ。",
				'zh-tw': "這隻寶可夢也受到20點傷害。",
			},
		},
		{
			name: {
				ja: "メタルクロー",
				'zh-tw': "金屬爪",
			},
			damage: 60,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 767545,
				tcgplayer: 568101,
			},
		},
	],

	evolveFrom: {
		ja: "ココドラ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [305],
};

export default card;
