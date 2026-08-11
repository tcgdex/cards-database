import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Ferrothorn",
		'fr-fr': "Noacier",
		'es-es': "Ferrothorn",
		'it-it': "Ferrothorn",
		'pt-br': "Ferrothorn",
		'de-de': "Tentantel"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		598,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Ferroseed",
		'fr-fr': "Grindur",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Iron Defense",
				'fr-fr': "Mur de Fer",
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques (y compris les dégâts) infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Whip",
				'fr-fr': "Mégafouet",
			},
			effect: {
				'en-us': "Does 10 damage for each Energy attached to this Pokémon to one of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts pour chaque Énergie attachée à ce Pokémon à 1 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It fights by swinging around its three spiky feelers. A hit from these steel spikes can reduce a boulder to rubble.",
	},

	thirdParty: {
		cardmarket: 280037,
		tcgplayer: 85429
	}
}

export default card
