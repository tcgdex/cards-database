import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "フライゴン",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 140,
	types: ["Dragon"],

	description: {
		ja: "自らが 巻き起こす 砂嵐の 中心に いるので 滅多に 人前に 現れない ポケモン。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "りゅうのまもり" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の[竜]ポケモン全員は、相手のポケモンが使うワザの効果を受けない。（すでに受けている効果は、なくならない。）",
			},
		},
	],

	attacks: [
		{
			name: { ja: "すなじごく" },
			damage: 110,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559296,
			},
		},
	],

	evolveFrom: {
		ja: "ビブラーバ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [330],
};

export default card;
