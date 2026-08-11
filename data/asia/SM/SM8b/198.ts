import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "フカマル",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 50,
	types: ["Dragon"],

	description: {
		ja: "穴倉に 潜み 獲物や 敵が 横切ると 飛びだして 噛みつく。 勢い余り 歯が 欠けることも。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かくせい" },
			cost: ["Fighting"],
			effect: {
				ja: "このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551486,
			},
		},
	],

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [443],
};

export default card;
