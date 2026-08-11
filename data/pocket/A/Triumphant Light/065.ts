import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Noctowl",
		'fr-fr': "Noarfang",
		'es-es': "Noctowl",
		'it-it': "Noctowl",
		'de-de': "Noctuh",
		'pt-br': "Noctowl",
		'ko-kr': "야부엉"
	},

	illustrator: "DOM",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [164],
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Hoothoot"
	},

	description: {
		'en-us': "Its eyes are specially developed to enable it to see clearly even in murky darkness and minimal light.",
		'fr-fr': "Ses yeux à la structure particulière\nsont capables de voir comme en plein\njour même quand il fait très sombre.",
		'es-es': "Tiene los ojos muy desarrollados y puede ver con\nincreíble claridad en la oscuridad más absoluta.",
		'it-it': "Grazie alla speciale struttura dei suoi occhi,\ngli basta la luce più fioca per vedere anche\nnell'oscurità come fosse pieno giorno.",
		'de-de': "Seine Augen sind so gut entwickelt, dass es selbst in fast\nkompletter Dunkelheit so klar sehen kann, als wäre es Tag.",
		'pt-br': "Seus olhos são especialmente desenvolvidos\npara permitir que ele enxergue na mais sombria\nescuridão e com o mínimo de luz.",
		'ko-kr': "특수한 구조의 두 눈은\n약간의 빛만 있으면\n어둠 속에서도 낮처럼 볼 수 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Silent Wing",
			'fr-fr': "Aile Silencieuse",
			'es-es': "Ala Silenciosa",
			'it-it': "Ala Silenziosa",
			'de-de': "Lautlose Flügel",
			'pt-br': "Asa Silenciosa",
			'ko-kr': "사일런트윙"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "Your opponent reveals their hand.",
			'fr-fr': "Votre adversaire dévoile sa main.",
			'es-es': "Tu rival enseña las cartas de su mano.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten.",
			'pt-br': "Seu oponente revela a mão dele.",
			'ko-kr': "상대의 패의 앞면을 모두 본다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
