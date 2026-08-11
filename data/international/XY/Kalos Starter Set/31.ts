import { Card } from 'models/database/card'
import Set from '../Kalos Starter Set'

const card: Card = {
	name: {
		'en-us': "Fletchling",
		'fr-fr': "Passerouge",
		'es-es': "Fletchling",
		'it-it': "Fletchling",
		'pt-br': "Fletchling",
		'de-de': "Dartiri"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		661,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Razor Wind",
				'fr-fr': "Coupe-Vent",
				'es-es': "Viento Cortante",
				'it-it': "Ventagliente",
				'pt-br': "Vento Cortante",
				'de-de': "Klingensturm"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'es-es': "Lanza una moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue uma moeda. Se sair coroa, esse ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "These friendly Pokémon send signals to one another with beautiful chirps and tail-feather movements.",
	},

	thirdParty: {
		cardmarket: 281297,
		tcgplayer: 85508
	}
}

export default card
