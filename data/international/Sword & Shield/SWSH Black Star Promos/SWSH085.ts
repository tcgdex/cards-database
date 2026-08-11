import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "aky CG Works",
	category: "Pokemon",
	stage: "Basic",

	name: {
		'en-us': "Boltund V",
		'fr-fr': "Fulgudog V",
		'de-de': "Bellektro V",
		'es-es': "Boltund V",
		'pt-br': "Boltund V",
		'it-it': "Boltund V"
	},

	rarity: "Promo",
	dexId: [836],
	hp: 200,
	types: ["Lightning"],

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Electrify",
			'fr-fr': "Électrisation",
			'de-de': "Elektrifizierung",
			'es-es': "Electrificación",
			'pt-br': "Eletrificar",
			'it-it': "Elettrocontagio"
		},

		effect: {
			'en-us': "Search your deck for up to 2 {L} Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie {L}, puis attachez-les à vos Pokémon de Banc comme il vous plaît. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 {L}-Energiekarten und lege sie beliebig an die Pokémon auf deiner Bank an. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía {L} y únelas a tus Pokémon en Banca de la manera que desees. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 2 cartas de Energia {L} no seu baralho e ligue-as aos seus Pokémon no Banco como desejar. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia {L} e assegnale ai tuoi Pokémon in panchina nel modo che preferisci. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Bolt Storm",
			'fr-fr': "Tempête Éclair",
			'de-de': "Elektrosturm",
			'es-es': "Tormenta de Relámpagos",
			'pt-br': "Tempestade Relampejante",
			'it-it': "Fulmintempesta"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each {L} Energy attached to all of your Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie {L} attachée à tous vos Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle deine Pokémon angelegte {L}-Energie 30 Schadenspunkte mehr zu.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía {L} unida a todos tus Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia {L} ligada a todos os seus Pokémon.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia {L} assegnata ai tuoi Pokémon."
		},

		damage: "10+"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 540646
	}
}

export default card
