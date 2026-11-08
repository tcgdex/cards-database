import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [967],
	set: Set,

	name: {
		'en-us': "Cyclizar ex",
		'fr-fr': "Motorizard-ex",
		'es-es': "Cyclizar ex",
		'it-it': "Cyclizar-ex",
		'pt-br': "Cyclizar ex",
		'de-de': "Mopex-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Power Run",
			'fr-fr': "À Toute Puissance",
			'es-es': "Carrera Enérgica",
			'it-it': "Energicorsa",
			'pt-br': "Corrida Poderosa",
			'de-de': "Power-Raser"
		},

		effect: {
			'en-us': "Search your deck for a Basic Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Energia base e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por uma carta de Energia Básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Full Throttle",
			'fr-fr': "Pleins Gaz",
			'es-es': "Aceleración Total",
			'it-it': "A Tavoletta",
			'pt-br': "Potência Máxima",
			'de-de': "Vollgas"
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
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	suffix: "ex",
	illustrator: "5ban Graphics",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 703188,
				tcgplayer: 496429
			},
		},
		{
			type: "holo",
			size: "jumbo",
			thirdParty: {
				cardmarket: 703189,
				tcgplayer: 497721
			}
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
			thirdParty: {
				cardmarket: 730159,
				tcgplayer: 513776
			}
		}
	],
}

export default card
