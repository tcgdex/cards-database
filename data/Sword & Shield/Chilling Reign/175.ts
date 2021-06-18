import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Dunaconda V",
		en: "Sandaconda V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Muraille de Sable",
			en: "Wall of Sand"
		},

		effect: {
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)."
		}
	}],

	attacks: [{
		name: {
			fr: "Écras’Terre",
			en: "Land Crush"
		},

		damage: 140,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card