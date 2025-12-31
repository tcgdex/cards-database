import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Malamar",
		fr: "Sepiatroce"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		en: "Inkay"
	},

	description: {
		en: "Gazing at its luminescent spots will quickly\ninduce a hypnotic state, putting the observer\nunder Malamar's control.",
		fr: "Il manipule à sa guise ceux qui se sont laissé hypnotiser en observant son corps lumineux trop longtemps."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Mental Surge",
			fr: "Émanations Cérébrales"
		},

		cost: ["Darkness"],

		effect: {
			en: "This attack does 20 damage to each of your opponent's Pokémon.",
			fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card