import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [493],
	set: Set,

	name: {
		'fr-fr': "Arceus V",
		'de-de': "Arceus V",
		'es-es': "Arceus V",
		'pt-br': "Arceus V",
		'it-it': "Arceus V",
		'en-us': "Arceus V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Charge Trinité",
			'de-de': "Ladevorgang der Dreiheit",
			'es-es': "Carga Trinidad",
			'pt-br': "Carga Tríptica",
			'it-it': "Carica Triade",
			'en-us': "Trinity Charge"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 cartes Énergie de base, puis attachez-les à vos Pokémon-V comme il vous plaît. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten und lege sie beliebig an deine Pokémon-V an. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja hasta 3 cartas de Energía Básica y únelas a tus Pokémon V de la manera que desees. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 3 cartas de Energia básica no seu baralho e ligue-as aos seus Pokémon V como desejar. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo fino a tre carte Energia base e assegnale ai tuoi Pokémon-V nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			'en-us': "Search your deck for up to 3 basic Energy cards and attach them to your Pokémon V in any way you like. Then, shuffle your deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Lame Puissante",
			'de-de': "Kraftklinge",
			'es-es': "Filo Poderoso",
			'pt-br': "Gume Poderoso",
			'it-it': "Colpotente",
			'en-us': "Power Edge"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 652086
	}
}

export default card
