import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Spearow",
		fr: "Piafabec"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		21,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mirror Move",
				fr: "Mimique"
			},
			effect: {
				en: "If Spearow was attacked last turn, do the final result of that attack on Spearow to the Defending Pokémon.",
				fr: "Si Piafabec a été attaqué durant le tour précédent, infligez le résultat final de cette attaque sur Piafabec au Pokémon Défenseur."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Il chasse les insectes dans les hautes herbes. Ses petites ailes lui permettent de voler très vite."
	}
}

export default card
