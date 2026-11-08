import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [967],
	set: Set,

	name: {
		'en-us': "Cyclizar",
		'fr-fr': "Motorizard",
		'es-es': "Cyclizar",
		'it-it': "Cyclizar",
		'pt-br': "Cyclizar",
		'de-de': "Mopex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Flat-Out Dash",
			'fr-fr': "Ruée Directe",
			'es-es': "A Todo Trapo",
			'it-it': "Corsa Tuttabirra",
			'pt-br': "Arremetida Desesperada",
			'de-de': "Vollgas-Spurt"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. For each heads, draw a card.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, piochez une carte.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Por cada cara, roba 1 carta.",
			'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, pesca una carta.",
			'pt-br': "Jogue uma moeda até sair coroa. Para cada cara, compre uma carta.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Ziehe pro Kopf 1 Karte."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Power Tackle",
			'fr-fr': "Tacle Puissant",
			'es-es': "Placaje Poderoso",
			'it-it': "Forzazione",
			'pt-br': "Investida Poderosa",
			'de-de': "Kraft-Tackle"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "Hasuno",
	description: {
		'en-us': "Apparently Cyclizar has been allowing people to ride on its back since ancient times. Depictions of this have been found in 10,000-year-old murals.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 751817,
				tcgplayer: 544214
			},
		}
	],
}

export default card
