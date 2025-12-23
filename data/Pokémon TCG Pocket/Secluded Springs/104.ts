import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Paldean Clodsire ex",
		fr: "Terraiste de Paldea-ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [980],
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		en: "Paldean Wooper"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Venoshock",
			fr: "Choc Venin"
		},

		damage: 60,
		cost: ["Darkness", "Darkness"],

		effect: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 60 dégâts de plus."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card