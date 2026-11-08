import { Card } from "models/database/card";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヤドン",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'ja-jp': "いつも ボーッとしていて なにを 考えているか わからない。 尻尾で エサを 釣るのが 得意。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "まぬけがお" },
			effect: {
				'ja-jp': "このポケモンはこんらんにならない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ちょうねんりき" },
			damage: 50,
			cost: ["Psychic", "Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 871025,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Promo",
	dexId: [79],
};

export default card;
