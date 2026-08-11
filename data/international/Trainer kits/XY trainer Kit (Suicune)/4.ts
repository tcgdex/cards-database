import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Suicune)'

const card: Card = {
	dexId: [133],
	set: Set,

	name: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,
	illustrator: "Kouki Saitou",

	description: {
		en: "Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions."
	},

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge"
		},

		damage: 10
	}, {
		name: {
			en: "Lunge",
			fr: "Coup Rapide"
		},

		damage: 30,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 118839
	}
}

export default card