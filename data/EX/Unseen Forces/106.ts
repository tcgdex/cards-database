import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Meganium ex",
		fr: "Meganium ex"
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
		en: "Bayleef",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Nurture and Heal",
				fr: "Nourrir-guérir"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Grass Energy card from your hand to 1 of your Pokémon. If you do, remove 1 damage counter from that Pokémon. This power can't be used if Meganium ex is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez attacher à 1 de vos Pokémon une carte Énergie  de votre main. Retirez alors à ce Pokémon 1 marqueur de dégât. Ce pouvoir ne peut pas être utilisé si Meganium ex est affecté par un État Spécial."
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
				en: "Razor Leaf",
				fr: "Tranch'herbe"
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
				en: "Power Poison",
				fr: "Poison puissant"
			},

			effect: {
				en: "Discard 1 Energy attached to Meganium ex. The Defending Pokémon is now Poisoned.",
				fr: "Défaussez 1 Énergie attachée à Meganium ex. Le Pokémon Défenseur est maintenant Empoisonné."
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




}

export default card
