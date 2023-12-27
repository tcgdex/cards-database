import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Obstagoon",
		fr: "Ixon de Galar",
		es: "Obstagoon de Galar",
		it: "Obstagoon di Galar",
		pt: "Obstagoon de Galar",
		de: "Galar-Barrikadax"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	evolveFrom: {
		en: "Galarian Linoone",
		fr: "Linéon de Galar",
		es: "Linoone de Galar",
		it: "Linoone di Galar",
		pt: "Linoone de Galar",
		de: "Galar-Geradaks"
	},

	stage: "Stage2",
	retreat: 2,
	regulationMark: "E",
	illustrator: "kodama",

	description: {
		en: "It evolved after experiencing numerous fights. While crossing its arms, it lets out a shout that would make any opponent flinch."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Silence"
		},

		damage: 30,

		effect: {
			en: "Choose 1 of your opponent's Active Pokémon's attacks. During your opponent's next turn, that Pokémon can't use that attack."
		}
	}, {
		cost: ["Darkness"],

		name: {
			en: "Merciless Strike"
		},

		damage: "60+",

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 90 more damage."
		}
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
