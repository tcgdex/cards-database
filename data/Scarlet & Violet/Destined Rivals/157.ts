import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Oinkologne",
		fr: "Fragroin",
		de: "Fragrunz",
		it: "Oinkologne",
		es: "Oinkologne",
		pt: "Oinkologne"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			de: "Ramme",
			it: "Carica",
			es: "Apisonar",
			pt: "Aríete"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Leg Stomp",
			fr: "Jambes Lourdes",
			de: "Beinstampfer",
			it: "Artopestone",
			es: "Patada Pisotón",
			pt: "Pisoteada de Pernas"
		},

		effect: {
			en: "Flip a coin. If tails, during your next turn, this Pokémon can't attack.",
			fr: "Lancez une pièce. Si c'est pile, pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Wirf 1 Münze. Bei Zahl kann dieses Pokémon während deines nächsten Zuges nicht angreifen.",
			it: "Lancia una moneta. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			es: "Lanza 1 moneda. Si sale cruz, este Pokémon no puede atacar durante tu próximo turno.",
			pt: "Jogue uma moeda. Se sair coroa, durante o seu próximo turno, este Pokémon não poderá atacar."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card