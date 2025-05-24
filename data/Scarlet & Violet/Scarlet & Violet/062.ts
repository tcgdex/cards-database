import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Tatsugiri",
		fr: "Nigirigon",
		es: "Tatsugiri",
		it: "Tatsugiri",
		pt: "Tatsugiri",
		de: "Nigiragi"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Mise en Place",
			fr: "Préparation",
			es: "Manos en la Masa",
			it: "Mise en Place",
			pt: "Mise en Place",
			de: "Mise en Place"
		},

		effect: {
			en: "Search your deck for up to 2 Basic {W} Energy cards and attach them to 1 of your Basic Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie {W} de base, puis attachez-les à l'un de vos Pokémon de base. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía {W} Básica y únelas a uno de tus Pokémon Básicos. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base {W} e assegnale a uno dei tuoi Pokémon Base. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas de Energia {W} Básica no seu baralho e ligue-as a 1 dos seus Pokémon Básicos. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-{W}-Energiekarten und lege sie an 1 deiner Basis-Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water"],

		name: {
			en: "Curl Up",
			fr: "Recroquevillement",
			es: "Acurrucarse",
			it: "Ripiegarsi",
			pt: "Retração",
			de: "Aufrollen"
		},

		effect: {
			en: "Put this Pokémon and all attached cards into your hand.",
			fr: "Ajoutez à votre main ce Pokémon et toutes les cartes qui lui sont attachées.",
			es: "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
			it: "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
			pt: "Coloque este Pokémon e todas as cartas ligadas a ele na sua mão.",
			de: "Nimm dieses Pokémon und alle angelegten Karten auf deine Hand."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "OKACHEKE"
}

export default card