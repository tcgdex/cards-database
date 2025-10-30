import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Scorbunny",
		fr: "Flambino",
		de: "Hopplo",
		it: "Scorbunny",
		es: "Scorbunny",
		pt: "Scorbunny",
		'es-mx': "Scorbunny"
	},

	illustrator: "svlt",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	dexId: [813],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Wild Kick",
			fr: "Coup Déchaîné",
			de: "Stürmischer Kick",
			it: "Calcio Selvaggio",
			es: "Patada Salvaje",
			pt: "Chute sem Pontaria",
			'es-mx': "Patada Salvaje"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654365,
		cardmarket: 851097
	}
}

export default card