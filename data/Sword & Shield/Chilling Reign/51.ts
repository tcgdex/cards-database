import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Zebstrika",
		fr: "Zéblitz"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		en: "Blitzle",
		fr: "Zébibron"
	},

	attacks: [{
		name: {
			en: "Coordinated Bolt",
			fr: "Éclair Coordonné"
		},

		effect: {
			en: "If 1 of your other Rapid Strike Pokémon used an attack during your last turn, this attack does 90 more damage.",
			fr: "Si l’un de vos autres Pokémon Mille Poings a utilisé une attaque pendant votre dernier tour, cette attaque inflige 90 dégâts supplémentaires."
		},

		damage: "30+",
		cost: ["Colorless"]
	}, {
		name: {
			en: "Spark Rush",
			fr: "Charge Étincelle"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 90 damage for each heads.",
			fr: "Lancez une pièce jusqu’à obtenir un côté pile. Cette attaque inflige 90 dégâts pour chaque côté face."
		},

		damage: "90×",
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card