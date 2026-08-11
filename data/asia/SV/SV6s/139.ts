import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Ducklett"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'id-id': "Ia melatih tubuhnya sambil berenang mengelilingi tempat yang dalam di kolam untuk mencari lumut air makanannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Double Draw"
		},

		effect: {
			'id-id': "Ambil 2 kartu dari atas Deck sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Bulu Tajam"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card