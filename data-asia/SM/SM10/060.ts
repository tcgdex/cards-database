import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ワルビル",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "体が 冷えるのが とても 苦手。 気温が 下がる 晩には 砂漠の 砂の 奥深くに 潜っている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 20,
			cost: ["Darkness"],
		},
		{
			name: { ja: "おいつめる" },
			damage: 50,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557418,
			},
		},
	],

	evolveFrom: {
		ja: "メグロコ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [552],
};

export default card;
