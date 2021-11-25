import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Latios EX",
		fr: "Latios EX",
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		381,
	],

	hp: 170,

	types: [
		"Dragon",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Fast Raid",
				fr: "Raid Éclair",
			},
			effect: {
				en: "If you go first, you can use this attack on your first turn.",
				fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque lors de votre premier tour.",
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Light Pulse",
				fr: "Vibrumineuse",
			},
			effect: {
				en: "Prevent all effects of your opponent's attacks, except damage, done to this Pokémon during your opponent's next turn.",
				fr: "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,
	stage: "Basic"
}

export default card
