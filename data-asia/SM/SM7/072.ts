import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴニョニョ",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "危険を 察知すると ジェット機と 同じ 音量の 鳴き声を 上げて 敵を ひるませるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なきわめく" },
			damage: 40,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559033,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [293],
};

export default card;
