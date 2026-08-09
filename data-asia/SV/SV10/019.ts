import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ワカシャモ",
		'zh-tw': "力壯雞",
		'zh-cn': "力壯雞",
	},

	illustrator: "yuu",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		ja: "鋭い 鳴き声を あげて 集中力を 高める。 足技は 破壊力 抜群。",
		'zh-tw': "會發出尖銳的叫聲 來提高集中力。 腿技極具破壞力。",
		'zh-cn': "會發出尖銳的叫聲 來提高集中力。 腿技極具破壞力。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "かえん",
				'zh-tw': "烈焰",
				'zh-cn': "烈焰",
			},
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "にどげり",
				'zh-tw': "二連踢",
				'zh-cn': "二連踢",
			},
			damage: "40×",
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×40ダメージ。",
				'zh-tw': "擲2次硬幣，造成正面出現的次數×40點傷害。",
				'zh-cn': "擲2次硬幣，造成正面出現的次數×40點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821850,
				tcgplayer: 628660,
			},
		},
	],

	evolveFrom: {
		ja: "アチャモ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [256],
};

export default card;
