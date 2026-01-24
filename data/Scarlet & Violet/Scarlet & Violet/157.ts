import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [916],
	set: Set,

	name: {
		en: "Oinkologne",
		fr: "Fragroin",
		es: "Oinkologne",
		it: "Oinkologne",
		pt: "Oinkologne",
		de: "Fragrunz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		en: "Lechonk",
		fr: "Gourmelet"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Leg Stomp",
			fr: "Jambes Lourdes",
			es: "Patada Pisotón",
			it: "Artopestone",
			pt: "Pisoteada de Pernas",
			de: "Beinstampfer"
		},

		effect: {
			en: "Flip a coin. If tails, during your next turn, this Pokémon can't attack.",
			fr: "Lancez une pièce. Si c'est pile, pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Lanza 1 moneda. Si sale cruz, este Pokémon no puede atacar durante tu próximo turno.",
			it: "Lancia una moneta. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Jogue uma moeda. Se sair coroa, durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Wirf 1 Münze. Bei Zahl kann dieses Pokémon während deines nächsten Zuges nicht angreifen."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "kirisAki",

	thirdParty: {
        cardmarket: 702453,
        tcgplayer: 488052
    }
}

export default card