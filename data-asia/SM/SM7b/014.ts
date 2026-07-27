import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラロコン",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "暑いときには ６本の 尻尾で 氷の礫を 作り あたりに ばらまいて 身体を 冷やす。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ひみつのうらみち" },
			effect: {
				ja: "自分の場に[妖]ポケモンがいるなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かじる" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558839,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [37],
};

export default card;
