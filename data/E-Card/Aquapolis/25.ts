import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Ninetales",
		fr: "Feunard"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Vulpix",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],

			name: {
				en: "Miracle Tail",
				fr: "Queue miracle"
			},

			effect: {
				en: "Flip a coin. If heads, choose a Special Condition (Asleep, Burned, Confused, Paralyzed, or Poisoned). The Defending Pokémon is now affected by that Special Condition.",
				fr: "Lancez une pièce. Si c'est face, choisissez un État spécial (Endormi, Brûlé, Confus, Paralysé ou Empoisonné). Le Pokémon Défenseur est maintenant affecté par cet État spécial."
			},

			damage: 10
		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Roasting Heat",
				fr: "Rôtissoire"
			},
			effect: {
				en: "If the Defending Pokémon is Burned, this attack does 40 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur est Brûlé, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
