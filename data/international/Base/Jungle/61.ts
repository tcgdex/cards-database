import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Rhyhorn",
		'fr-fr': "Rhinocorne",
		'de-de': "Rihorn"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		111,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Leer",
				'fr-fr': "Groz'yeux",
				'de-de': "Silberblick"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon can't attack Rhyhorn during your opponent's next turn. (Benching either Pokémon ends this effect.)",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer Rhinocorne pendant le prochain tour de votre adversaire. (Si l'un des deux Pokémon bat en retraite, cet effet prend fin.)",
				'de-de': "Wirf eine Münze. Bei 'Kopf' kann das verteidigende Pokémon Rihorn während des nächsten gegnerischen Zuges nicht angreifen. (Kommt einer der beiden Pokémon auf der Bank, ist diese Wirkung nicht weiter gültig.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Horn Attack",
				'fr-fr': "Koud'korne",
				'de-de': "Hornattacke"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 3,


	description: {
		'en-us': "Its massive bones are 1,000 times harder than human bones. It can easily knock a trailer flying.",
		'fr-fr': "Avec une ossature 1000 fois plus résistante que celle de l'homme, ses charges sont dévastatrices."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273858,
				tcgplayer: 45164
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273858,
				tcgplayer: 45164
			}
		}
	],
}

export default card
