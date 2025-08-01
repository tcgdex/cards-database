import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Espurr",
		fr: "Psystigri",
		es: "Espurr",
		it: "Espurr",
		pt: "Espurr",
		de: "Psiau"
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
				en: "Perplexing Eyes",
				fr: "Regard Déroutant",
				es: "Ojos Desconcertantes",
				it: "Sguardo Sconcertante",
				pt: "Olhos Perplexos",
				de: "Verblüffende Augen"
			},
			effect: {
				en: "The Defending Pokémon’s Weakness is now Psychic until the end of your next turn. (The amount of Weakness doesn’t change.)",
				fr: "La Faiblesse du Pokémon Défenseur est maintenant de type Psychic jusqu’à la fin de votre prochain tour. (La valeur de la Faiblesse ne change pas.)",
				es: "La Debilidad del Pokémon Defensor pasa a ser Psychic hasta el final de tu próximo turno. (La cantidad de Debilidad no cambia).",
				it: "La debolezza del Pokémon difensore diventa Psychic fino alla fine del tuo prossimo turno. Quanto è debole non cambia.",
				pt: "A Fraqueza do Pokémon Defensor será Psychic até o final da sua próxima vez de jogar (a quantidade de Fraqueza não muda).",
				de: "Bis zum Ende deines nächsten Zuges ist die Schwäche des Verteidigenden Pokémon jetzt Psychic. (Die Höhe der Schwäche ändert sich nicht.)"
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

	thirdParty: {
		cardmarket: 299463
	}
}

export default card
