import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [89],
	set: Set,

	name: {
		fr: "Grotadmorv",
		en: "Muk",
		es: "Muk",
		it: "Muk",
		pt: "Muk",
		de: "Sleimok"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			fr: "Prison Poisseuse",
			en: "Sticky Jail",
			es: "Prisión Viscosa",
			it: "Viscosbarre",
			pt: "Prisão Pegajosa",
			de: "Klebriges Gefängnis"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur coûtent Colorless de plus et son Coût de Retraite est augmenté de Colorless.",
			en: "During your opponent's next turn, attacks used by the Defending Pokémon cost Colorless more, and its Retreat Cost is Colorless more.",
			es: "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor cuestan Colorless más, y su Coste de Retirada es de Colorless más.",
			it: "Durante il prossimo turno del tuo avversario, il costo degli attacchi usati dal Pokémon difensore aumenta di Colorless e il suo costo di ritirata aumenta di Colorless.",
			pt: "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor custarão Colorless a mais e o seu custo de Recuo será Colorless a mais.",
			de: "Während des nächsten Zuges deines Gegners erhöhen sich die Kosten der vom Verteidigenden Pokémon eingesetzten Attacken um Colorless, und seine Rückzugskosten erhöhen sich um Colorless."
		},

		damage: 30
	}, {
		cost: ["Darkness", "Darkness", "Darkness", "Colorless"],

		name: {
			fr: "Bombe Beurk",
			en: "Sludge Bomb",
			es: "Bomba Lodo",
			it: "Fangobomba",
			pt: "Bomba de Lodo",
			de: "Matschbombe"
		},

		damage: 180
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card