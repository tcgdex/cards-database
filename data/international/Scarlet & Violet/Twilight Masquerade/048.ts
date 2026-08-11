import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [342],
	set: Set,

	name: {
		'en-us': "Crawdaunt",
		'fr-fr': "Colhomard",
		'es-es': "Crawdaunt",
		'it-it': "Crawdaunt",
		'pt-br': "Crawdaunt",
		'de-de': "Krebutack"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Corphish",
		'fr-fr': "Écrapince",
		'es-es': "Corphish",
		'it-it': "Corphish",
		'pt-br': "Corphish",
		'de-de': "Krebscorps"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Snip Snip",
			'fr-fr': "Couic Couic",
			'es-es': "Cortecitos",
			'it-it': "Zac Zac",
			'pt-br': "Corta e Recorta",
			'de-de': "Schnipp-Schnipp"
		},

		effect: {
			'en-us': "Flip 2 coins. For each heads, discard the top card of your opponent's deck.",
			'fr-fr': "Lancez 2 pièces. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
			'es-es': "Lanza 2 monedas. Por cada cara, descarta la primera carta de la baraja de tu rival.",
			'it-it': "Lancia due volte una moneta. Ogni volta che esce testa, scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Jogue 2 moedas. Para cada cara, descarte a carta de cima do baralho do seu oponente.",
			'de-de': "Wirf 2 Münzen. Lege pro Kopf die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Rampaging Hammer",
			'fr-fr': "Marteau Furieux",
			'es-es': "Martillazo Furioso",
			'it-it': "Martello Infuriato",
			'pt-br': "Martelo Furioso",
			'de-de': "Tobender Hammer"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "A rough customer that wildly flails its giant claws. It is said to be extremely hard to raise.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769222,
				tcgplayer: 550092
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769222,
				tcgplayer: 550092
			}
		},
	],

	illustrator: "Kurata So",

}

export default card