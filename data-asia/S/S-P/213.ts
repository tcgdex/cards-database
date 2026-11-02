import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュラルドンV",
		'zh-tw': "路卡利歐VSTAR",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "メタルクロー",
				'zh-tw': "搏鬥肘擊",
			},
			damage: 70,
			cost: ["Fighting", "Metal"],
		},
		{
			name: {
				ja: "ワイドブレイカー",
				'zh-tw': "[VSTAR力量] 波導星星",
			},
			damage: 140,
			cost: ["Fighting", "Metal", "Metal"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-30」される。",
				'zh-tw': "造成對手的場上寶可夢身上附加的能量的數量×70點傷害。[對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 568807,
				tcgplayer: 597397,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [884],
};

export default card;
