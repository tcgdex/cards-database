import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Barry",
		'fr-fr': "René",
		'es-es': "Israel",
		'it-it': "Barry",
		'de-de': "Barry",
		'pt-br': "Barry",
		'ko-kr': "용식"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "During this turn, attacks used by your Snorlax, Heracross, and Staraptor cost 2 less {C} Energy.",
		'fr-fr': "Pendant ce tour, les attaques de vos Ronflex, Scarhino et Étouraptor coûtent 2 Énergies {C} de moins.",
		'es-es': "Durante este turno, los ataques de tu Snorlax, tu Heracross o tu Staraptor cuestan 2 Energías {C} menos.",
		'it-it': "Durante questo turno, il costo degli attacchi usati dai tuoi Snorlax, Heracross e Staraptor è ridotto di 2 Energie {C}.",
		'de-de': "Während dieses Zuges verringern sich die Kosten der eingesetzten Attacken von deinem Relaxo, Skaraborn und Staraptor um 2 {C}-Energien.",
		'pt-br': "Durante este turno, os ataques usados por seus Snorlax, Heracross e Staraptor custarão 2 Energias{C} a menos.",
		'ko-kr': "이 차례에 자신의 「잠만보」「헤라크로스」「찌르호크」 기술을 사용하기 위한 에너지를 {C}에너지 2개만큼 적게 만든다."
	},

	trainerType: "Supporter"
}

export default card
