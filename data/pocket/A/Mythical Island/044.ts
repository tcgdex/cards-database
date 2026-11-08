import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Graveler",
		'fr-fr': "Gravalanch",
		'es-es': "Graveler",
		'it-it': "Graveler",
		'de-de': "Georok",
		'pt-br': "Graveler",
		'ko-kr': "데구리"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",

	dexId: [75],
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Geodude"
	},

	description: {
		'en-us': "It climbs up cliffs as it heads toward the peak of a mountain. As soon as it reaches the summit, it rolls back down the way it came.",
		'fr-fr': "Il escalade les falaises pour en atteindre\nles sommets. Une fois tout en haut, il se\nlaisse rouler par le chemin d'où il est arrivé.",
		'es-es': "Escala los riscos de las montañas\ny, una vez alcanzada la cima,\ndesciende rodando por los senderos.",
		'it-it': "Scala le pareti scoscese delle montagne e, una volta\nraggiunta la vetta, rotola giù lungo lo stesso percorso.",
		'de-de': "Es klettert Berghänge bis zum Gipfel empor.\nEinmal oben angekommen, rollt es über den\nBergpfad sogleich wieder hinunter.",
		'pt-br': "Escala penhascos em direção ao cume\nda montanha. Assim que atinge o topo,\nrola para baixo pelo mesmo caminho que veio.",
		'ko-kr': "정상을 목표로 절벽을 오른다.\n정상에 도착하면 곧바로\n올라온 산길을 굴러 내려간다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Lunge Out",
			'fr-fr': "Allonger",
			'es-es': "Arremeter",
			'it-it': "Affondo Lungo",
			'de-de': "Sprungangriff",
			'pt-br': "Bote",
			'ko-kr': "넘어뜨리기"
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Diamond"
}

export default card
