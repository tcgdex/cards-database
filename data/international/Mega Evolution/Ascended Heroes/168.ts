import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Larry's Starly",
		'fr-fr': "Étourmi d'Okuba",
		'es-es': "Starly de Laureano",
		'es-mx': "Starly de Laureano",
		'de-de': "Aokis Staralili",
		'it-it': "Starly di Ubaldo",
		'pt-br': "Starly do Lauro"
	},

	illustrator: "Natsumi Miyanose",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Minor Errand-Running",
			'fr-fr': "Rendez-Vous Mineur",
			'es-es': "Recado Menor",
			'es-mx': "Pequeño Encargo",
			'de-de': "Kleine Besorgung",
			'it-it': "Lavoretto Rapido",
			'pt-br': "Pequena Missão"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 2 cartas de Energía Básica, muéstralas y ponlas en tu mano. Después, baraja tu mazo.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Glide",
			'fr-fr': "Glissement",
			'es-es': "Planeo",
			'es-mx': "Planeo",
			'de-de': "Gleiten",
			'it-it': "Aliante",
			'pt-br': "Planeio"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "J",

	description: {
		'en-us': "Because they are weak individually, they form groups. However, they bicker if the group grows too big.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869779,
			tcgplayer: 675980
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870396,
			tcgplayer: 676982
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870395,
			tcgplayer: 677122
		}
	},
],
}

export default card