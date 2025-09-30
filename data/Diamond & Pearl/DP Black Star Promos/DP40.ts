import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Regigigas",
		fr: "Regigigas",
		de: "Regigigas"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		486,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drag Off",
				fr: "Traîne",
				de: "Wegzerren"
			},
			effect: {
				en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon.",
				fr: "Avant d'infliger des dégâts, vous pouvez choisir 1 des Pokémon de Banc de votre adversaire et l'échanger avec le Pokémon Défenseur.",
				de: "Bevor der Schaden zugefügt wird, kannst du 1 Pokémon auf der Bank deines Gegners wählen und es gegen das Verteidigende Pokémon austauschen."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giga Hammer",
				fr: "Giga marteau",
				de: "Gigahammer"
			},
			effect: {
				en: "Regigigas can't use Giga Hammer during your next turn.",
				fr: "Regigigas ne peut pas utiliser Giga marteau lors de votre prochain tour.",
				de: "Regigigas kann Gigahammer in deinem nächsten Zug nicht einsetzen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Une légende tenace veut que ce Pokémon ait traîné les continents en les attachant à des cordes."
	},

	variants: [
		{
			type: "holo",
			foil: "cosmos"
		},
		{
			type: "holo",
			size: "jumbo"
		},
		{
			type: "normal",
		}
	],

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
