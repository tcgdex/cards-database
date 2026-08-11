import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Wobbuffet",
		'fr-fr': "Qulbutoke",
		'de-de': "Woingenau"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		202,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Counter",
				'fr-fr': "Riposte",
				'de-de': "Counter"
			},
			effect: {
				'en-us': "If an attack damages Wobbuffet during your opponent's next turn (even if Wobbuffet is knocked out), flip a coin. If heads, Wobbuffet attacks the Defending Pokémon for an equal amount of damage.",
				'fr-fr': "Si une attaque inflige des dégâts à Qulbutoke pendant le prochain tour de votre adversaire (même si Qulbutoke est K.O.), lancez 1 pièce. Si c'est face, Qulbutoke attaque le Pokémon Défenseur et lui inflige le même nombre de dégâts.",
				'de-de': "If an attack damages Wobbuffet during your opponent's next turn (even if Wobbuffet is Knocked Out), flip a coin. If heads, Wobbuffet attacks the Defending Pokémon for an equal amount of damage."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "To keep its pitch-black tail hidden, it lives quietly in the darkness. It is never first to attack.",
		'fr-fr': "Pour cacher sa queue noire, il vit discrètement dans l'obscurité. Il n'attaque jamais le premier."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274527,
				tcgplayer: 90614
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274527,
				tcgplayer: 90614
			}
		}
	]
}

export default card

