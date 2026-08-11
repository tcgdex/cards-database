import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "アブリー",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 30,
	types: ["Fairy"],

	description: {
		ja: "花のミツや 花粉が 餌。 オーラを 感じる 力を 持ち 咲きそうな 花を 見分けている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とびまわる" },
			damage: 10,
			cost: ["Fairy"],
			effect: {
				ja: "次の相手の番、このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561718,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [742],
};

export default card;
