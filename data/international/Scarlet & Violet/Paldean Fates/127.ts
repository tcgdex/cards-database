import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [978],
	set: Set,

	name: {
		'en-us': "Tatsugiri",
		'fr-fr': "Nigirigon",
		'es-es': "Tatsugiri",
		'it-it': "Tatsugiri",
		'pt-br': "Tatsugiri",
		'de-de': "Nigiragi"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Mise en Place",
			'fr-fr': "Préparation",
			'es-es': "Manos en la Masa",
			'it-it': "Mise en Place",
			'pt-br': "Mise en Place",
			'de-de': "Mise en Place"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic {W} Energy cards and attach them to 1 of your Basic Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie {W} de base, puis attachez-les à l'un de vos Pokémon de base. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía {W} Básica y únelas a uno de tus Pokémon Básicos. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base {W} e assegnale a uno dei tuoi Pokémon Base. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia {W} Básica no seu baralho e ligue-as a 1 dos seus Pokémon Básicos. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-{W}-Energiekarten und lege sie an 1 deiner Basis-Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water"],

		name: {
			'en-us': "Curl Up",
			'fr-fr': "Recroquevillement",
			'es-es': "Acurrucarse",
			'it-it': "Ripiegarsi",
			'pt-br': "Retração",
			'de-de': "Aufrollen"
		},

		effect: {
			'en-us': "Put this Pokémon and all attached cards into your hand.",
			'fr-fr': "Ajoutez à votre main ce Pokémon et toutes les cartes qui lui sont attachées.",
			'es-es': "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
			'it-it': "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
			'pt-br': "Coloque este Pokémon e todas as cartas ligadas a ele na sua mão.",
			'de-de': "Nimm dieses Pokémon und alle angelegten Karten auf deine Hand."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751666,
				tcgplayer: 534518,
				cardtrader: 274311
			}
		},
	],

	illustrator: "Kagemaru Himeno",

	description: {
		'en-us': "This is a small dragon Pokémon. It lives inside the mouth of Dondozo to protect itself from enemies on the outside.",
	},

}

export default card
