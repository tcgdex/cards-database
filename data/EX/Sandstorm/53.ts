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

	dexId: [
		313,
	],

	hp: 60,

	types: [
		"Grass",
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
			},
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	effect: {
		en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Asleep.",
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Vibration toxik",
			de: "Toxic Vibration"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné. Si c'est pile, le Pokémon Défenseur est maintenant Endormi.",
			de: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Asleep."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			fr: "Abattre",
			de: "Pester"
		},

		effect: {
			fr: "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 40 dégâts.",
			de: "If the Defending Pokémon is affected by a Special Condition, this attack does 20 damage plus 20 more damage."
		},

		damage: 20
	}],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275830,
		tcgplayer: 90396
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
