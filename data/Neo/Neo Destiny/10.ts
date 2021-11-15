import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Typhlosion",
		fr: "Typhlosion obscur"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		157,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Quilava",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Claw Swipe",
				fr: "Combo-serres"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Rushing Flames",
				fr: "Vague de flammes"
			},
			effect: {
				en: "You may discard any number of Energy cards attached to your Pokémon. Flip a coin for each Energy card discarded in this way. This attack does 40 damage times the number of heads.",
				fr: "Vous pouvez vous défausser de n'importe quel nombre de cartes Énergie  attachées à votre Pokémon. Lancez une pièce pour chaque carte Énergie  défaussée de cette manière. Cette attaque fait 40 dégâts multipliés par le nombre de faces."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "Quand il se bat, l'air autour de lui scintille et semble s'enflammer à cause de l'intense chaleur émanant de lui."
	}
}

export default card
