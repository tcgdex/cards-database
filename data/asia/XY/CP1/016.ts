import { Card } from "models/database/card";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アクア団のポチエナ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'ja-jp': "ポチエナの するどい 嗅覚は 敵の 侵入を すぐに 察知するぞ。 とても 優秀な 見張り番だ！",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほえる" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
		{
			name: { ja: "かみつく" },
			damage: 20,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563736,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [261],
};

export default card;
