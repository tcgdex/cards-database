import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Slowpoke"
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		id: "Ia selalu melamun di tepi perairan. Ia tidak sadar seharian meskipun ekornya digigit sesuatu."
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				id: "Bersembunyi Dalam Sumur"
			},
			cost: ["Colorless"],
			effect: {
				id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
			},
		},
		{
			name: {
				id: "Pistol Air"
			},
			damage: 20,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],

	variants: [
		{
			type: "normal",
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [79],
};

export default card;
