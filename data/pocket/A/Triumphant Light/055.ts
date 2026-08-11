import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Magnezone",
		'fr-fr': "Magnézone",
		'es-es': "Magnezone",
		'it-it': "Magnezone",
		'de-de': "Magnezone",
		'pt-br': "Magnezone",
		'ko-kr': "자포코일"
	},

	illustrator: "toriyufu",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [462],
	hp: 140,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Magneton"
	},

	description: {
		'en-us': "As it zooms through the sky, this Pokémon seems to be receiving signals of unknown origin while transmitting signals of unknown purpose.",
		'fr-fr': "Il parcourt le ciel en émettant et en\nrecevant des ondes bien mystérieuses.",
		'es-es': "Se dice que mientras vuela emite unas ondas eléctricas\nmisteriosas, a la vez que recibe otras ondas desconocidas.",
		'it-it': "Vola per il cielo inviando misteriose onde\nelettromagnetiche e ricevendo onde sconosciute.",
		'de-de': "Es heißt, dass es beim Herumfliegen mysteriöse Funkwellen\naussende und unbekannte Wellen empfange.",
		'pt-br': "Dizem que enquanto voa pelo céu, emite ondas\neletromagnéticas misteriosas enquanto recebe\nondas desconhecidas.",
		'ko-kr': "괴전파를 발신하며 하늘을 날면서\n미지의 전파를 수신한다고 한다."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Resilience Link",
			'fr-fr': "Lien Protection",
			'es-es': "Vínculo Protector",
			'it-it': "Tenacia Simbiotica",
			'de-de': "Widerstandskopplung",
			'pt-br': "Elo de Resiliência",
			'ko-kr': "가드 링크"
		},

		effect: {
			'en-us': "If you have Arceus or Arceus ex in play, this Pokémon takes −30 damage from attacks.",
			'fr-fr': "Si vous avez Arceus ou Arceus-ex en jeu, ce Pokémon subit − 30 dégâts provenant des attaques.",
			'es-es': "Si tienes a Arceus o Arceus ex en juego, los ataques hacen -30 puntos de daño a este Pokémon.",
			'it-it': "Se hai in gioco Arceus o Arceus-ex, questo Pokémon subisce -30 danni dagli attacchi.",
			'de-de': "Wenn du Arceus oder Arceus-ex im Spiel hast, werden diesem Pokémon durch Attacken − 30 Schadenspunkte zugefügt.",
			'pt-br': "Se você tiver Arceus ou Arceus ex em jogo, este Pokémon receberá −30 pontos de dano de ataques.",
			'ko-kr': "자신의 필드에 「아르세우스」 또는 「아르세우스 ex」 있다면 이 포켓몬이 받는 기술의 데미지를 -30한다."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Power Beam",
			'fr-fr': "Puissant Rayon",
			'es-es': "Rayo de Luz Poderoso",
			'it-it': "Raggiopotenza",
			'de-de': "Power-Strahl",
			'pt-br': "Raio de Poder",
			'ko-kr': "파워빔"
		},

		damage: 80,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card
