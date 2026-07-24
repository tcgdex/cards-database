import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ツツケラ",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "きのみが 餌。 喰らった後の タネを 弾として 口から 発射し 攻撃に 利用。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つつきおとす" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558712,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [731],
};

export default card;
