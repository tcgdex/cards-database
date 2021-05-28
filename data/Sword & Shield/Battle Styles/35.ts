import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Mr. Rime",
		fr: "M. Glaquette de Galar"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Galarian Mr. Mime",
		fr: "M. Mime de Galar"
	},

	attacks: [{
		name: {
			en: "Ball Juggling",
			fr: "Jeu de Balls"
		},

		effect: {
			en: "Discard any number of Item cards that have the word “Ball” in their name from your hand. This attack does 40 more damage for each card you discarded in this way.",
			fr: "Défaussez de votre main autant de cartes Objet que vous le souhaitez dont le nom contient le mot « Ball ». Cette attaque inflige 40 dégâts supplémentaires pour chaque carte défaussée de cette façon."
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Frost Smash",
			fr: "Impact Glacial"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card