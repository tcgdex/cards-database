import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Gossifleur",
		fr: "Tournicoton",
		es: "Gossifleur",
		it: "Gossifleur",
		pt: "Gossifleur",
		de: "Cottini"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Kagemaru Himeno",

	description: {
		en: "It whirls around in the wind while singing a joyous song. This delightful display has charmed many into raising this Pokémon."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Leafage"
		},

		damage: 10
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card