import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [769],
	set: Set,

	name: {
		fr: "Bacabouh",
		en: "Sandygast",
		es: "Sandygast",
		it: "Sandygast",
		pt: "Sandygast",
		de: "Sankabuh"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Murmure",
			en: "Mumble",
			es: "Farfullar",
			it: "Borbottio",
			pt: "Resmungo",
			de: "Grummeln"
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			fr: "Tir de Boue",
			en: "Mud Shot",
			es: "Disparo Lodo",
			it: "Colpodifango",
			pt: "Tiro de Lama",
			de: "Lehmschuss"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Teeziro",

	description: {
		en: "If it loses its shovel, it will stick something else— like a branch—in its head to make do until it finds another shovel.",
	},

	thirdParty: {
		cardmarket: 715689
	}
}

export default card