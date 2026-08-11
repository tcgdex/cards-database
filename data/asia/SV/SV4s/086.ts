import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Crobat"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		id: "Crobat mengepak dan mengendalikan 4 sayapnya dengan sesukanya. Di gua yang sempit pun, Pokémon ini terbang berkeliling tanpa menurunkan kecepatannya."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			id: "Mad Echo"
		},

		effect: {
			id: "Pemain memilih salah satu antara Item atau Supporter. Pada giliran lawan berikutnya, lawan tidak dapat memainkan Trainer yang telah dipilih dari Kartu Pegangan."
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Cutter Wind"
		},

		damage: 130,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card