import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [136],
	set: Set,

	name: {
		'en-us': "Flareon ex",
		'fr-fr': "Pyroli-ex",
		'es-es': "Flareon ex",
		'pt-br': "Flareon ex",
		'it-it': "Flareon-ex",
		'de-de': "Flamara-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 270,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Burning Charge",
			'fr-fr': "Charge Brûlante",
			'es-es': "Carga Abrasadora",
			'pt-br': "Carga Ardente",
			'it-it': "Bruciacarica",
			'de-de': "Brennende Ladung"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, puis attachez-les à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Básica y únelas a uno de tus Pokémon. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 2 cartas de Energia Básica no seu baralho e ligue-as a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base e assegnale a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck."
		},

		damage: 130
	}, {
		cost: ["Fire", "Water", "Lightning"],

		name: {
			'en-us': "Carnelian",
			'fr-fr': "Cornaline",
			'es-es': "Cornalina",
			'pt-br': "Cornalina",
			'it-it': "Corniola",
			'de-de': "Karneol"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 280
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	suffix: "ex",
	illustrator: "Nurikabe",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805540,
				tcgplayer: 610501
			}
		},
	],
}

export default card
