import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [840],
	set: Set,

	name: {
		'en-us': "Applin",
		'fr-fr': "Verpom",
		'de-de': "Knapfel",
		'it-it': "Applin",
		'es-es': "Applin",
		'pt-br': "Applin",
		'es-mx': "Applin"
	},

	illustrator: "Tetsu Kayama",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Mini Drain",
			'fr-fr': "Mini-Assèchement",
			'de-de': "Minisauger",
			'it-it': "Miniassorbimento",
			'es-es': "Minidrenaje",
			'pt-br': "Minidreno",
			'es-mx': "Minidrenado"
		},

		effect: {
			'en-us': "Heal 10 damage from this Pokémon.",
			'fr-fr': "Soignez 10 dégâts de ce Pokémon.",
			'de-de': "Heile 10 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Cura questo Pokémon da 10 danni.",
			'es-es': "Cura 10 puntos de daño a este Pokémon.",
			'pt-br': "Cure 10 pontos de dano deste Pokémon.",
			'es-mx': "Cura 10 puntos de daño a este Pokémon."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825890,
				tcgplayer: 632842
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825890,
				tcgplayer: 632842
			}
		},
	],
}

export default card
