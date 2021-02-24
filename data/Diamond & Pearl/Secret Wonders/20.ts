import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Venusaur",
		fr: "Florizarre",
	},
	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		3,
	],
	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Ivysaur",
		fr: "Herbizarre",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Miracle Aroma",
				fr: "Arôme miracle",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, choose either Asleep, Burned, or Poisoned. The Defending Pokémon is now affected by that Special Condition. This power can't be used if Venusaur is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est pile, choisissez Endormi, Brûlé ou Empoisonné. Le Pokémon Défenseur est maintenant affecté par cet État Spécial. Ce pouvoir ne peut pas être utilisé si Florizarre est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Giant Bloom",
				fr: "Pousse géante",
			},
			effect: {
				en: "Flip a coin. If heads, remove 4 damage counters from Venusaur.",
				fr: "Lancez une pièce. Si c'est pile, retirez à Florizarre 4 marqueurs de dégât.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	retreat: 3,



}

export default card
