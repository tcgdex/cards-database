import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Surskit",
		fr: "Arakdo",
		es: "Surskit",
		it: "Surskit",
		pt: "Surskit",
		de: "Gehweiher"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		283,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sweet Scent",
				fr: "Doux Parfum",
				de: "Lockduft"
			},
			effect: {
				en: "Heal 20 damage from 1 of your Pokémon.",
				fr: "Soignez 20 dégâts à 1 de vos Pokémon.",
				de: "Heile 20 Schadenspunkte bei 1 deiner Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It appears as if it is skating on water. It draws prey with a sweet scent from the tip of its head.",
		de: "Scheinbar reitet es auf dem Wasser. Es lockt seine Beute mit einem süßen Duft an."
	},

	thirdParty: {
		cardmarket: 281022,
		tcgplayer: 89652
	}
}

export default card
