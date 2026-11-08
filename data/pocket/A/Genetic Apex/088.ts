import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Frogadier",
		'fr-fr': "Croâporal",
		'es-es': "Frogadier",
		'it-it': "Frogadier",
		'de-de': "Amphizel",
		'pt-br': "Frogadier",
		'ko-kr': "개굴반장"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",

	dexId: [657],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Froakie"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Water Drip",
			'fr-fr': "Goutte à Goutte",
			'es-es': "Goteo de Agua",
			'it-it': "Gocciolacqua",
			'de-de': "Spritzwasser",
			'pt-br': "Gotejo",
			'ko-kr': "물수제비"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		'en-us': "It can throw bubble-covered pebbles with precise control, hitting empty cans up to a hundred feet away.",
		'fr-fr': "Il est capable de lancer des pierres recouvertes\nde mousse avec une précision suffisante pour\ntoucher une canette vide à 30 m.",
		'es-es': "Puede lanzar piedras envueltas en\nburbujas con tal puntería que acierta\nlatas vacías a 30 metros de distancia.",
		'it-it': "Lancia dei sassi racchiusi in bolle di schiuma.\nÈ talmente preciso da riuscire a colpire\nuna lattina vuota a 30 m di distanza.",
		'de-de': "Es kann kleine in Blasen gehüllte Steine mit\nsolcher Präzision werfen, dass es selbst\n30 m entfernte Dosen problemlos trifft.",
		'pt-br': "Pode atirar seixos cobertos em bolhas com\ncontrole preciso, atingindo latas vazias a\n30 metros de distância.",
		'ko-kr': "거품으로 싸인 돌멩이를 던지는\n기술을 쓴다. 30m 앞에 있는\n빈 캔을 맞출 정도로 컨트롤이 좋다."
	},

	boosters: ["charizard"]
}

export default card
