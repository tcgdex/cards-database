import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Granbull",
		'fr-fr': "Granbull",
		'de-de': "Granbull"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [210],

	hp: 90,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Snubbull",
		'fr-fr': "Snubbull"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Timid Tackle",
				'fr-fr': "Charge timide",
				'de-de': "Scheutackle"
			},
			effect: {
				'en-us': "Granbull does 20 damage to itself. Switch Granbull with 1 of your Benched Pokémon.",
				'fr-fr': "Granbull s’inflige 20 dégâts. Échangez Granbull avec l’un des Pokémon de votre Banc.",
				'de-de': "Granbull fügt sich selbst 20 Schadenspunkte zu. Tausche Granbull gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Chomp",
				'fr-fr': "Mâche",
				'de-de': "Champ"
			},
			effect: {
				'en-us': "Does 40 damage plus 10 more damage for each damage counter on Granbull.",
				'fr-fr': "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts sur Granbull.",
				'de-de': "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Granbull zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Because its fangs are too heavy, it always keeps its head tilted down. However, its bite is powerful."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85865,
				cardmarket: 278994
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85865,
				cardmarket: 278994
			}
		},
	],

}

export default card
