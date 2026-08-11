import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Latios EX",
		'fr-fr': "Latios EX",
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Promo",
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
				'en-us': "Fast Raid",
				'fr-fr': "Raid Éclair",
			},
			effect: {
				'en-us': "If you go first, you can use this attack on your first turn.",
				'fr-fr': "Si vous jouez en premier, vous pouvez utiliser cette attaque lors de votre premier tour.",
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
				'en-us': "Light Pulse",
				'fr-fr': "Vibrumineuse"
			},
			effect: {
				'en-us': "Prevent all effects of your opponent's attacks, except damage, done to this Pokémon during your opponent's next turn.",
				'fr-fr': "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire."
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

	thirdParty: {
		cardmarket: 553449
	}
}

export default card
