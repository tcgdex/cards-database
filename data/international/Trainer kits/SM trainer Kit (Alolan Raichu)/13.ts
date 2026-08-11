import { Card } from 'models/database/card'
import Set from '../SM trainer Kit (Alolan Raichu)'

const card: Card = {
	dexId: [21],
	set: Set,

	name: {
		'en-us': "Spearow",
		'fr-fr': "Piafabec",
		'es-es': "Spearow",
		'it-it': "Spearow",
		'pt-br': "Spearow",
		'de-de': "Habitak"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: [
		"Colorless"
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck Bugs"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is a Grass Pokémon, this attack does 30 more damage."
			},
			damage: "10+"
		},
	],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297244,
				tcgplayer: 152865
			}
		},
	],

}

export default card