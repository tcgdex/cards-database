import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Hoothoot"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		id: "Hoothoot selalu berdiri dengan satu kaki. Momen pergantian kaki tersebut sangat cepat sehingga jarang untuk dapat disaksikan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Silent Wing"
		},

		effect: {
			id: "Lihat Kartu Pegangan lawan."
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