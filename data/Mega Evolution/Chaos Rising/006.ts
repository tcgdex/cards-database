import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		en: "They strengthen their lower bodies by running into one another. They are very kind and won't start fights.",
	},

	name: {
		en: "Quilladin",
		fr: "Boguérisse",
		es: "Quilladin",
		'es-mx': "Quilladin",
		de: "Igastarnish",
		it: "Quilladin",
		pt: "Quilladin"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [651],
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		en: "Chespin"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Leafy Charge",
			fr: "Charge Arborée",
			es: "Recarga Hojarasca",
			'es-mx': "Carga Frondosa",
			de: "Blätterladung",
			it: "Fogliacarica",
			pt: "Carga Folhosa"
		},

		cost: ["Grass"],
		damage: 20,

		effect: {
			en: "Search your deck for a Basic {G} Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie {G} de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta de Energía {G} Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo 1 carta de Energía {G} Básica y únela a este Pokémon. Después, baraja tu mazo.",
			de: "Durchsuche dein Deck nach 1 Basis-{G}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta Energia base {G} e assegnala a questo Pokémon. Poi rimischia il tuo mazzo.",
			pt: "Procure por uma carta de Energia {G} Básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho."
		}
	}, {
		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes",
			es: "Látigo Cepa",
			'es-mx': "Látigo Cepa",
			de: "Rankenhieb",
			it: "Frustata",
			pt: "Chicote de Vinha"
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
	],
}

export default card
