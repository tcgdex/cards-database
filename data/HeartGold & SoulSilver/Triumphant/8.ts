import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Rapidash",
		fr: "Galopa",
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		78,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Ponyta",
		fr: "Ponyta",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fiery Spirit",
				fr: "Esprit flamboyant",
			},
			effect: {
				en: "Rapidash can’t be Confused.",
				fr: "Galopa ne peut pas être Confus.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ring of Fire",
				fr: "Anneau de feu",
			},
			effect: {
				en: "The Defending Pokémon is now Burned and can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé et ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "At full gallop, its four hooves barely touch the ground because it moves so incredibly fast."
	},

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
