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

	dexId: [382, 383],
	hp: 150,

	types: [
		"Water",
		"Fighting",
	],

	suffix: "Legend",

	attacks: [{
		name: {
			en: "Mega Tidal Wave",
			fr: "",
			de: "Mega-Flutwelle"
		},

		effect: {
			en: "Discard the top 5 cards from your opponent's deck. This attack does 30 damage times the number of Energy cards you discarded to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Placez cette carte sur votre Banc uniquement avec l’autre moitié de Kyogre & Groudon LÉGENDE.",
			de: "Lege die obersten 5 Karten vom Deck deines Gegners auf seinen Ablagestapel. Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners 30 Schadenspunkte mal der Anzahl der Energiekarten zu, die du auf diese Weise auf den Ablagestapel gelegt hast. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Water", "Water", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Massive Eruption",
			de: "Gewaltige Eruption"
		},

		damage: "100x",

		effect: {
			en: "Discard the top 5 cards from your deck. This attack does 100 damage times the number of Energy cards you discarded.",
			de: "Lege die obersten drei Karten deines Decks auf deinen Ablagestapel. Dieser Angriff fügt 100 Schadenspunkte mal der Anzahl abgelegter Energiekarten zu."
		},

		cost: ["Fighting", "Fighting", "Colorless", "Colorless"]
	}],

	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
		{
			type: "Grass",
			value: "×2",
		},
	],
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
