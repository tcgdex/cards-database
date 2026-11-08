import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'de-de': "Evoli",
		'pt-br': "Eevee",
		'ko-kr': "이브이"
	},

	illustrator: "En Morikura",
	rarity: "None",
	category: "Pokemon",

	dexId: [133],
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "Its ability to evolve into many forms allows it to\nadapt smoothly and perfectly to any environment.",
		'fr-fr': "Ses multiples évolutions lui permettent\nde s'adapter à tout type de milieu naturel.",
		'es-es': "Es capaz de evolucionar de muchas maneras\npara adaptarse sin problemas a cualquier medio.",
		'it-it': "La capacità di evolversi in diverse specie gli permette\ndi adattarsi perfettamente a qualsiasi tipo di ambiente.",
		'de-de': "Um sich jeder Umgebung perfekt anpassen zu\nkönnen, ist es in der Lage, sich zu verschiedenen\nPokémon zu entwickeln.",
		'pt-br': "Sua capacidade de evoluir para muitas formas\npermite que se adapte fácil e perfeitamente\na qualquer ambiente.",
		'ko-kr': "환경 변화에 곧바로 적응할 수 있도록\n여러 형태로 진화할 수 있는\n가능성을 가지고 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Growl",
			'fr-fr': "Rugissement",
			'es-es': "Gruñido",
			'it-it': "Ruggito",
			'de-de': "Heuler",
			'pt-br': "Rosnadura",
			'ko-kr': "울음소리"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "During your opponent's next turn, attacks used by the Defending Pokémon do −20 damage.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent − 20 dégâts.",
			'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen -20 puntos de daño.",
			'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono -20 danni.",
			'de-de': "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon − 20 Schadenspunkte zu.",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão −20 pontos de dano.",
			'ko-kr': "상대의 다음 차례에 이 기술을 받은 포켓몬이 사용하는 기술의 데미지를 -20한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol3"]
}

export default card
