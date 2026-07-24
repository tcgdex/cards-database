import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤジロン",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "一本足で 回転しながら 移動する。 古代の 遺跡から 見つかった 珍しい ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ねんりき" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559008,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [343],
};

export default card;
