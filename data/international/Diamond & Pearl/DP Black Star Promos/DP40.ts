import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Regigigas",
		'fr-fr': "Regigigas",
		'de-de': "Regigigas"
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
				'en-us': "Drag Off",
				'fr-fr': "Traîne",
				'de-de': "Wegzerren"
			},
			effect: {
				'en-us': "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon.",
				'fr-fr': "Avant d'infliger des dégâts, vous pouvez choisir 1 des Pokémon de Banc de votre adversaire et l'échanger avec le Pokémon Défenseur.",
				'de-de': "Bevor der Schaden zugefügt wird, kannst du 1 Pokémon auf der Bank deines Gegners wählen und es gegen das Verteidigende Pokémon austauschen."
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
				'en-us': "Giga Hammer",
				'fr-fr': "Giga marteau",
				'de-de': "Gigahammer"
			},
			effect: {
				'en-us': "Regigigas can't use Giga Hammer during your next turn.",
				'fr-fr': "Regigigas ne peut pas utiliser Giga marteau lors de votre prochain tour.",
				'de-de': "Regigigas kann Gigahammer in deinem nächsten Zug nicht einsetzen."
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
	retreat: 4,


	description: {
		'en-us': "There is an enduring legend that states this Pokémon towed continents with ropes.",
		'fr-fr': "Une légende tenace veut que ce Pokémon ait traîné les continents en les attachant à des cordes."
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
}

export default card
