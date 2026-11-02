import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "ツツケラ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "きのみが 餌。 喰らった後の タネを 弾として 口から 発射し 攻撃に 利用。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いわくだき" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561650,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [731],
};

export default card;
