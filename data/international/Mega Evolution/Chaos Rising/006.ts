import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "They strengthen their lower bodies by running into one another. They are very kind and won't start fights.",
	},

	name: {
		'en-us': "Quilladin",
		'fr-fr': "Boguérisse",
		'es-es': "Quilladin",
		'es-mx': "Quilladin",
		'de-de': "Igastarnish",
		'it-it': "Quilladin",
		'pt-br': "Quilladin"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [651],
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Chespin"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Leafy Charge",
			'fr-fr': "Charge Arborée",
			'es-es': "Recarga Hojarasca",
			'es-mx': "Carga Frondosa",
			'de-de': "Blätterladung",
			'it-it': "Fogliacarica",
			'pt-br': "Carga Folhosa"
		},

		cost: ["Grass"],
		damage: 20,

		effect: {
			'en-us': "Search your deck for a Basic {G} Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie {G} de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía {G} Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo 1 carta de Energía {G} Básica y únela a este Pokémon. Después, baraja tu mazo.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-{G}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo una carta Energia base {G} e assegnala a questo Pokémon. Poi rimischia il tuo mazzo.",
			'pt-br': "Procure por uma carta de Energia {G} Básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho."
		}
	}, {
		name: {
			'en-us': "Vine Whip",
			'fr-fr': "Fouet Lianes",
			'es-es': "Látigo Cepa",
			'es-mx': "Látigo Cepa",
			'de-de': "Rankenhieb",
			'it-it': "Frustata",
			'pt-br': "Chicote de Vinha"
		},

		cost: ["Grass", "Grass", "Colorless"],
		damage: 80
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886398,
				tcgplayer: 693537
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886398,
				tcgplayer: 693537
			}
		},
	],
}

export default card
