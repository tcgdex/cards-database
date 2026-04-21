import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [197],
	set: Set,

	name: {
		en: "Umbreon Star",
		fr: "Noctali ☆",
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
				en: "Dark Ray",
				fr: "Rayon Obscur",
			},
			effect: {
				en: "Once during your turn, when you put Umbreon Star from your hand onto your Bench, you may choose 1 card from your opponent's hand without looking and discard it.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Noctali Star de votre main sur votre Banc, vous pouvez choisir 1 carte de la main de votre adversaire sans regarder et la défausser.",
			},
		},
	],

	attacks: [
		{
			name: {
				en: "Feint Attack",
				fr: "Feinte",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à ce Pokémon-là. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, Résistance, Poké-Powers, Poké-Bodies ou tout autre effet sur ce Pokémon-là.",
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

	variants: {
		reverse: false,
		normal: false
	}
}

export default card
