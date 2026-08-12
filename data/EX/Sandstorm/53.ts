import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Volbeat",
		fr: "Muciole",
		de: "Volbeat"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [313],

	hp: 60,

	types: [
		"Grass"
	],
	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Uplifting Glow",
				fr: "Lueur indicatrice",
				de: "Uplifting Glow"
			},
			effect: {
				en: "As long as Illumise is in play, Volbeat's Retreat Cost is 0.",
				fr: "Tant que Lumivole est en jeu, le Coût de retraite de Muciole est de 0.",
				de: "As long as Illumise is in play, Volbeat's Retreat Cost is 0."
			}
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Toxic Vibration",
			fr: "Vibration toxik",
			de: "Toxic Vibration"
		},

		effect: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Asleep.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné. Si c'est pile, le Pokémon Défenseur est maintenant Endormi.",
			de: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Asleep."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Pester",
			fr: "Abattre",
			de: "Pester"
		},

		effect: {
			en: "If the Defending Pokémon is affected by a Special Condition, this attack does 20 damage plus 20 more damage.",
			fr: "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 40 dégâts.",
			de: "If the Defending Pokémon is affected by a Special Condition, this attack does 20 damage plus 20 more damage."
		},

		damage: 20
	}],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275830,
				tcgplayer: 90396
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275830,
				tcgplayer: 90396
			}
		},
	],

}

export default card
