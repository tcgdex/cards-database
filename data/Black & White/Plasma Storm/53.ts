import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Zubat",
		fr: "Nosferapti",
		es: "Zubat",
		it: "Zubat",
		pt: "Zubat",
		de: "Zubat"
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
				en: "Free Flight",
				fr: "Vol Gratuit",
				es: "Vuelo Libre",
				it: "Volo Libero",
				pt: "Vôo Livre",
				de: "Freiflug"
			},
			effect: {
				en: "If this Pokémon has no Energy attached to it, this Pokémon has no Retreat Cost.",
				fr: "Si aucune Énergie n’est attachée à ce Pokémon, ce Pokémon n’a pas de coût de Retraite.",
				es: "Si este Pokémon no tiene ninguna Energía unida a él, este Pokémon no tiene ningún Coste de Retirada.",
				it: "Se questo Pokémon non ha delle Energie assegnate, non ha costo di ritirata.",
				pt: "Se este Pokémon não possuir Energia ligada a ele, ele não terá Custo para Recuar.",
				de: "Wenn an dieses Pokémon keine Energie angelegt ist, hat dieses Pokémon keine Rückzugskosten."
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
				en: "Wing Attack",
				fr: "Cru-Aile",
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

	thirdParty: {
		cardmarket: 280792,
		tcgplayer: 90778
	}
}

export default card
