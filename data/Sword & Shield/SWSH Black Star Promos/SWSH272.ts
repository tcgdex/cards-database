import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [567],
	set: Set,

	name: {
		fr: "Aéroptéryx",
		de: "Aeropteryx",
		es: "Archeops",
		pt: "Archeops",
		it: "Archeops",
		en: "Archeops"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		fr: "Arkéapti",
		de: "Flapteryx",
		es: "Archen",
		pt: "Archen",
		it: "Archen",
		en: "Archen"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Turbo Primitif",
			de: "Urzeit-Turbo",
			es: "Turbo Primigenio",
			pt: "Turbo Primitivo",
			it: "Turbo Primordiale",
			en: "Primal Turbo"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 cartes Énergie spéciale, puis les attacher à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			de: "Einmal während deines Zuges kannst du dein Deck nach bis zu 2 Spezial-Energiekarten durchsuchen und sie an 1 deiner Pokémon anlegen. Mische anschließend dein Deck.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja hasta 2 cartas de Energía Especial y unirlas a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
			pt: "Uma vez durante o seu turno, você poderá procurar por até 2 cartas de Energia Especial no seu baralho e ligá-las a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo fino a due carte Energia speciale e assegnarle a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
			en: "Once during your turn, you may search your deck for up to 2 Special Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Ailes Vives",
			de: "Turboschwinge",
			es: "Ala Veloz",
			pt: "Asa da Velocidade",
			it: "Alaveloce",
			en: "Speed Wing"
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "F",

	description: {
		en: "It needs a running start to take off. If Archeops wants to fly, it first needs to run nearly 25 mph, building speed over a course of about 2.5 miles."
	}
}

export default card