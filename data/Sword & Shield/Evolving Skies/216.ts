import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Garbodor VMAX",
		fr: "Miasmax VMAX",
		es: "Garbodor VMAX",
		it: "Garbodor VMAX",
		pt: "Garbodor VMAX",
		de: "Deponitox VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "VMAX",
	illustrator: "5ban Graphics",
	dexId: [569],

	evolveFrom: {
		en: "Garbodor V",
		fr: "Miasmax-V",
		es: "Garbodor V",
		it: "Garbodor-V",
		pt: "Garbodor V",
		de: "Deponitox-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Rubbish Collecting"
		},

		effect: {
			en: "This Pokémon may have up to 2 Pokémon Tools attached to it. If it loses this Ability, discard Pokémon Tools from it until only 1 remains."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "G-Max Malodor"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat."
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574149
	}
}

export default card
