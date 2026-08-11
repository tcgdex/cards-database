import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [863],
	set: Set,

	name: {
		'en-us': "Galarian Perrserker",
		'fr-fr': "Berserkatt de Galar",
		'es-es': "Perrserker de Galar",
		'it-it': "Perrserker di Galar",
		'pt-br': "Perrserker de Galar",
		'de-de': "Galar-Mauzinger"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Galarian Meowth",
		'fr-fr': "Miaouss de Galar",
		'es-es': "Meowth de Galar",
		'it-it': "Meowth di Galar",
		'pt-br': "Meowth de Galar",
		'de-de': "Galar-Mauzi"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Shigenori Negishi",

	description: {
		'en-us': "After many battles, it evolved dangerous claws that come together to form daggers when extended."
	},

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Call to Muster",
			'fr-fr': "Appel au Rassemblement",
			'de-de': "Einberufen",
			'es-es': "Llamar a Filas",
			'pt-br': "Chamado de Guerra",
			'it-it': "Chiamata a Raccolta"
		},

		effect: {
			'en-us': "Search your deck for up to 2 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Básica y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 2 cartas de Energia básica no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Headbang",
			'fr-fr': "Frappe de Tête",
			'de-de': "Headbangen",
			'es-es': "Cabecear",
			'pt-br': "Baque de Cabeça",
			'it-it': "Scuotitesta"
		},

		damage: 80
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582809,
				tcgplayer: 253328
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582809,
				tcgplayer: 253328
			}
		},
	],
}

export default card
