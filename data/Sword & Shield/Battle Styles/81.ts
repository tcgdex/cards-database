import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [843],
	set: Set,

	name: {
		en: "Silicobra",
		fr: "Dunaja",
		es: "Silicobra",
		it: "Silicobra",
		pt: "Silicobra",
		de: "Salanga"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Tail Whap",
			fr: "Queue Battoir",
			es: "Coletón",
			it: "Codabotta",
			pt: "Surra de Cauda",
			de: "Schweifvertrimmer"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			en: "Mud Shot",
			fr: "Tir de Boue",
			es: "Disparo Lodo",
			it: "Colpodifango",
			pt: "Tiro de Lama",
			de: "Lehmschuss"
		},

		damage: 60,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It spews sand from its nostrils. While the enemy is blinded, it burrows into the ground to hide."
	}
}

export default card