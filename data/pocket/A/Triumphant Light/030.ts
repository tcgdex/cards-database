import { Card } from "models/database/card"
import Set from "../Triumphant Light"

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

	illustrator: "sui",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [36],
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Clefairy"
	},

	description: {
		'en-us': "A timid fairy Pokémon that is rarely seen, it will run and hide the moment it senses people.",
		'fr-fr': "Ce Pokémon s'apparente à une petite fée\nqui n'apparaît que rarement devant les humains.\nIl court se cacher dès qu'il ressent une présence.",
		'es-es': "Este Pokémon de aspecto feérico, raramente\nvisto por los humanos, corre a esconderse\nen cuanto detecta que hay alguien cerca.",
		'it-it': "Timido Pokémon Fata, molto raro a\nvedersi. Scappa e si nasconde non\nappena avverte la presenza delle persone.",
		'de-de': "Ein feenhaftes und scheues Pokémon,\ndas sofort die Flucht ergreift, wenn es\nMenschen wahrnimmt.",
		'pt-br': "Um tímido Pokémon fada raramente visto,\ncorre e esconde-se assim que percebe\na presença de pessoas.",
		'ko-kr': "요정의 동료로 좀처럼\n사람 앞에 나타나지 않는다. 기척을\n느끼면 바로 도망가는 듯하다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Moonblast",
			'fr-fr': "Pouvoir Lunaire",
			'es-es': "Fuerza Lunar",
			'it-it': "Forza Lunare",
			'de-de': "Mondgewalt",
			'pt-br': "Explosão Lunar",
			'ko-kr': "문포스"
		},

		damage: 60,
		cost: ["Psychic", "Colorless", "Colorless"],

		effect: {
			'en-us': "During your opponent's next turn, attacks used by the Defending Pokémon do −30 damage.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent − 30 dégâts.",
			'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen -30 puntos de daño.",
			'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono -30 danni.",
			'de-de': "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon − 30 Schadenspunkte zu.",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão −30 pontos de dano.",
			'ko-kr': "상대의 다음 차례에 이 기술을 받은 포켓몬이 사용하는 기술의 데미지를 -30한다."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card
