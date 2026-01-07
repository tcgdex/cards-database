import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Kouki Saitou",
	category: "Pokemon",

	description: {
		en: "The energy made in its cheeks’ electric pouches is stored inside its membranes and released while it is gliding."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Thundershock",
			fr: "Éclair"
		},

		damage: 10,

		effect: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est Paralysé."
		}
	}, {
		name: {
			en: "Acrobatics",
			fr: "Acrobatie"
		},

		damage: "10+",

		effect: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Emolga",
		fr: "Emolga"
	},

	rarity: "None",
	hp: 70,
	types: ["Lightning"],

	thirdParty: {
		tcgplayer: 85193
	}
}

export default card