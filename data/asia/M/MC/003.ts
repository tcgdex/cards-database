import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "エリカのラフレシアex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "うるわしのかおり" },
			effect: {
				ja: "自分の番に1回使える。自分のポケモン全員のHPを、それぞれ「30」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "パウダーブルーム" },
			damage: 160,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくとねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863290,
			},
		},
	],

	evolveFrom: {
		ja: "エリカのクサイハナ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [45],

	suffix: "EX",
};

export default card;
