import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Meganium ex",
		'fr-fr': "Meganium ex",
		'de-de': "Meganie ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		154,
	],

	hp: 150,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Bayleef",
		'fr-fr': "Macronium"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Nurture and Heal",
				'fr-fr': "Nourrir-guérir",
				'de-de': "Nurture and Heal"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach a Grass Energy card from your hand to 1 of your Pokémon. If you do, remove 1 damage counter from that Pokémon. This power can't be used if Meganium ex is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez attacher à 1 de vos Pokémon une carte Énergie  de votre main. Retirez alors à ce Pokémon 1 marqueur de dégât. Ce pouvoir ne peut pas être utilisé si Meganium ex est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), you may attach a  Energy card from your hand to 1 of your Pokémon. If you do, remove 1 damage counter from that Pokémon. This power can't be used if Meganium ex is affected by a Special Condition"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'herbe",
				'de-de': "Razor Leaf"
			},

			damage: 50,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Power Poison",
				'fr-fr': "Poison puissant",
				'de-de': "Power Poison"
			},

			effect: {
				'en-us': "Discard 1 Energy attached to Meganium ex. The Defending Pokémon is now Poisoned.",
				'fr-fr': "Défaussez 1 Énergie attachée à Meganium ex. Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Discard an Energy attached to Meganium ex. The Defending Pokémon is now Poisoned."
			},

			damage: 90
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87298,
				cardmarket: 276752
			},
		},
	],
}

export default card
