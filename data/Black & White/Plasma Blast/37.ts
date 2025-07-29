import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Mesprit",
		fr: "Créfollet",
		es: "Mesprit",
		it: "Mesprit",
		pt: "Mesprit",
		de: "Vesprit"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		481,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mental Shroud",
				fr: "Écran Mental",
				es: "Velo MentalBarrera Mental",
				it: "Manto Psichico",
				pt: "Cortina Mental",
				de: "Gedankengardine"
			},
			effect: {
				en: "If you have Uxie and Azelf in play, each of your Pokémon has no Weakness.",
				fr: "Si vous avez Créhelf et Créfadet en jeu, chacun de vos Pokémon n’a pas de Faiblesse.",
				es: "Si tienes a Uxie y a Azelf en juego, cada uno de tus Pokémon no tiene ninguna Debilidad.",
				it: "Se hai Uxie e Azelf in gioco, nessuno dei tuoi Pokémon ha debolezza.",
				pt: "Caso você possua Uxie e Azelf em jogo, seus Pokémon não terão Fraqueza.",
				de: "Wenn du Selfe und Tobutz im Spiel hast, hat jedes deiner Pokémon keine Schwäche."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psyshot",
				fr: "Piqûre Psy",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281058
	}
}

export default card
