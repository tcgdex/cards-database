import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Clefable",
		'fr-fr': "Mélodelfe",
		'es-es': "Clefable",
		'it-it': "Clefable",
		'de-de': "Pixi",
		'pt-br': "Clefable",
		'ko-kr': "픽시"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",

	dexId: [36],
	hp: 100,
	types: ["Psychic"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Clefairy"
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Magical Shot",
			'fr-fr': "Coup Magique",
			'es-es': "Disparo Mágico",
			'it-it': "Magicolpo",
			'de-de': "Magischer Schuss",
			'pt-br': "Tiro Mágico",
			'ko-kr': "매지컬숏"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		'en-us': "A timid fairy Pokémon that is rarely seen, it will run and hide the moment it senses people.",
		'fr-fr': "Ce Pokémon s'apparente à une petite fée\nqui n'apparaît que rarement devant les humains.\nIl court se cacher dès qu'il ressent une présence.",
		'es-es': "Este Pokémon de aspecto feérico, raramente\nvisto por los humanos, corre a esconderse\nen cuanto detecta que hay alguien cerca.",
		'it-it': "Timido Pokémon Fata, molto raro a\nvedersi. Scappa e si nasconde non\nappena avverte la presenza delle persone.",
		'de-de': "Ein feenhaftes und scheues Pokémon,\ndas sofort die Flucht ergreift, wenn es\nMenschen wahrnimmt.",
		'pt-br': "Um tímido Pokémon fada raramente visto,\ncorre e esconde-se assim que percebe\na presença de pessoas.",
		'ko-kr': "요정의 동료로 좀처럼\n사람 앞에 나타나지 않는다. 기척을\n느끼면 바로 도망가는 듯하다."
	},

	boosters: ["pikachu"]
}

export default card
