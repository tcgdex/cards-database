import { Card } from "models/database/card"
import Set from "../Brilliant Stars Trainer Gallery"

const card: Card = {
	dexId: [836],
	set: Set,

	name: {
		'en-us': "Boltund V",
		'fr-fr': "Fulgudog V",
		'es-es': "Boltund V",
		'it-it': "Boltund V",
		'pt-br': "Boltund V",
		'de-de': "Bellektro V"
	},

	illustrator: "GIDORA",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Electrify",
			'fr-fr': "Électrisation",
			'es-es': "Electrificación",
			'it-it': "Elettrocontagio",
			'pt-br': "Eletrificar",
			'de-de': "Elektrifizierung"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Lightning Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie Lightning, puis attachez-les à vos Pokémon de Banc comme il vous plaît. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Lightning y únelas a tus Pokémon en Banca de la manera que desees. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia Lightning e assegnale ai tuoi Pokémon in panchina nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia Lightning no seu baralho e ligue-as aos seus Pokémon no Banco como desejar. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Lightning-Energiekarten und lege sie beliebig an die Pokémon auf deiner Bank an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Bolt Storm",
			'fr-fr': "Tempête Éclair",
			'es-es': "Tormenta de Relámpagos",
			'it-it': "Fulmintempesta",
			'pt-br': "Tempestade Relampejante",
			'de-de': "Elektrosturm"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each Lightning Energy attached to all of your Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Lightning attachée à tous vos Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía Lightning unida a todos tus Pokémon.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia Lightning assegnata ai tuoi Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia Lightning ligada a todos os seus Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle deine Pokémon angelegte Lightning-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "D",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608745,
				tcgplayer: 264202
			}
		},
	],
}

export default card
