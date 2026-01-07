import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [916],
	set: Set,

	name: {
		en: "Oinkologne ex",
		fr: "Fragroin-ex",
		es: "Oinkologne ex",
		it: "Oinkologne-ex",
		pt: "Oinkologne ex",
		de: "Fragrunz-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],
	evolveFrom: {
		en: "Lechonk",
		fr: "Gourmelet",
		es: "Lechonk",
		it: "Lechonk",
		pt: "Lechonk",
		de: "Ferkuli"
	},


	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Maddening Scent",
			fr: "Senteur Affolante",
			es: "Fragancia Exasperante",
			it: "Aroma Esasperante",
			pt: "Aroma Enlouquecedor",
			de: "Wahnsinniger Geruch"
		},

		effect: {
			en: "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
			de: "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Heavy Stomp",
			fr: "Jambes de Plomb",
			es: "Fuerte Pisotón",
			it: "Gran Pestone",
			pt: "Pisoteada Pesada",
			de: "Schwerer Stampfer"
		},

		effect: {
			en: "Flip a coin. If tails, during your next turn, this Pokémon can't attack.",
			fr: "Lancez une pièce. Si c'est pile, pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Lanza 1 moneda. Si sale cruz, este Pokémon no puede atacar durante tu próximo turno.",
			it: "Lancia una moneta. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Jogue uma moeda. Se sair coroa, durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Wirf 1 Münze. Bei Zahl kann dieses Pokémon während deines nächsten Zuges nicht angreifen."
		},

		damage: 210
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "aky CG Works",

	thirdParty: {
        cardmarket: 702454,
        tcgplayer: 488053
    }
}

export default card