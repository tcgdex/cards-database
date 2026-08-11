import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケット団のディグダ",
	},

	illustrator: "Yuriko Akase",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'ja-jp': "皮膚が とても 薄いので 光に 照らされると 血液が 温められて 弱ってしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "もぐりまくる" },
			cost: ["Fighting"],
			effect: {
				'ja-jp': "ウラが出るまでコインを投げ、オモテの数ぶん、相手の山札を上からトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861325,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861660,
			},
		},
		{
			type: "reverse",
			foil: "team-rocket",
			thirdParty: {
				cardmarket: 861661,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [50],
};

export default card;
