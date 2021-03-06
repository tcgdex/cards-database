import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Électrode",
	},
	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		101,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Buzzap Thunder",
			},
			effect: {
				en: "Once during your turn (before your attack), you may Knock Out this Pokémon and attach it to one of your Lightning Pokémon as a Special Energy card. This card provides 2 Lightning Energy only while this card is attached to a Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Head Bolt",
				fr: "Talent : Tonnerre Buzzap",
			},
			effect: {
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez mettre K.O. ce Pokémon et l’attacher à l’un de vos Pokémon Lightning en tant que carte Énergie spéciale. Cette carte ne fournit 2 Énergies Lightning que pendant qu’elle est attachée à un Pokémon.",
			},
			damage: 70,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				fr: "Éclair Frontal",
			},

			damage: 70,

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
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
