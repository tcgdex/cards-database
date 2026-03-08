import { Card } from '../../../interfaces'
import Set from '../BW trainer Kit (Zoroark).ts'

const card: Card = {
	dexId: [505],
	set: Set,

	name: {
		en: "Watchog",
		fr: "Miradar",
		es: "Watchog",
		it: "Watchog",
		pt: "Watchog",
		de: "Kukmarda"
	},

	illustrator: "match",
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Patrat",
		fr: "Ratentif",
		es: "Patrat",
		it: "Patrat",
		pt: "Patrat",
		de: "Nagelotz"
	},

	stage: "Stage1",

	attacks: [{
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Confuse Ray",
			fr: "Onde Folie"
		},
		effect: {
			en: "The Defending Pokémon is now Confused.",
			fr: "Le Pokémon Défenseur est maintenant Confus."
		},
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Hyper Fang",
			fr: "Croc de Mort"
		},
		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
		},
		damage: 60
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	description: {
		en: "They make the patterns on their bodies shine in order to threaten predators. Keen eyesight lets them see in the dark."
	},

	retreat: 1,
}

export default card
