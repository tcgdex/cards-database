import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ドンメル",
	},

	illustrator: "Ounishi",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "１２００度の マグマを 体内に 溜めこんでいる。 炎の 技を 使うと コブは 小さく しぼむ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しゃくねつボディ" },
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをやけどにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かえん" },
			damage: 20,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861265,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861562,
			},
		},
		{
			type: "reverse",
			foil: "quickball",
			thirdParty: {
				cardmarket: 861563,
			},
		},
	],

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [322],
};

export default card;
