import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Salazzle",
		'fr-fr': "Malamandre",
		'es-es': "Salazzle",
		'es-mx': "Salazzle",
		'de-de': "Amfira",
		'it-it': "Salazzle",
		'pt-br': "Salazzle"
	},

	evolveFrom: {
		'en-us': "Salandit",
		'fr-fr': "Tritox",
		'es-es': "Salandit",
		'es-mx': "Salandit",
		'de-de': "Molunk",
		'it-it': "Salandit",
		'pt-br': "Salandit",
	},

	illustrator: "Taiga Kasai",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [758],
	hp: 120,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Sudden Scorching",
			'fr-fr': "Incandescence Soudaine",
			'es-es': "Calcinación Súbita",
			'es-mx': "Calcinación Súbita",
			'de-de': "Plötzliche Versengung",
			'it-it': "Ustione Improvvisa",
			'pt-br': "Ardência Repentina"
		},

		effect: {
			'en-us': "Your opponent discards a card from their hand. If this Pokémon evolved from Salandit during this turn, your opponent discards 2 more cards.",
			'fr-fr': "Votre adversaire défausse une carte de sa main. Si ce Pokémon a évolué de Tritox pendant ce tour, votre adversaire défausse 2 cartes supplémentaires.",
			'es-es': "Tu rival descarta 1 carta de su mano. Si este Pokémon ha evolucionado de Salandit durante este turno, tu rival descarta 2 cartas más.",
			'es-mx': "Tu rival descarta 1 carta de su mano. Si este Pokémon evolucionó de Salandit durante este turno, tu rival descarta 2 cartas más.",
			'de-de': "Dein Gegner legt 1 Karte aus seiner Hand auf seinen Ablagestapel. Wenn sich dieses Pokémon während dieses Zuges aus Molunk entwickelt hat, legt dein Gegner 2 Karten mehr auf seinen Ablagestapel.",
			'it-it': "Il tuo avversario scarta una carta che ha in mano. Se questo Pokémon si è evoluto da Salandit durante questo turno, il tuo avversario scarta altre due carte.",
			'pt-br': "O seu oponente descarta uma carta da mão dele. Se este Pokémon evoluiu de Salandit durante este turno, o seu oponente descartará 2 cartas a mais."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Flamethrower",
			'fr-fr': "Lance-Flammes",
			'es-es': "Lanzallamas",
			'es-mx': "Lanzallamas",
			'de-de': "Flammenwurf",
			'it-it': "Lanciafiamme",
			'pt-br': "Lança-chamas"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "When two Salazzle meet, they will use their pheromone gas to fight over the males in each other’s group.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869646,
			tcgplayer: 675847
		}
	},
	{
		type: "reverse",
		foil: "quickball",
		thirdParty: {
			cardmarket: 870194,
			tcgplayer: 676881
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870193,
			tcgplayer: 677021
		}
	},
],
}

export default card
