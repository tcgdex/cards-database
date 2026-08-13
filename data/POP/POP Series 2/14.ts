import { Card } from '../../../interfaces'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		en: "Luvdisc",
		fr: "Lovdisc",
		de: "Liebiskus"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [370],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Paralyzing Kiss",
				fr: "Baiser paralysant",
				de: "Lähmender Kuss"
			},
			effect: {
				en: "If there are 2 Defending Pokémon in play, choose 1 of the Defending Pokémon. That Pokémon is now Paralyzed. (If there is only 1 Defending Pokémon, this attack does nothing.)",
				fr: "S'il y a 2 Pokémon Défenseurs en jeu, choisissez-en un. Ce Pokémon est maintenant Paralysé. (S'il n'y a qu'1 Pokémon Défenseur, cette attaque est sans effet.)",
				de: "Wenn sich 2 Verteidigende Pokémon im Spiel befinden, wähle 1 von ihnen. Das gewählte Pokémon ist jetzt gelähmt. (Wenn nur 1 Verteidigendes Pokémon vorhanden ist, hat dieser Angriff keine Auswirkung.)"
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Fast Stream",
				fr: "Torrent",
				de: "Reißender Strom"
			},
			effect: {
				en: "Move 1 Energy card attached to the Defending Pokémon to the other Defending Pokémon. (Ignore this effect if your opponent has only 1 Defending Pokémon.)",
				fr: "Prenez une carte Énergie attachée au Pokémon Défenseur et attachez-la à l'autre Pokémon Défenseur. (Ne tenez pas compte de cet effet si votre adversaire ne possède qu'un seul Pokémon Défenseur).",
				de: "Nimm 1 Energiekarte von dem Verteidigenden Pokémon und lege sie an das andere Verteidigende Pokémon an. (Dieser Effekt hat keine Auswirkung, wenn der Gegner nur 1 Verteidigendes Pokémon hat.)"
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86934,
				cardmarket: 277445
			},
		},
	],

}

export default card
