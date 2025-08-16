import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "aky CG Works",
	category: "Pokemon",
	stage: "Basic",

	name: {
		en: "Boltund V",
		fr: "Fulgudog V",
		de: "Bellektro V",
		es: "Boltund V",
		pt: "Boltund V",
		it: "Boltund V"
	},

	rarity: "None",
	dexId: [836],
	hp: 200,
	types: ["Lightning"],

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Electrify",
			fr: "Électrisation",
			de: "Elektrifizierung",
			es: "Electrificación",
			pt: "Eletrificar",
			it: "Elettrocontagio"
		},

		effect: {
			en: "Search your deck for up to 2 {L} Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie {L}, puis attachez-les à vos Pokémon de Banc comme il vous plaît. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 2 {L}-Energiekarten und lege sie beliebig an die Pokémon auf deiner Bank an. Mische anschließend dein Deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía {L} y únelas a tus Pokémon en Banca de la manera que desees. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 2 cartas de Energia {L} no seu baralho e ligue-as aos seus Pokémon no Banco como desejar. Em seguida, embaralhe o seu baralho.",
			it: "Cerca nel tuo mazzo fino a due carte Energia {L} e assegnale ai tuoi Pokémon in panchina nel modo che preferisci. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Bolt Storm",
			fr: "Tempête Éclair",
			de: "Elektrosturm",
			es: "Tormenta de Relámpagos",
			pt: "Tempestade Relampejante",
			it: "Fulmintempesta"
		},

		effect: {
			en: "This attack does 30 more damage for each {L} Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie {L} attachée à tous vos Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte {L}-Energie 30 Schadenspunkte mehr zu.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía {L} unida a todos tus Pokémon.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia {L} ligada a todos os seus Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia {L} assegnata ai tuoi Pokémon."
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
