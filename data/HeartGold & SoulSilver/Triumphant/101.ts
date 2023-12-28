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
		483,
	],

	hp: 160,

	types: [
		"Water",
		"Metal",
	],

	suffix: "Legend",

	attacks: [{
		name: {
			fr: "",
			de: "Plötzliche Tilgung"
		},

		effect: {
			fr: "Vous ne pouvez placer cette carte sur votre Banc que si vous placez en même temps l’autre moitié de Palkia & Dialga LÉGENDE.",
			de: "Wähle 1 Pokémon auf der Bank deines Gegners. Dein Gegner nimmt das gewählte Pokémon und alle an es angelegten Karten auf seine Hand zurück."
		},

		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			de: "Zeitherrschaft"
		},

		effect: {
			de: "Lege alle -Energien, die an Palkia- und Dialga-LEGENDE angelegt sind, auf deinen Ablagestapel. Füge die obersten 2 Karten vom Deck deines Gegner seinen Preiskarten hinzu."
		},

		cost: ["Metal", "Metal", "Colorless"]
	}],

	stage: "Basic",
	retreat: 0,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
