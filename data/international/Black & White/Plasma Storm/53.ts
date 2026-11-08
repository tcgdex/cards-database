import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Zubat",
		'fr-fr': "Nosferapti",
		'es-es': "Zubat",
		'it-it': "Zubat",
		'pt-br': "Zubat",
		'de-de': "Zubat"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		41,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Free Flight",
				'fr-fr': "Vol Gratuit",
				'es-es': "Vuelo Libre",
				'it-it': "Volo Libero",
				'pt-br': "Vôo Livre",
				'de-de': "Freiflug"
			},
			effect: {
				'en-us': "If this Pokémon has no Energy attached to it, this Pokémon has no Retreat Cost.",
				'fr-fr': "Si aucune Énergie n’est attachée à ce Pokémon, ce Pokémon n’a pas de coût de Retraite.",
				'es-es': "Si este Pokémon no tiene ninguna Energía unida a él, este Pokémon no tiene ningún Coste de Retirada.",
				'it-it': "Se questo Pokémon non ha delle Energie assegnate, non ha costo di ritirata.",
				'pt-br': "Se este Pokémon não possuir Energia ligada a ele, ele não terá Custo para Recuar.",
				'de-de': "Wenn an dieses Pokémon keine Energie angelegt ist, hat dieses Pokémon keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Wing Attack",
				'fr-fr': "Cru-Aile",
			},

			damage: 20,

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
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It does not need eyes, because it emits ultrasonic waves to check its surrounding while it flies.",
	},

	thirdParty: {
		cardmarket: 280792,
		tcgplayer: 90778
	}
}

export default card
