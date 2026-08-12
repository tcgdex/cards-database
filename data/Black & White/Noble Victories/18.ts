import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Heatmor",
		fr: "Aflamanoir",
		es: "Heatmor",
		it: "Heatmor",
		pt: "Heatmor",
		de: "Furnifraß"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		631,
	],

	hp: 90,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Singe",
				fr: "Roussi",
				de: "Versengung"
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Incinerate",
				fr: "Calcination",
				de: "Einäschern"
			},
			effect: {
				en: "Before doing damage, discard a Pokémon Tool card attached to the Defending Pokémon.",
				fr: "Avant d'infliger des dégâts, défaussez une carte Outil Pokémon attachée au Pokémon Défenseur.",
				de: "Lege, bevor du Schaden zufügst, 1 an das Verteidigende Pokémon angelegte Pokémon-Ausrüstung auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Using their very hot, flame-covered tongues, they burn through Durant's steel bodies and consume their insides.",
		de: "Mit seiner brandheißen Zunge bringt es Fermicula zum Schmelzen, um so an sein weiches Inneres zu gelangen."
	},

	thirdParty: {
		cardmarket: 280141,
		tcgplayer: 86044
	}
}

export default card
