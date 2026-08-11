import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [758],
	set: Set,

	name: {
		'en-us': "Salazzle",
		'fr-fr': "Malamandre",
		'es-es': "Salazzle",
		'it-it': "Salazzle",
		'pt-br': "Salazzle",
		'de-de': "Amfira"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Salandit",
		'fr-fr': "Tritox",
		'es-es': "Salandit",
		'it-it': "Salandit",
		'pt-br': "Salandit",
		'de-de': "Molunk"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Sudden Scorching",
			'fr-fr': "Incandescence Soudaine",
			'es-es': "Calcinación Súbita",
			'it-it': "Ustione Improvvisa",
			'pt-br': "Ardência Repentina",
			'de-de': "Plötzliche Versengung"
		},

		effect: {
			'en-us': "Your opponent discards a card from their hand. If this Pokémon evolved from Salandit during this turn, your opponent discards 2 more cards.",
			'fr-fr': "Votre adversaire défausse une carte de sa main. Si ce Pokémon a évolué de Tritox pendant ce tour, votre adversaire défausse 2 cartes supplémentaires.",
			'es-es': "Tu rival descarta 1 carta de su mano. Si este Pokémon ha evolucionado de Salandit durante este turno, tu rival descarta 2 cartas más.",
			'it-it': "Il tuo avversario scarta una carta che ha in mano. Se questo Pokémon si è evoluto da Salandit durante questo turno, il tuo avversario scarta altre due carte.",
			'pt-br': "O seu oponente descarta uma carta da mão dele. Se este Pokémon evoluiu de Salandit durante este turno, o seu oponente descartará 2 cartas a mais.",
			'de-de': "Dein Gegner legt 1 Karte aus seiner Hand auf seinen Ablagestapel. Wenn sich dieses Pokémon während dieses Zuges aus Molunk entwickelt hat, legt dein Gegner 2 Karten mehr auf seinen Ablagestapel."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Flamethrower",
			'fr-fr': "Lance-Flammes",
			'es-es': "Lanzallamas",
			'it-it': "Lanciafiamme",
			'pt-br': "Lança-chamas",
			'de-de': "Flammenwurf"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785877,
				tcgplayer: 567250
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785877,
				tcgplayer: 567250
			}
		},
	],

	illustrator: "Taiga Kasai",

}

export default card
