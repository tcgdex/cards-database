import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Shaymin",
		fr: "Shaymin",
		de: "Shaymin"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		492,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Celebration Wind",
				fr: "Vent de fête",
				de: "Feierwind"
			},
			effect: {
				en: "Once during your turn, when you put Shaymin from your hand onto your Bench, you may move as many Energy cards attached to your Pokémon as you like to any of your other Pokémon.",
				fr: "Une seule fois pendant votre tour, lorsque vous placez Shaymin de votre main sur votre Banc, vous pouvez prendre une ou plusieurs cartes Énergie attachées à l’un de vos Pokémon et les attacher à un autre Pokémon.",
				de: "Einmal während deines Zuges, wenn du Shaymin von deiner Hand auf deine Bank legst, kannst du beliebig viele Energiekarten, die an deine Pokémon angelegt sind, in beliebiger Verteilung an deine anderen Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Energy Bloom",
				fr: "Énergie florissante",
				de: "Energieschwall"
			},
			effect: {
				en: "Remove 3 damage counters from each of your Pokémon that has any Energy attached to it.",
				fr: "Retirez 3 marqueurs de dégât à chacun de vos Pokémon ayant une ou plusieurs cartes Énergie.",
				de: "Entferne 3 Schadensmarken von jedem deiner Pokémon, an dem mindestens 1 Energie angelegt ist."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "The blooming of Gracidea flowers confers the power of flight upon it. Feelings of gratitude are the message it delivers."
	},

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279164
	}
}

export default card
