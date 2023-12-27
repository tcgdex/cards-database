import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Cresselia",
		fr: "Cresselia",
		de: "Cresselia"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare Holo",
	category: "Pokemon",

	set: Set,
	dexId: [
		488,
	],
	hp: 80,
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
				en: "Moon Twinkle",
				fr: "Étincelle de lune",
				de: "Mondgefunkel"
			},
			effect: {
				en: "If there is any Stadium card in play, remove 2 damage counters from Cresselia.",
				fr: "Si une carte Stade est en jeu, retirez à Cresselia 2 marqueurs de dégât.",
				de: "Wenn sich eine Stadion-Karte im Spiel befindet, entferne 2 Schadensmarken von Cresselia."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Lunar Dance",
				fr: "Danse-lune",
				de: "Lunartanz"
			},
			effect: {
				en: "You may discard 2 Energy attached to Cresselia. If you do, remove all damage counters from 1 of your Benched Pokémon.",
				fr: "Vous pouvez défausser 2 Énergies attachées à Cresselia. Retirez alors tous ses marqueurs de dégât à 1 des Pokémon de votre Banc.",
				de: "Du kannst 2 Energien, die an Cresselia angelegt sind, auf deinen Ablagestapel legen. Wenn du das machst, entferne alle Schadensmarken von 1 Pokémon auf deiner Bank."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
