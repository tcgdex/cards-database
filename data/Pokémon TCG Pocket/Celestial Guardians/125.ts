import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Jangmo-o",
		fr: "Bébécaille",
		es: "Jangmo-o",
		it: "Jangmo-o",
		de: "Miniras",
		'pt-br': "Jangmo-o",
		ko: "짜랑꼬"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		en: "They learn to fight by smashing their head scales together. The dueling strengthens both their skills and their spirits.",
		fr: "Il apprend à se battre en entrechoquant l'écaille\nqu'il a sur la tête avec celle de ses congénères,\nce qui renforce sa technique et son esprit.",
		es: "Aprende a luchar haciendo chocar la escama de\nsu cabeza con la de sus congéneres. Así fortalece\ntanto la mente como sus movimientos.",
		it: "Impara a lottare facendo cozzare la squama che\nha sulla testa con quella dei suoi simili. In questo\nmodo affina le sue mosse e tempra il suo spirito.",
		de: "Durch Aneinanderschlagen ihrer Kopfschuppen\nbringen sie einander das Kämpfen bei. Dadurch\nverbessern sich ihre Attacken und ihre Stimmung.",
		'pt-br': "Aprendem a lutar ao bater as escamas\nde suas cabeças. O duelo fortalece\ntanto suas habilidades quanto seu espírito.",
		ko: "머리의 비늘을 동료끼리\n부딪히며 싸우는 법을 배운다.\n이를 통해 기술과 정신을 단련한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			de: "Kopfnuss",
			'pt-br': "Cabeçada",
			ko: "박치기"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card
