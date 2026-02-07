import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Palkia & Dialga LEGEND",
		fr: "Palkia & Dialga LÉGENDE",
		de: "Palkia & Dialga LEGENDE"
	},

	illustrator: "Shinji Higuchi + Sachiko Eba/樋口真嗣+江場左知子",
	rarity: "LEGEND",
	category: "Pokemon",
	set: Set,

	dexId: [
		484, // Palkia
		483, // Dialga
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
				de: 'Plötzliche Tilgung'
			},
			effect: {
				en: "Choose 1 of your opponent’s Benched Pokémon. Put that Pokémon and all cards attached to it back into your opponent’s hand.",
				fr: "Choisissez l’un des Pokémon de Banc de votre adversaire. Remettez ce Pokémon et toutes les cartes qui lui sont attachées dans la main de votre adversaire.",
				de: 'Wähle 1 Pokémon auf der Bank deines Gegners. Dein Gegner nimmt das gewählte Pokémon und alle an es angelegten Karten auf seine Hand zurück.  '
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
				de: 'Zeitherrschaft'
			},
			effect: {
				en: "Discard all Metal Energy attached to Palkia & Dialga LEGEND. Add the top 2 cards of your opponent’s deck to his or her Prize cards.",
				fr: "Défaussez toutes les cartes Énergie Metal attachées à Palkia & Dialga LÉGENDE. Ajoutez les 2 cartes du dessus du deck de votre adversaire à ses cartes Récompense.",
				de: 'Lege alle -Energien, die an Palkia- und Dialga-LEGENDE angelegt sind, auf deinen Ablagestapel. Füge die obersten 2 Karten vom Deck deines Gegner seinen Preiskarten hinzu.  '
			},

		}
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

	variants: [
		{ type: 'holo', size: 'standard' }
	],

	hp: 160,

	thirdParty: {
		cardmarket: 279631
	}
}

export default card
