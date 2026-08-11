import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Golem",
		'fr-fr': "Grolem",
		'es-es': "Golem",
		'it-it': "Golem",
		'de-de': "Geowaz",
		'pt-br': "Golem",
		'ko-kr': "딱구리"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",

	dexId: [76],
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Graveler"
	},

	description: {
		'en-us': "When Golem grow old, they stop shedding their shells. Those that have lived a long, long time have shells green with moss.",
		'fr-fr': "Lorsqu'il arrive à un âge avancé, il arrête de muer.\nUn Grolem ayant vécu très longtemps est recouvert\nde mousse verte.",
		'es-es': "A medida que envejece, pierde la facultad de\nmudar la piel. Se han observado ejemplares de\nedad avanzada totalmente cubiertos de musgo.",
		'it-it': "Quando invecchia, non fa più la muta.\nIl guscio dei Golem molto anziani si\nricopre di muschio tingendosi di verde.",
		'de-de': "Im Alter hört es auf, sich zu häuten.\nDer Panzer betagter Geowaz ist mit\ndichtem, grünem Moos bewachsen.",
		'pt-br': "Ao envelhecer, Golem param de mudar de\ncarapaça. Os que viveram muitos e muitos\nanos têm carapaças cobertas de musgo verde.",
		'ko-kr': "나이가 들면 탈피를 하지 않는다.\n긴 세월을 산 딱구리의 껍질은\n이끼가 끼어 초록색이다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Guard Press",
			'fr-fr': "Pression de Garde",
			'es-es': "Presión de Guardia",
			'it-it': "Pressadifesa",
			'de-de': "Schutzdruck",
			'pt-br': "Aperto Protetor",
			'ko-kr': "가드프레스"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes −30 damage from attacks.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit − 30 dégâts provenant des attaques.",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen -30 puntos de daño a este Pokémon.",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -30 danni dagli attacchi.",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken − 30 Schadenspunkte zugefügt.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá −30 pontos de dano de ataques.",
			'ko-kr': "상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지를 -30한다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Three Diamond"
}

export default card
