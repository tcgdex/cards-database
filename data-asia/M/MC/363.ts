import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "イノムー",
	},

	illustrator: "Aliya Chen",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "長い 体毛に 覆われていて 寒さに 強く 氷の キバは 雪が降ると さらに 太くなる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かいりき" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "キバでつく" },
			damage: 50,
			cost: ["Fighting", "Fighting"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863665,
			},
		},
	],

	evolveFrom: {
		ja: "ウリムー",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [221],
};

export default card;
