import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [1017],
	set: Set,

	name: {
		'en-us': "Teal Mask Ogerpon",
		'fr-fr': "Ogerpon Masque Turquoise",
		'de-de': "Türkisgrüne-Maske-Ogerpon",
		'it-it': "Ogerpon Maschera Turchese",
		'es-es': "Ogerpon Máscara Turquesa",
		'pt-br': "Ogerpon Máscara Turquesa",
		'es-mx': "Ogerpon Máscara Turquesa"
	},

	illustrator: "Tomomi Ozaki",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Grass Kagura",
			'fr-fr': "Kagura Plante",
			'de-de': "Pflanzen-Kagura",
			'it-it': "Kagura dell'Erba",
			'es-es': "Kagura Planta",
			'pt-br': "Kagura de Planta",
			'es-mx': "Kagura de Planta"
		},

		effect: {
			'en-us': "Search your deck for a Basic {G} Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie {G} de base, puis attachez-la à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-{G}-Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo una carta Energia base {G} e assegnala a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
			'es-es': "Busca en tu baraja 1 carta de Energía {G} Básica y únela a uno de tus Pokémon. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por uma carta de Energia {G} Básica no seu baralho e ligue-a a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo 1 carta de Energía {G} Básica y únela a 1 de tus Pokémon. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Ogre's Hammer",
			'fr-fr': "Marteau de Monstre",
			'de-de': "Onis Hammer",
			'it-it': "Martello dell'Orco",
			'es-es': "Martillo del Ogro",
			'pt-br': "Martelo do Ogro",
			'es-mx': "Martillo del Ogro"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Ogre's Hammer.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Marteau de Monstre.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Onis Hammer nicht einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Martello dell'Orco.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Martillo del Ogro.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Martelo do Ogro.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Martillo del Ogro."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825908,
				tcgplayer: 632849
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825908,
				tcgplayer: 632849
			}
		},
	],
}

export default card
