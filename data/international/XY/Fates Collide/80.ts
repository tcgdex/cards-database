import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Whismur",
		'fr-fr': "Chuchmur",
		'es-es': "Whismur",
		'it-it': "Whismur",
		'pt-br': "Whismur",
		'de-de': "Flurmel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		293,
	],

	hp: 60,

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
				'en-us': "Pound",
				'fr-fr': "Écras'Face",
				'es-es': "Destructor",
				'it-it': "Botta",
				'pt-br': "Pancada",
				'de-de': "Pfund"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Round",
				'fr-fr': "Chant Canon",
				'es-es': "Canon",
				'it-it': "Coro",
				'pt-br': "Circular",
				'de-de': "Kanon"
			},
			effect: {
				'en-us': "This attack does 10 damage times the number of your Pokémon that have the Round attack.",
				'fr-fr': "Cette attaque inflige 10 dégâts multipliés par le nombre de vos Pokémon possédant l'attaque Chant Canon.",
				'es-es': "Este ataque hace 10 puntos de daño por cada uno de tus Pokémon que tenga el ataque Canon.",
				'it-it': "Questo attacco infligge 10 danni per ogni tuo Pokémon che conosce l'attacco Coro.",
				'pt-br': "Este ataque causa 10 de danos vezes o número de seus Pokémon que possuem o ataque Circular.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl deiner Pokémon zu, die Kanon beherrschen."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "If it senses danger, it scares the foe by crying out with the volume of a jet-plane engine.",
	},

	thirdParty: {
		cardmarket: 289901,
		tcgplayer: 117855
	}
}

export default card
