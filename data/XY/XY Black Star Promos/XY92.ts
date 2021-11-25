import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Sableye",
		fr: "Ténéfix",
	},

	illustrator: "match",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		302,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Hunt",
				fr: "Chasse d'Énergie",
			},
			effect: {
				en: "Flip 3 coins. For each heads, attach a basic Energy card from your discard pile to your Benched Pokémon-EX in any way you like.",
				fr: "Lancez 3 pièces. Pour chaque côté face, attachez une carte Énergie de base de votre pile de défausse à vos Pokémon-EX de Banc, de la manière que vous voulez."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
				fr: "Tranch'Griffe"
			},

			damage: 20,

		},
	],

	retreat: 2,

	abilities: [{
		type: "Ability",

		name: {
			fr: "{title}:"
		},

		effect: {
			fr: "{title}: Évitez tous les effets des talents des Pokémon de votre adversaire infligés à ce Pokémon."
		}
	}]
}

export default card
