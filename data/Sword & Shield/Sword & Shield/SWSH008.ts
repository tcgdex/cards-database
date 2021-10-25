import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Perrserker"
	},

	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Pokemon",
	dexId: [863],
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		en: "Galarian Meowth"
	},

	description: {
		en: "What appears to be an iron helmet is actually hardened hair. This Pokémon lives for the thrill of battle."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Steely Spirit"
		},

		effect: {
			en: "Your Metal Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Metal Claw"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2
}

export default card