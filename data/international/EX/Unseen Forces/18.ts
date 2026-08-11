import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Ursaring",
		'fr-fr': "Ursaring",
		'de-de': "Ursaring"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		217,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Teddiursa",
		'fr-fr': "Teddiursa"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Intimidating Ring",
				'fr-fr': "Cercle intimidant",
				'de-de': "Intimidating Ring"
			},
			effect: {
				'en-us': "As long as Ursaring is your Active Pokémon, your opponent's Basic Pokémon can't attack or use any Poké-Powers.",
				'fr-fr': "Tant qu'Ursaring est votre Pokémon Actif, les Pokémon de base de votre adversaire ne peuvent pas attaquer ou utiliser des Poké-Powers.",
				'de-de': "As long as Ursaring is your Active Pokémon, your opponent's Basic Pokémon can't attack or use any Poké-Powers."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Drag Off",
				'fr-fr': "Traîne",
				'de-de': "Drag Off"
			},
			effect: {
				'en-us': "Before doing damage, you may switch 1 of your opponent's Benched Pokémon with the Defending Pokémon. If you do, this attack does 20 damage to the new Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
				'fr-fr': "Avant d'infliger des dégâts, vous pouvez échanger 1 des Pokémon de Banc de votre adversaire avec le Pokémon Défenseur. Cette attaque inflige alors 20 dégâts au nouveau Pokémon Défenseur. Votre adversaire choisit le Pokémon Défenseur à échanger.",
				'de-de': "Before doing damage, you may switch 1 of your opponent's Benched Pokémon with the Defending Pokémon. If you do, this attack does 20 damage to the new Defending Pokémon. Your opponent chooses the Defending Pokémon to switch."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rock Smash",
				'fr-fr': "Éclate-roc",
				'de-de': "Rock Smash"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, this attack does 40 damage plus 20 more damage."
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

	
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90252,
				cardmarket: 276664
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 90252,
				cardmarket: 276664
			},
		}
	],
}

export default card
