import { Card } from 'models/database/card'
import Set from '../Celebrations Classic Collection'

const card: Card = {
	dexId: [197],
	set: Set,

	name: {
		'en-us': "Umbreon ☆",
		'fr-fr': "Noctali ☆",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Dark Ray",
				'fr-fr': "Rayon Obscur",
			},
			effect: {
				'en-us': "Once during your turn, when you put Umbreon ☆ from your hand onto your Bench, you may choose 1 card from your opponent's hand without looking and discard it.",
				'fr-fr': "Une seule fois lors de votre tour, lorsque vous placez Noctali ☆ de votre main sur votre Banc, vous pouvez choisir 1 carte de la main de votre adversaire sans regarder et la défausser.",
			},
		},
	],

	attacks: [
		{
			name: {
				'en-us': "Feint Attack",
				'fr-fr': "Feinte",
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à ce Pokémon-là. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, Résistance, Poké-Powers, Poké-Bodies ou tout autre effet sur ce Pokémon-là.",
			},
			cost: [
				"Darkness",
				"Darkness",
			],
		},
	],

	weaknesses: [{
		type: "Fighting",
		value: ""
	}],

	resistances: [{
		type: "Psychic",
		value: "-30"
	}],

	retreat: 1,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576785,
				tcgplayer: 250332
			}
		},
	],
}

export default card
