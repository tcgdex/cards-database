import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Palkia & Dialga LEGEND",
		fr: "Palkia & Dialga LÉGENDE",
	},

	illustrator: "Shinji Higuchi + Sachiko Eba/樋口真嗣+江場左知子",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		483,
	],

	types: [
		"Water",
		"Metal",
	],

	suffix: "Legend",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sudden Delete",
				fr: "Disparition soudaine",
			},
			effect: {
				en: "Choose 1 of your opponent’s Benched Pokémon. Put that Pokémon and all cards attached to it back into your opponent’s hand.",
				fr: "Choisissez l’un des Pokémon de Banc de votre adversaire. Remettez ce Pokémon et toutes les cartes qui lui sont attachées dans la main de votre adversaire.",
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Time Control",
				fr: "Contrôle temporel",
			},
			effect: {
				en: "Discard all Metal Energy attached to Palkia & Dialga LEGEND. Add the top 2 cards of your opponent’s deck to his or her Prize cards.",
				fr: "Défaussez toutes les cartes Énergie Metal attachées à Palkia & Dialga LÉGENDE. Ajoutez les 2 cartes du dessus du deck de votre adversaire à ses cartes Récompense.",
			},

		},
		{

			name: {
				fr: "",
			},
			effect: {
				fr: "Vous ne pouvez placer cette carte sur votre Banc que si vous placez en même temps l’autre moitié de Palkia & Dialga LÉGENDE.",
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	hp: 160
}

export default card
