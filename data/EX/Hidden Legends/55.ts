import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Chikorita",
		fr: "Germignon",
		de: "Endivie"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		152,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],

	effect: {
		en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Poudre toxik",
			de: "Poisonpowder"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
			de: "Flip a coin. If heads, the defending Pokémon is now Poisoned."
		}
	}],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276129,
		tcgplayer: 84276
	},

	variants: [
		{
			type: "normal",
		}, {
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
