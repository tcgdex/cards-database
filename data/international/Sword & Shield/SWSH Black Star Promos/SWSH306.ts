import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [493],
	set: Set,
	illustrator: "5ban Graphics",

	name: {
		'en-us': "Arceus V",
		'fr-fr': "Arceus V",
		'es-es': "Arceus V",
		'it-it': "Arceus V",
		'pt-br': "Arceus V",
		'de-de': "Arceus V"
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
			'en-us': "Trinity Charge",
			'fr-fr': "Charge Trinité",
			'es-es': "Carga Trinidad",
			'it-it': "Carica Triade",
			'pt-br': "Carga Tríptica",
			'de-de': "Ladevorgang der Dreiheit"
		},

		effect: {
			'en-us': "Search your deck for up to 3 basic Energy cards and attach them to your Pokémon V in any way you like. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 cartes Énergie de base, puis attachez-les à vos Pokémon-V comme il vous plaît. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 3 cartas de Energía Básica y únelas a tus Pokémon V de la manera que desees. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre carte Energia base e assegnale ai tuoi Pokémon-V nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 cartas de Energia básica no seu baralho e ligue-as aos seus Pokémon V como desejar. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten und lege sie beliebig an deine Pokémon-V an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Power Edge",
			'fr-fr': "Lame Puissante",
			'es-es': "Filo Poderoso",
			'it-it': "Colpotente",
			'pt-br': "Gume Poderoso",
			'de-de': "Kraftklinge"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	variants: [
			{
				type: "holo",
			}
		],

	regulationMark: "F"
}

export default card
