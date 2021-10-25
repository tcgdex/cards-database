import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Coalossal"
	},

	illustrator: "Shigenori Negishi",
	rarity: "None",
	category: "Pokemon",
	dexId: [839],
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		en: "Carkol"
	},

	description: {
		en: "It's usually peaceful, but the vandalism of mines enrages it. Offenders will be incinerated with flames that reach 2,700 degrees Fahrenheit."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Tar Generator"
		},

		effect: {
			en: "Once during your turn, you may attach a Fire Energy card, a Fighting Energy card, or 1 of each from your discard pile to your Pokémon in any way you like."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Flaming Avalanche"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4
}

export default card