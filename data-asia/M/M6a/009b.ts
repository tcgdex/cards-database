import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Vulpix"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		id: "Enam ekornya yang hangat menjadi makin indah dan bulunya makin bagus seiring dengan pertumbuhan tubuhnya."
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				id: "Menyepak"
			},
			damage: 30,
			cost: ["Fire"],
			effect: {
				id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
			},
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
	dexId: [37],
};

export default card;
