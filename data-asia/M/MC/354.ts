import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ハバタクカミ",
	},

	illustrator: "Ebila",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "とある 書物に 登場する ハバタクカミという 生物と 似た 特徴を 持つ ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まどわしうつす" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチの「古代」のポケモンを1匹選び、選んだポケモンにのっているダメカンをすべて、相手のバトルポケモンにのせ替える。",
			},
		},
		{
			name: { ja: "ムーンフォース" },
			damage: 70,
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-30」される。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863656,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [987],
};

export default card;
