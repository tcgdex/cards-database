import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Suicune & Entei LEGEND",
		fr: "Suicune & Entei LÉGENDE (haut)",
		de: "Suicune & Entei LEGENDE"
	},

	illustrator: "Shinji Higuchi + Sachiko Eba",
	rarity: "LEGEND",
	category: "Pokemon",
	set: Set,

	dexId: [
		245, // Suicune
		244, // Entei
	],

	hp: 160,

	types: [
		"Water",
		"Fire",
	],

	suffix: "Legend",
	stage: "Basic",
	retreat: 0,

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["ross-cawthorn"],
		},
	],

	attacks: [{
		name: {
			de: "Schwallfang"
		},

		effect: {
			de: "Nimm 2 -Energiekarten, die an Suicune & Entei-LEGENDE angelegt sind, zurück auf deine Hand. Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 100 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Water", "Water", "Colorless"]
	}, {
		name: {
			de: "Flammendes Inferno"
		},

		damage: 80,

		effect: {
			de: "Das Verteidigende Pokémon ist jetzt verbrannt."
		},

		cost: ["Fire", "Colorless", "Colorless"]
	}],

	thirdParty: {
		cardmarket: 279250
	}
}

export default card
