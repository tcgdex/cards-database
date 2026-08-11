import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ツツケラ",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "きのみが 餌。 喰らった後の タネを 弾として 口から 発射し 攻撃に 利用。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つきかえす" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
		{
			name: { ja: "つつく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558713,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [731],
};

export default card;
