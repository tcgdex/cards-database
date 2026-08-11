import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Kricketune",
		'fr-fr': "Mélokrik",
		'es-es': "Kricketune",
		'it-it': "Kricketune",
		'de-de': "Zirpeise",
		'pt-br': "Kricketune",
		'ko-kr': "귀뚤톡크"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [402],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Kricketot"
	},

	description: {
		'en-us': "By allowing its cry to resonate in the hollow of its belly, it produces a captivating sound.",
		'fr-fr': "Les cavités de son corps amplifient les sons,\nce qui lui permet d'émettre un cri mélodieux.",
		'es-es': "Puede hacer que el sonido resuene en las cavidades\nde su cuerpo y producir un hermoso canto.",
		'it-it': "Usa delle cavità all'interno del proprio corpo come\ncasse di risonanza per produrre melodie affascinanti.",
		'de-de': "Seinen wunderschönen Ruf erzeugt es mithilfe eines\nHohlraums im Körper, der als Verstärker fungiert.",
		'pt-br': "Ao permitir que seu choro ressoe no espaço oco\nde sua barriga, produz um som cativante.",
		'ko-kr': "몸 안에 있는 빈 공간으로\n소리를 메아리치게 해\n아름다운 울음소리가 된다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Entrancing Melody",
			'fr-fr': "Mélodie Envoûtante",
			'es-es': "Melodía Envolvente",
			'it-it': "Incantomelodia",
			'de-de': "Zaubermelodie",
			'pt-br': "Melodia Hipnotizante",
			'ko-kr': "트랜스멜로디"
		},

		damage: 50,
		cost: ["Grass", "Colorless"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			
			'ko-kr': "상대의 배틀 포켓몬을 혼란으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card
