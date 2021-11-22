import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Mew",
		fr: "Mew"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		151,
	],

	hp: 50,

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
				en: "Psywave",
				fr: "Vague psy"
			},
			effect: {
				en: "Does 10 damage times the number of Energy cards attached to the Defending Pokémon.",
				fr: "Inflige 10 dégâts multipliés par le nombre de cartes Énergie attachées au Pokémon Défenseur."
			},
			damage: "10×",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Devolution Beam",
				fr: "Rayon rétrograde"
			},
			effect: {
				en: "Choose an Evolved Pokémon (your own or your opponent's). Return the highest Stage Evolution card on that Pokémon to its player's hand. That Pokémon is no longer Asleep, Confused, Paralyzed, Poisoned, or anything else that might be the result of an attack (just as if you had evolved it).",
				fr: "Choisissez un Pokémon évolué (l'un des vôtres ou l'un de ceux de votre adversaire). Retournez la plus haute carte Évolution sur ce Pokémon dans la main de son propriétaire. Ce Pokémon n'est plus Endormi, Confus, Paralysé, Empoisonné ou tout autre effet résultant d'une attaque (comme s'il venait juste d'évoluer)."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Unique et rare, son existence est remise en cause par les experts. Peu nombreux sont ceux qui l'ont vu."
	}
}

export default card
