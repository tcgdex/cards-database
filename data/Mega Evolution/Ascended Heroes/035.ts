import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Salazzle",
		fr: "Malamandre",
		es: "Salazzle",
		'es-mx': "Salazzle",
		de: "Amfira",
		it: "Salazzle",
		pt: "Salazzle"
	},

	illustrator: "Taiga Kasai",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Stage1",
	dexId: [758],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Sudden Scorching",
			fr: "Incandescence Soudaine",
			es: "Calcinación Súbita",
			'es-mx': "Calcinación Súbita",
			de: "Plötzliche Versengung",
			it: "Ustione Improvvisa",
			pt: "Ardência Repentina"
		},

		effect: {
			en: "Your opponent discards a card from their hand. If this Pokémon evolved from Salandit during this turn, your opponent discards 2 more cards.",
			fr: "Votre adversaire défausse une carte de sa main. Si ce Pokémon a évolué de Tritox pendant ce tour, votre adversaire défausse 2 cartes supplémentaires.",
			es: "Tu rival descarta 1 carta de su mano. Si este Pokémon ha evolucionado de Salandit durante este turno, tu rival descarta 2 cartas más.",
			'es-mx': "Tu rival descarta 1 carta de su mano. Si este Pokémon evolucionó de Salandit durante este turno, tu rival descarta 2 cartas más.",
			de: "Dein Gegner legt 1 Karte aus seiner Hand auf seinen Ablagestapel. Wenn sich dieses Pokémon während dieses Zuges aus Molunk entwickelt hat, legt dein Gegner 2 Karten mehr auf seinen Ablagestapel.",
			it: "Il tuo avversario scarta una carta che ha in mano. Se questo Pokémon si è evoluto da Salandit durante questo turno, il tuo avversario scarta altre due carte.",
			pt: "O seu oponente descarta uma carta da mão dele. Se este Pokémon evoluiu de Salandit durante este turno, o seu oponente descartará 2 cartas a mais."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes",
			es: "Lanzallamas",
			'es-mx': "Lanzallamas",
			de: "Flammenwurf",
			it: "Lanciafiamme",
			pt: "Lança-chamas"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon."
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 675847,
		cardmarket: 869646
	}
}

export default card