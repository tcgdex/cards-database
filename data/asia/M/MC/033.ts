import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シロナのロズレイド",
	},

	illustrator: "En Morikura",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'ja-jp': "右手の 毒は 即効性。 左手の 毒は 遅効性。 どちらも 命に かかわるぞ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "グローリーエール" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、自分の「シロナのポケモン」が使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
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
				cardmarket: 863324,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "シロナのロゼリア",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [407],
};

export default card;
