import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Arcanine ex",
		fr: "Arcanin-ex"
	},

	illustrator: "PLANETA Saito",
	category: "Pokemon",

	dexId: [59],
	hp: 150,
	types: ["Fire"],

	evolveFrom: {
		en: "Growlithe"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Inferno Onrush",
			fr: "Torrent d'Enfer"
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts."
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