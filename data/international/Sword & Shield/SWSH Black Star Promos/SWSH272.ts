import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [567],
	set: Set,

	name: {
		'fr-fr': "Aéroptéryx",
		'de-de': "Aeropteryx",
		'es-es': "Archeops",
		'pt-br': "Archeops",
		'it-it': "Archeops",
		'en-us': "Archeops"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		'fr-fr': "Arkéapti",
		'de-de': "Flapteryx",
		'es-es': "Archen",
		'pt-br': "Archen",
		'it-it': "Archen",
		'en-us': "Archen"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Turbo Primitif",
			'de-de': "Urzeit-Turbo",
			'es-es': "Turbo Primigenio",
			'pt-br': "Turbo Primitivo",
			'it-it': "Turbo Primordiale",
			'en-us': "Primal Turbo"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 cartes Énergie spéciale, puis les attacher à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach bis zu 2 Spezial-Energiekarten durchsuchen und sie an 1 deiner Pokémon anlegen. Mische anschließend dein Deck.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja hasta 2 cartas de Energía Especial y unirlas a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
			'pt-br': "Uma vez durante o seu turno, você poderá procurar por até 2 cartas de Energia Especial no seu baralho e ligá-las a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo fino a due carte Energia speciale e assegnarle a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
			'en-us': "Once during your turn, you may search your deck for up to 2 Special Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Ailes Vives",
			'de-de': "Turboschwinge",
			'es-es': "Ala Veloz",
			'pt-br': "Asa da Velocidade",
			'it-it': "Alaveloce",
			'en-us': "Speed Wing"
		},

		damage: 120
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
	regulationMark: "F",

	description: {
		'en-us': "It needs a running start to take off. If Archeops wants to fly, it first needs to run nearly 25 mph, building speed over a course of about 2.5 miles."
	},

	thirdParty: {
		cardmarket: 681801
	}
}

export default card
