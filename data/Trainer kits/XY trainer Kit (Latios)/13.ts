import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latios)'

const card: Card = {
	dexId: [381],
	set: Set,

	name: {
		en: "Latios",
		fr: "Latios",
		es: "Latios",
		it: "Latios",
		pt: "Latios",
		de: "Latios"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Pokemon",

	description: {
		en: "It understands human speech and is highly intelligent. It is a tender Pokémon that dislikes fighting.",
		de: "Es ist hochintelligent und versteht sogar die menschliche Sprache. Es ist friedlich und meidet Konflikte."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Supersonic Flight",
			fr: "Voyage Supersonique",
			de: "Überschallflug"
		},

		damage: 40,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			de: "Wirf 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
		}
	}, {
		name: {
			en: "Psyburn",
			fr: "Brûlure Psy",
			de: "Psychoverbrennung"
		},

		damage: 70
	}],

	hp: 110,
	types: ["Psychic"],
	retreat: 1,

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98367
	}
}

export default card