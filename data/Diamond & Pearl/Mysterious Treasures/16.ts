import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Typhlosion",
		fr: "Typhlosion"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		157,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Quilava",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Firestarter",
				fr: "Pyroteknik"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon. This power can't be used if Typhlosion is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Fire de votre pile de défausse à 1 des Pokémon de votre Banc. Ce pouvoir ne peut pas être utilisé si Typhlosion est affecté par un État Spécial."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Evaporating Heat",
				fr: "Chaleur évaporante"
			},
			effect: {
				en: "Discard a Water Energy attached to the Defending Pokémon.",
				fr: "Défaussez une Énergie Water attachée au Pokémon Défenseur."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	description: {
		fr: "Il attaque en projetant des flammes. Il se dissimule derrière les vagues de chaleur qu'il produit."
	}
}

export default card
