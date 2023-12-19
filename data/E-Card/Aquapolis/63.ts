import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Tyrogue",
		fr: "Débugant",
		de: "Rabauz"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		236,
	],
	hp: 30,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
			],

			name: {
				en: "Energy Punch",
				fr: "Poing énergétique",
				de: "Energy Punch"
			},

			effect: {
				en: "Flip a coin. If heads, discard a Special Energy card attached to the Defending Pokémon. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est face, défaussez-vous d'une carte Énergie spéciale attachée au Pokémon Défenseur. Si c'est pile, cette attaque ne fait rien.",
				de: "Flip a coin. If heads, discard a Special Energy card attached to the Defending Pokémon. If tails, this attack does nothing."
			},

			damage: 10
		},
	],






}

export default card
