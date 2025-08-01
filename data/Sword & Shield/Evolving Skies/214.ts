import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Umbreon VMAX",
		fr: "Noctali VMAX",
		es: "Umbreon VMAX",
		it: "Umbreon VMAX",
		pt: "Umbreon VMAX",
		de: "Nachtara VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Darkness"],
	stage: "VMAX",
	illustrator: "AKIRA EGAWA",
	dexId: [197],

	evolveFrom: {
		en: "Umbreon V",
		fr: "Noctali-V",
		es: "Umbreon V",
		it: "Umbreon-V",
		pt: "Umbreon V",
		de: "Nachtara-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Dark Signal"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch 1 of your opponent's Benched Pokémon with their Active Pokémon."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Max Darkness"
		},

		damage: 160
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574143
	}
}

export default card
