import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Kyogre & Groudon LEGEND",
		fr: "Kyogre & Groudon LÉGENDE",
		de: "Kyogre & Groudon LEGENDE"
	},

	illustrator: "Shinji Higuchi + Sachiko Eba/樋口真嗣 + 江場左知子",
	rarity: "LEGEND",
	category: "Pokemon",
	set: Set,

	dexId: [
		382, // Kyogre
		383, // Groudon
	],

	hp: 150,

	types: [
		"Water",
		"Fighting",
	],

	suffix: "Legend",

	attacks: [{
		name: {
			fr: "",
			de: "Mega-Flutwelle"
		},

		effect: {
			fr: "Placez cette carte sur votre Banc uniquement avec l’autre moitié de Kyogre & Groudon LÉGENDE.",
			de: "Lege die obersten 5 Karten vom Deck deines Gegners auf seinen Ablagestapel. Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners 30 Schadenspunkte mal der Anzahl der Energiekarten zu, die du auf diese Weise auf den Ablagestapel gelegt hast. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Water", "Water", "Colorless", "Colorless"]
	}, {
		name: {
			de: "Gewaltige Eruption"
		},

		damage: "100x",

		effect: {
			de: "Lege die obersten drei Karten deines Decks auf deinen Ablagestapel. Dieser Angriff fügt 100 Schadenspunkte mal der Anzahl abgelegter Energiekarten zu."
		},

		cost: ["Fighting", "Fighting", "Colorless", "Colorless"]
	}],

	stage: "Basic",
	retreat: 0,

	variants: [
		{
			type: "holo"
		},
	],

	thirdParty: {
		cardmarket: 279340
	}
}

export default card
