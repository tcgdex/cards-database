import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Salazzle",
		fr: "Malamandre",
		es: "Salazzle",
		it: "Salazzle",
		pt: "Salazzle",
		de: "Amfira"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Sudden Scorching",
			fr: "Incandescence Soudaine",
			es: "Calcinación Súbita",
			it: "Ustione Improvvisa",
			pt: "Ardência Repentina",
			de: "Plötzliche Versengung"
		},

		effect: {
			en: "Your opponent discards a card from their hand. If this Pokémon evolved from Salandit during this turn, your opponent discards 2 more cards.",
			fr: "Votre adversaire défausse une carte de sa main. Si ce Pokémon a évolué de Tritox pendant ce tour, votre adversaire défausse 2 cartes supplémentaires.",
			es: "Tu rival descarta 1 carta de su mano. Si este Pokémon ha evolucionado de Salandit durante este turno, tu rival descarta 2 cartas más.",
			it: "Il tuo avversario scarta una carta che ha in mano. Se questo Pokémon si è evoluto da Salandit durante questo turno, il tuo avversario scarta altre due carte.",
			pt: "O seu oponente descarta uma carta da mão dele. Se este Pokémon evoluiu de Salandit durante este turno, o seu oponente descartará 2 cartas a mais.",
			de: "Dein Gegner legt 1 Karte aus seiner Hand auf seinen Ablagestapel. Wenn sich dieses Pokémon während dieses Zuges aus Molunk entwickelt hat, legt dein Gegner 2 Karten mehr auf seinen Ablagestapel."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes",
			es: "Lanzallamas",
			it: "Lanciafiamme",
			pt: "Lança-chamas",
			de: "Flammenwurf"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Taiga Kasai",

	thirdParty: {
		cardmarket: 785877
	}
}

export default card
