import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Cresselia",
		fr: "Cresselia",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
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
			},
			effect: {
				en: "If there is any Stadium card in play, remove 2 damage counters from Cresselia.",
				fr: "Si une carte Stade est en jeu, retirez à Cresselia 2 marqueurs de dégât.",
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
			},
			effect: {
				en: "You may discard 2 Energy attached to Cresselia. If you do, remove all damage counters from 1 of your Benched Pokémon.",
				fr: "Vous pouvez défausser 2 Énergies attachées à Cresselia. Retirez alors tous ses marqueurs de dégât à 1 des Pokémon de votre Banc.",
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
