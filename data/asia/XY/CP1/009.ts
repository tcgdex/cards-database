import { Card } from "models/database/card";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アクア団のハブネーク",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "ハブネークの しっぽは するどい 剣に なっているぞ。 毒を 出すことだって できるのさ！",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どくのキバ" },
			damage: 10,
			cost: ["Psychic"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをどくにする。",
			},
		},
		{
			name: { ja: "ベノムテール" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンが特殊状態なら、そのバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563729,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [336],
};

export default card;
