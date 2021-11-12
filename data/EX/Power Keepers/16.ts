import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Magneton",
		fr: "Magneton"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		82,
	],
	hp: 70,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Magnemite",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Magnetic Field",
				fr: "Champ magnétique"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have basic Energy cards in your discard pile, you may discard any 1 card from your hand. Then search for up to 2 basic Energy cards from your discard pile, show them to your opponent, and put them into your hand. You can't return the card you first discarded to your hand in this way. This power can't be used if Magneton is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si vous possédez des cartes Énergie de base dans votre pile de défausse, vous pouvez défausser n'importe quelle carte de votre main. Choisissez alors jusqu'à 2 cartes Énergie de base dans votre pile de défausse, montrez-les à votre adversaire et placez-les dans votre main. Vous ne pouvez pas reprendre la carte que vous avez défaussée. Ce pouvoir ne peut pas être utilisé si Magneton est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Magnetic Force",
				fr: "Force magnétique"
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to all of your Pokémon (including Magneton).",
				fr: "Inflige 10 dégâts multipliés par le nombre d'Énergies attachées à tous vos Pokémon (Magneton inclus)."
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
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],




}

export default card
