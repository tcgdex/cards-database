import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Stantler",
		fr: "Cerfrousse"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		234,
	],
	hp: 70,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Screechy Voice",
				fr: "Voix stridente"
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, the Defending Pokémon is now Confused.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolué, le Pokémon Défenseur est maintenant Confus."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Push Away",
				fr: "Mettre à l'écart"
			},
			effect: {
				en: "Look at your opponent's hand, choose a Trainer card you find there, and discard it.",
				fr: "Regardez la main de votre adversaire, choisissez une carte Dresseur et défaussez-la."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
