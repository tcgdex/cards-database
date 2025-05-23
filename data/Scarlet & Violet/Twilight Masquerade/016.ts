import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [812],
	set: Set,

	name: {
		en: "Rillaboom",
		fr: "Gorythmic",
		es: "Rillaboom",
		it: "Rillaboom",
		pt: "Rillaboom",
		de: "Gortrom"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Drum Beating",
			fr: "Tambour Battant",
			es: "Batería Asalto",
			it: "Tamburattacco",
			pt: "Toque do Tambor",
			de: "Trommelschläge"
		},

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon cost {C} more, and its Retreat Cost is {C} more.",
			fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur coûtent {C} de plus et son Coût de Retraite est augmenté de {C}.",
			es: "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor cuestan {C} más, y su Coste de Retirada es de {C} más.",
			it: "Durante il prossimo turno del tuo avversario, il costo degli attacchi usati dal Pokémon difensore aumenta di {C} e il suo costo di ritirata aumenta di {C}.",
			pt: "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor custarão {C} a mais e o seu custo de Recuo será {C} a mais.",
			de: "Während des nächsten Zuges deines Gegners erhöhen sich die Kosten der vom Verteidigenden Pokémon eingesetzten Attacken um {C}, und seine Rückzugskosten erhöhen sich um {C}."
		},

		damage: 60
	}, {
		cost: ["Grass", "Grass"],

		name: {
			en: "Wood Hammer",
			fr: "Martobois",
			es: "Mazazo",
			it: "Mazzuolegno",
			pt: "Martelo de Madeira",
			de: "Holzhammer"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 50 dégâts.",
			es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 50 danni a se stesso.",
			pt: "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 180
	}],

	retreat: 4,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "toriyufu"
}

export default card