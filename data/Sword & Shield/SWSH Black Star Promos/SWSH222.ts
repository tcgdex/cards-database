import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Moustillon",
		de: "Ottaro",
		es: "Oshawott",
		pt: "Oshawott",
		it: "Oshawott",
		en: "Oshawott"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Bataille",
			de: "Verprügler",
			es: "Toque",
			pt: "Pulso",
			it: "Battuta",
			en: "Beat"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F",

	description: {
		en: "This Pokémon from the Unova region uses the shell on its belly as a weapon to cut down its foes. Thus, I've conferred upon this shell the name \"scalchop.\""
	}
}

export default card