import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Malamar",
		fr: "Sepiatroce"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop"
	},

	attacks: [{
		name: {
			en: "Rapid Strike Tentacles",
			fr: "Tentacules Mille Poings"
		},

		effect: {
			en: "Reveal any number of Rapid Strike cards from your hand. This attack does 40 damage for each card you revealed in this way. Then, shuffle those cards into your deck.",
			fr: "Montrez autant de cartes Mille Poings que vous le voulez de votre main. Cette attaque inflige 40 dégâts pour chaque carte montrée de cette façon. Mélangez ensuite ces cartes avec votre deck."
		},

		damage: "40×",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card