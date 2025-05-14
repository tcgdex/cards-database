import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Butterfree",
		fr: "Papilusion"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage2",
	evolveFrom: {
		en: "Metapod",
		fr: "Chrysacier"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Powder Heal",
			fr: "Soin Poudre"
		},

		effect: {
			en: "Once during your turn, you may heal 20 damage from each of your Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de chacun de vos Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Gust"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond",

	description: {
		en: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
		fr: "En combat, il bat des ailes très rapidement pour projeter de la poudre toxique sur ses ennemis."
	}
}

export default card
