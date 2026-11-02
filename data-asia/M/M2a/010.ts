import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "シロナのロズレイド",
	},

	illustrator: "En Morikura",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "右手の 毒は 即効性。 左手の 毒は 遅効性。 どちらも 命に かかわるぞ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "グローリーエール" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の「シロナのポケモン」が使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "リーフステップ" },
			damage: 80,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861254,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861542,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 861543,
			},
		},
	],

	evolveFrom: {
		ja: "シロナのロゼリア",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [407],
};

export default card;
