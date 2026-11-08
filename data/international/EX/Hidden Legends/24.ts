import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Relicanth",
		'fr-fr': "Relicanth",
		'de-de': "Relicanth"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [369],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Deep Sleep",
				'fr-fr': "Gros dodo",
				'de-de': "Deep Sleep"
			},
			effect: {
				'en-us': "As long as Relicanth is your Active Pokémon, a player flips 2 coins for each of his or her Pokémon that is Asleep between turns. If either coin is tails, that Pokémon is still Asleep.",
				'fr-fr': "Tant que Relicanth est votre Pokémon Actif, un Joueur lance 2 pièces entre deux tours pour chaque Pokémon Endormi qu'il possède. Si l'une des pièces est pile, le ou les Pokémon restent Endormis.",
				'de-de': "As long as Relicanth is your Active Pokémon, a player flips 2 coins for each of his or her Pokémon that is Asleep between turns. If either coin is tails, that Pokémon is still Asleep."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Yawn",
				'fr-fr': "Baillement",
				'de-de': "Yawn"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Asleep."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88684,
				cardmarket: 276098
			}
		},
		{
			type: "reverse",
			foil: 'energy',
			thirdParty: {
				tcgplayer: 88684,
				cardmarket: 276098
			}
		},
	]
}

export default card
