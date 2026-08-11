import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [888],
	set: Set,

	name: {
		'en-us': "Zacian ex",
		'fr-fr': "Zacian-ex",
		'de-de': "Zacian-ex",
		'es-es': "Zacian ex",
		'it-it': "Zacian-ex",
		'pt-br': "Zacian ex"
	},


	suffix: "ex",
	illustrator: "PLANETA Mochizuki",

	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Steel Armament",
			'fr-fr': "Artillerie d'Acier",
			'de-de': "Stahlrüstung",
			'es-es': "Armamento de Acero",
			'it-it': "Dotazione d'Acciaio",
			'pt-br': "Armamento de Aço"
		},

		effect: {
			'en-us': "Search your deck for a Basic {M} Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie {M} de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-{M}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía {M} Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Energia base {M} e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por uma carta de Energia {M} Básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho."
		},

		damage: 20
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Slashing Strike",
			'fr-fr': "Coup Déchirant",
			'de-de': "Schlitzender Schlag",
			'es-es': "Golpe Cuchillazo",
			'it-it': "Lacerattacco",
			'pt-br': "Ataque Cortante"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Slashing Strike.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup Déchirant.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Schlitzender Schlag nicht einsetzen.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Golpe Cuchillazo.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Lacerattacco.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Ataque Cortante."
		},

		damage: 210
	}],

	retreat: 2,
	regulationMark: "H",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 813957,
				tcgplayer: 632678
			},
		}
	],
}

export default card
