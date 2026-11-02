import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "カイデン",
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "海岸の 崖に 巣を 作る。 巣は パチパチ 弾ける 不思議な 食感で 人気の 珍味。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つばめがえし" },
			damage: "10+",
			cost: ["Lightning"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863571,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [940],
};

export default card;
