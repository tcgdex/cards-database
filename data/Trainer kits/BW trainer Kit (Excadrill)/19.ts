import { Card } from '../../../interfaces'
import Set from '../BW trainer Kit (Excadrill).ts'

const card: Card = {
	dexId: [507],
	set: Set,

	name: {
		en: "Herdier",
		fr: "Ponchien",
		es: "Herdier",
		it: "Herdier",
		pt: "Herdier",
		de: "Terribark"
	},

	illustrator: "Midori Harada",
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		en: "Lillipup",
		fr: "Ponchiot",
		es: "Lillipup",
		it: "Lillipup",
		pt: "Lillipup",
		de: "Yorkleff"
	},

	stage: "Stage1",

	attacks: [{
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Collect",
			fr: "Collectionner"
		},
		effect: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes."
		}
	}, {
		cost: [
			"Colorless",
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Bite",
			fr: "Morsure"
		},
		damage: 50
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	description: {
		en: "It loyally follows its Trainer's orders. For ages, they have helped Trainers raise Pokémon."
	},

	retreat: 1,
}

export default card
