import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [303],
	set: Set,

	name: {
		en: "Mawile",
		fr: "Mysdibule",
		es: "Mawile",
		it: "Mawile",
		pt: "Mawile",
		de: "Flunkifer"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Kouki Saitou",

	description: {
		en: "It chomps with its gaping mouth. Its huge jaws are actually steel horns that have been transformed."
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Chomp Chomp Hold",
			fr: "Mangeouille Acharnée",
			de: "Mampfgriff",
			es: "Obstrucción Ñam Ñam",
			pt: "Imobilização Nhoc Nhoc",
			it: "Stretta Mastica Bene"
		},

		damage: 30,

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks cost {C} more, and its Retreat Cost is {C} more.",
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur coûtent {C} de plus et son Coût de Retraite augmente de {C}.",
			de: "Während des nächsten Zuges deines Gegners erhöhen sich die Kosten der Attacken des Verteidigenden Pokémon um {C}, und seine Rückzugskosten erhöhen sich um {C}.",
			es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor cuestan {C} más, y su Coste de Retirada es de {C} más.",
			pt: "Durante o próximo turno do seu oponente, os ataques do Pokémon Defensor custarão {C} a mais e o seu custo de Recuo será {C} a mais.",
			it: "Durante il prossimo turno del tuo avversario, il costo degli attacchi del Pokémon difensore aumenta di {C} e il suo costo di ritirata aumenta di {C}."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card