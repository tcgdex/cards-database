import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dark Wartortle",
		'fr-fr': "Carabaffe obscur",
		'de-de': "Dunkles Schillok"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		8,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Squirtle",
		'fr-fr': "Carapuce"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Doubleslap",
				'fr-fr': "Double gifle",
				'de-de': "Doubleslap"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 2 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Mirror Shell",
				'fr-fr': "Carapace miroir",
				'de-de': "Mirror Shell"
			},
			effect: {
				'en-us': "If an attack does damage to Dark Wartortle during your opponent's next turn (even if Dark Wartortle is Knocked Out), Dark Wartortle attacks the Defending Pokémon for an equal amount of damage.",
				'fr-fr': "Si une attaque inflige des dégâts à Carabaffe obscur pendant le prochain tour de votre adversaire (même si Carabaffe obscur est K.O.), Carabaffe obscur attaque le Pokémon Défenseur avec une quantité de dégâts égale.",
				'de-de': "If an attack does damage to Dark Wartortle during your opponent's next turn (even if Dark Wartortle is Knocked Out). Dark Wartortle does an equal amount of damage to the Defending Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "A Pokémon with a negative attitude, it hides in its shell whenever it's in a bad mood—which is often.",
		'fr-fr': "Il a très mauvais caractère et se cache dans sa carapace dès qu'il est de mauvaise humeur - ce qui est souvent le cas."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274099,
				tcgplayer: 84670
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274099,
				tcgplayer: 84670
			}
		}
	]
}

export default card
