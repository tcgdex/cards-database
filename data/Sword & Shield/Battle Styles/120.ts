import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Indeedee",
		fr: "Wimessir"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Collect",
			fr: "Collecte"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Hand Kinesis",
			fr: "Télékinésie en Main"
		},

		effect: {
			en: "This attack does 10 damage for each card in your hand.",
			fr: "Cette attaque inflige 10 dégâts pour chaque carte dans votre main."
		},

		damage: "10×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card