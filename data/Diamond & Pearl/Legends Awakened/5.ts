import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Gliscor",
		fr: "Scorvol",
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		472,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Gligar",
		fr: "Skorgla",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Burning Poison",
				fr: "Poison brûlant",
			},
			effect: {
				en: "Choose either Burned or Poisoned. The Defending Pokémon is now affected by that Special Condition. You may return Gliscor and all cards attached to it to your hand.",
				fr: "Choisissez entre Brûlé et Empoisonné. Le Pokémon Défenseur est maintenant affecté par cet État Spécial. Vous pouvez reprendre Scorvol dans votre main ainsi que toutes les cartes qui lui sont attachées.",
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Pester",
				fr: "Abattre",
			},
			effect: {
				en: "If the Defending Pokémon is affected by a Special Condition, this attack does 40 damage plus 40 more damage.",
				fr: "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires.",
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Il guette sa proie pendu à une branche la tête en bas, et s'en saisit à la première occasion."
	}
}

export default card
