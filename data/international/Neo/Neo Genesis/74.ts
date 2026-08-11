import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Snubbull",
		'fr-fr': "Snubbull",
		'de-de': "Snubbull"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		209,
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
				'en-us': "Roar",
				'fr-fr': "Hurlement",
				'de-de': "Brüller"
			},
			effect: {
				'en-us': "Flip a coin. If heads and if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)",
				'fr-fr': "Lancez une pièce. Si c'est face et si votre adversaire a un ou plusieurs Pokémon sur son Banc, il choisit l'un d'eux et l'échange avec le Pokémon Défenseur. (Infligez les dégâts avant d'échanger les Pokémon.)",
				'de-de': "Wirf eine Münze. Bei 'Kopf' und falls dein Gegner mindestens ein Pokémon auf der Bank hat, wählt er eines von ihnen und tauscht es mit seinem aktiven Pokémon aus.(Füge die Schadenspunkte vor dem Austauschen der Pokémon zu.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lick",
				'fr-fr': "Léchouille",
				'de-de': "Schlecker"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Although it looks frightening, it is actually kind and affectionate. It is very popular.",
		'fr-fr': "Bien qu'il soit effrayant, il est en fait doux et attentionné. Il est très populaire."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274474,
				tcgplayer: 89412
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274474,
				tcgplayer: 89412
			}
		}
	]
}

export default card
