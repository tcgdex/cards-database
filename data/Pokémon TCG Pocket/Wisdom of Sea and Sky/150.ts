import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Bouffalant",
		fr: "Frison"
	},

	illustrator: "nagimiso",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [626],
	hp: 100,
	types: ["Colorless"],

	description: {
		en: "These Pokémon can crush a car with no more\nthan a headbutt. Bouffalant with more hair on\ntheir heads hold higher positions within the herd.",
		fr: "Il peut détruire une voiture d'un coup de tête. Plus sa crinière est volumineuse, plus son rang au sein du troupeau est élevé."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Continuous Headbutt",
			fr: "Coup d'Boule Sans Fin"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin until you get tails. This attack does 70 damage for each heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 70 dégâts pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh", "lugia"]
}

export default card