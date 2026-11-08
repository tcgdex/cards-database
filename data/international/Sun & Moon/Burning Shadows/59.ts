import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Espurr",
		'fr-fr': "Psystigri",
		'es-es': "Espurr",
		'it-it': "Espurr",
		'pt-br': "Espurr",
		'de-de': "Psiau"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		677,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Perplexing Eyes",
				'fr-fr': "Regard Déroutant",
				'es-es': "Ojos Desconcertantes",
				'it-it': "Sguardo Sconcertante",
				'pt-br': "Olhos Perplexos",
				'de-de': "Verblüffende Augen"
			},
			effect: {
				'en-us': "The Defending Pokémon’s Weakness is now Psychic until the end of your next turn. (The amount of Weakness doesn’t change.)",
				'fr-fr': "La Faiblesse du Pokémon Défenseur est maintenant de type Psychic jusqu’à la fin de votre prochain tour. (La valeur de la Faiblesse ne change pas.)",
				'es-es': "La Debilidad del Pokémon Defensor pasa a ser Psychic hasta el final de tu próximo turno. (La cantidad de Debilidad no cambia).",
				'it-it': "La debolezza del Pokémon difensore diventa Psychic fino alla fine del tuo prossimo turno. Quanto è debole non cambia.",
				'pt-br': "A Fraqueza do Pokémon Defensor será Psychic até o final da sua próxima vez de jogar (a quantidade de Fraqueza não muda).",
				'de-de': "Bis zum Ende deines nächsten Zuges ist die Schwäche des Verteidigenden Pokémon jetzt Psychic. (Die Höhe der Schwäche ändert sich nicht.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The organ that emits its intense psychic power is sheltered by its ears to keep power from leaking out.",
	},

	thirdParty: {
		cardmarket: 299463,
		tcgplayer: 138541
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
