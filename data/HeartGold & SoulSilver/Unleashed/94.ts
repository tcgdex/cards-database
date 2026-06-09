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

	dexId: [245, 244],
	hp: 160,

	types: [
		"Water",
		"Fire",
	],

	suffix: "Legend",
	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
		{
			type: "Water",
			value: "×2",
		},
	],
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
			en: "Torrent Blade",
			de: "Schwallfang"
		},

		effect: {
			en: "Return 2 Water Energy attached to Suicune & Entei LEGEND to your hand. Choose 1 of your opponent's Benched Pokémon. This attack does 100 damage to that Pokémon. (Don't apply Weakness or Resistance for Benched Pokémon.)",
			de: "Nimm 2 -Energiekarten, die an Suicune & Entei-LEGENDE angelegt sind, zurück auf deine Hand. Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 100 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Water", "Water", "Colorless"]
	}, {
		name: {
			en: "Bursting Inferno",
			de: "Flammendes Inferno"
		},

		damage: 80,

		effect: {
			en: "The Defending Pokémon is now Burned.",
			de: "Das Verteidigende Pokémon ist jetzt verbrannt."
		},

		cost: ["Fire", "Colorless", "Colorless"]
	}],

	thirdParty: {
		cardmarket: 279250
	}
}

export default card
