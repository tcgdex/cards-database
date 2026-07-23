import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Palkia & Dialga LEGEND",
		fr: "Palkia & Dialga LÉGENDE",
		de: "Palkia & Dialga LEGENDE"
	},

	illustrator: "Shinji Higuchi + Sachiko Eba",
	rarity: "LEGEND",
	category: "Pokemon",
	set: Set,

	dexId: [483, 484],
	hp: 160,

	types: [
		"Water",
		"Metal"
	],

	suffix: "Legend",

	attacks: [{
		name: {
			en: "Sudden Delete",
			fr: "",
			de: "Plötzliche Tilgung"
		},

		effect: {
			en: "Choose 1 of your opponent's Benched Pokémon. Put that Pokémon and all cards attached to it back to your opponent's hand.",
			fr: "Vous ne pouvez placer cette carte sur votre Banc que si vous placez en même temps l’autre moitié de Palkia & Dialga LÉGENDE.",
			de: "Wähle 1 Pokémon auf der Bank deines Gegners. Dein Gegner nimmt das gewählte Pokémon und alle an es angelegten Karten auf seine Hand zurück."
		},

		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Time Control",
			de: "Zeitherrschaft"
		},

		effect: {
			en: "Discard all Metal Energy attached to Palkia & Dialga LEGEND. Add the top 2 cards of your opponent's deck to his or her Prize cards.",
			de: "Lege alle -Energien, die an Palkia- und Dialga-LEGENDE angelegt sind, auf deinen Ablagestapel. Füge die obersten 2 Karten vom Deck deines Gegner seinen Preiskarten hinzu."
		},

		cost: ["Metal", "Metal", "Colorless"]
	}],

	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 3,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87914,
				cardmarket: 279631
			},
		},
	],

}

export default card
