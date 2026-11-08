import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジャローダex",
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],

	description: {
		'ja-jp': "",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ロイヤルエール" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、自分のポケモンが使うワザの、相手のバトルポケモンへのダメージは「+20」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "グラスオーダー" },
			damage: 150,
			cost: ["Grass", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "のぞむなら、自分の山札から好きなカードを3枚まで選び、手札に加える。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	evolveFrom: {
		'ja-jp': "ジャノビー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [497],

	suffix: "EX",

	thirdParty: {
		cardmarket: 828429,
		tcgplayer: 636357,
	},
};

export default card;
