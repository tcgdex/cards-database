import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Omanyte",
		de: "Amonitas"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		138,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Water of Evolution",
				de: "Wasser der Evolution"
			},
			effect: {
				en: "Put an Omastar from your hand onto Omanyte. This counts as evolving Omanyte.",
				de: "Lege ein Amoroso aus deiner Hand auf Amonitas. Dies zählt als Entwickeln von Amonitas."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Drag Off",
				de: "Wegzerren"
			},
			effect: {
				en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon.",
				de: "Bevor Schaden zugefügt wird, kannst du 1 der Pokémon auf der Bank deines Gegners wählen und es mit dem verteidigenden Pokémon austauschen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275299,
		tcgplayer: 87853
	}
}

export default card
