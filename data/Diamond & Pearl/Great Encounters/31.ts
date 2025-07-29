import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Weezing",
		fr: "Smogogo",
		de: "Smogmog"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		110,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Toxic Virus",
				fr: "Virus toxik",
				de: "Giftvirus"
			},
			effect: {
				en: "At any time between turns, each player puts 1 more damage counter on his or her Poisoned Pokémon.",
				fr: "N'importe quand entre deux tours, chaque joueur place 1 marqueur de dégât supplémentaire sur ses Pokémon Empoisonnés.",
				de: "Jeder Spieler legt zu einem beliebigen Zeitpunkt zwischen zwei Zügen 1 Schadensmarke zusätzlich auf seine vergifteten Pokémon."
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
				en: "Offensive Gas",
				fr: "Gaz offensif",
				de: "Gasattacke"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused and Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus et Empoisonné.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt vergiftet und verwirrt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277933
	}
}

export default card
