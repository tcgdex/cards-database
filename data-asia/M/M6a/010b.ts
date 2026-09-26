import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Ninetales"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		id: "Ia memiliki bulu yang berkilau keemasan dan 9 ekor yang panjang. Dikatakan bahwa ia hidup selama 1000 tahun."
	},

	stage: "Stage1",

	evolveFrom: {
		id: "Vulpix"
	},

	attacks: [
		{
			name: {
				id: "Ekor Api"
			},
			damage: 60,
			cost: ["Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],

	variants: [
		{
			type: "normal",
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [38],
};

export default card;
