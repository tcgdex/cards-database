import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Shaymin",
		fr: "Shaymin",
		de: "Shaymin"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		492,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Flower Aroma",
				fr: "Arôme floral",
				de: "Flower Aroma"
			},
			effect: {
				en: "Remove 2 damage counters from Shaymin. The Defending Pokémon is now Asleep.",
				fr: "Retirez à Shaymin 2 marqueurs de dégât. Le Pokémon Défenseur est maintenant Endormi.",
				de: "Remove 2 damge counters from Shaymin. The Defending Pokémon is now Asleep."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Damage Aid",
				fr: "Aide aux dégâts",
				de: "Damage Aid"
			},
			effect: {
				en: "If the Defending Pokémon is affected by a Special Condition, this attack does 30 damage plus 50 more damage. Then, remove all Special Conditions from the Defending Pokémon.",
				fr: "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 30 dégâts plus 50 dégâts supplémentaires. Ensuite, retirez au Pokémon Défenseur tous ses États Spéciaux.",
				de: "If the Defending Pokémon is affected by a Special Condition, this attack does 30 damage plus 50 more damage. Then, remove all Special Conditions from the Defending Pokémon."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
