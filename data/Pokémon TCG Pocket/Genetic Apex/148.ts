import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Graveler",
		fr: "Gravalanch",
		es: "Graveler",
		it: "Graveler",
		de: "Georok",
		'pt-br': "Graveler",
		ko: "데구리"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",

	dexId: [75],
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",

	evolveFrom: {
		en: "Geodude",
		fr: "Racaillou",
		es: "Geodude",
		it: "Geodude",
		pt: "Geodude",
		de: "Kleinstein"
	},

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Rollout",
			fr: "Roulade",
			es: "Rodar",
			it: "Rotolamento",
			de: "Walzer",
			'pt-br': "Rolagem",
			ko: "구르기"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Diamond",

	description: {
		en: "It climbs up cliffs as it heads toward the peak of a mountain. As soon as it reaches the summit, it rolls back down the way it came.",
		fr: "Il escalade les falaises pour en atteindre\nles sommets. Une fois tout en haut, il se\nlaisse rouler par le chemin d'où il est arrivé.",
		es: "Escala los riscos de las montañas\ny, una vez alcanzada la cima,\ndesciende rodando por los senderos.",
		it: "Scala le pareti scoscese delle montagne e, una volta\nraggiunta la vetta, rotola giù lungo lo stesso percorso.",
		de: "Es klettert Berghänge bis zum Gipfel empor.\nEinmal oben angekommen, rollt es über den\nBergpfad sogleich wieder hinunter.",
		'pt-br': "Escala penhascos em direção ao cume\nda montanha. Assim que atinge o topo,\nrola para baixo pelo mesmo caminho que veio.",
		ko: "정상을 목표로 절벽을 오른다.\n정상에 도착하면 곧바로\n올라온 산길을 굴러 내려간다."
	},

	boosters: ["pikachu"]
}

export default card
