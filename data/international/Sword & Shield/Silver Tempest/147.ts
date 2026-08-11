import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [567],
	set: Set,

	name: {
		'en-us': "Archeops",
		'fr-fr': "Aéroptéryx",
		'es-es': "Archeops",
		'it-it': "Archeops",
		'pt-br': "Archeops",
		'de-de': "Aeropteryx"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Archen",
		'fr-fr': "Arkéapti",
		'es-es': "Archen",
		'it-it': "Archen",
		'pt-br': "Archen",
		'de-de': "Flapteryx"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Primal Turbo",
			'fr-fr': "Turbo Primitif",
			'es-es': "Turbo Primigenio",
			'it-it': "Turbo Primordiale",
			'pt-br': "Turbo Primitivo",
			'de-de': "Urzeit-Turbo"
		},

		effect: {
			'en-us': "Once during your turn, you may search your deck for up to 2 Special Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 cartes Énergie spéciale, puis les attacher à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja hasta 2 cartas de Energía Especial y unirlas a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo fino a due carte Energia speciale e assegnarle a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, você poderá procurar por até 2 cartas de Energia Especial no seu baralho e ligá-las a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach bis zu 2 Spezial-Energiekarten durchsuchen und sie an 1 deiner Pokémon anlegen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Speed Wing",
			'fr-fr': "Ailes Vives",
			'es-es': "Ala Veloz",
			'it-it': "Alaveloce",
			'pt-br': "Asa da Velocidade",
			'de-de': "Turboschwinge"
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
		'en-us': "It needs a running start to take off. If Archeops wants to fly, it first needs to run nearly 25 mph, building speed over a course of about 2.5 miles.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682194,
				tcgplayer: 450294
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682194,
				tcgplayer: 450294
			}
		},
	],
}

export default card
