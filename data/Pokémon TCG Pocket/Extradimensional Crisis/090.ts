import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Arcanine",
		fr: "Arcanin"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Growlithe"
	},

	description: {
		en: "An ancient picture scroll shows that people\nwere captivated by its movement as it ran\nthrough prairies.",
		fr: "Une vieille estampe montre que les êtres humains étaient fascinés par ses mouvements lorsqu'il courait dans les champs."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Heat Tackle",
			fr: "Charge Énergétique"
		},

		damage: 100,
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
	rarity: "One Shiny"
}

export default card