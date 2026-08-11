import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Arcanine ex",
		'fr-fr': "Arcanin-ex"
	},

	illustrator: "PLANETA Saito",
	category: "Pokemon",

	dexId: [59],
	hp: 150,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Growlithe"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Inferno Onrush",
			'fr-fr': "Torrent d'Enfer"
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Shiny"
}

export default card