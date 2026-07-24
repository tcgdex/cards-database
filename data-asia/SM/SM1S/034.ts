import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "メグロコ",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "砂の中に 潜り 泳ぐように 移動。 敵に みつからないためと 体温を 下げない 知恵 なのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かじる" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "かみくだく" },
			damage: 30,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561711,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [551],
};

export default card;
