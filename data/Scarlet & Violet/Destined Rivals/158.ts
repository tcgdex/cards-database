import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Oinkologne ex",
		fr: "Fragroin-ex",
		de: "Fragrunz-ex",
		it: "Oinkologne-ex",
		es: "Oinkologne ex",
		pt: "Oinkologne ex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Maddening Scent",
			fr: "Senteur Affolante",
			de: "Wahnsinniger Geruch",
			it: "Aroma Esasperante",
			es: "Fragancia Exasperante",
			pt: "Aroma Enlouquecedor"
		},

		effect: {
			en: "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
			de: "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 30 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 30 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			es: "Este ataque hace 30 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Pokémon no Banco do seu oponente."
		},

		damage: "10+"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Heavy Stomp",
			fr: "Jambes de Plomb",
			de: "Schwerer Stampfer",
			it: "Gran Pestone",
			es: "Fuerte Pisotón",
			pt: "Pisoteada Pesada"
		},

		effect: {
			en: "Flip a coin. If tails, during your next turn, this Pokémon can't attack.",
			fr: "Lancez une pièce. Si c'est pile, pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Wirf 1 Münze. Bei Zahl kann dieses Pokémon während deines nächsten Zuges nicht angreifen.",
			it: "Lancia una moneta. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			es: "Lanza 1 moneda. Si sale cruz, este Pokémon no puede atacar durante tu próximo turno.",
			pt: "Jogue uma moeda. Se sair coroa, durante o seu próximo turno, este Pokémon não poderá atacar."
		},

		damage: 210
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card