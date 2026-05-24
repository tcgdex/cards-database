import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Crobat",
		fr: "Nostenfer",
		es: "Crobat",
		it: "Crobat",
		pt: "Crobat",
		de: "Iksbat"
	},

	illustrator: "Apios",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Stage2",
	dexId: [169],

	evolveFrom: {
		en: "Golbat",
		fr: "Nosferalto",
		es: "Golbat",
		it: "Golbat",
		pt: "Golbat",
		de: "Golbat"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Nighttime Maneuvers"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may use this Ability. Search your deck for a card. Shuffle your deck, then put that card on top of it."
		}
	}],

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Poison Sound Wave"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused and Poisoned."
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Lightning",
		value: "x2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 694686
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
