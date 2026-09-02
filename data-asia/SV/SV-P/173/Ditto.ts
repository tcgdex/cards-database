import { Card } from "../../../../interfaces";
import Set from "../../SV-P";

const card: Card = {
	set: Set,
	name: {
		ko: "메타몽",
	},

	illustrator: "Lee Mina",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	stage: "Basic",


	attacks: [
		{
			name: { ko: "다함께 헤엄치기" },
			cost: ["Colorless"],
		},
		{
			name: { ko: "철퍽" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],

	variants: [
		{
			type: "holo",
			stamp: ["metamong-project"],
			thirdParty: {
				cardmarket: 824122,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Promo",
	dexId: [132],
};

export default card;
