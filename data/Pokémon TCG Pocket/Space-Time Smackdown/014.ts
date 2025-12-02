import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Kricketune",
		fr: "Mélokrik",
		es: "Kricketune",
		it: "Kricketune",
		de: "Zirpeise",
		'pt-br': "Kricketune",
		ko: "귀뚤톡크"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [402],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Kricketot"
	},

	description: {
		en: "By allowing its cry to resonate in the hollow of its belly, it produces a captivating sound.",
		fr: "Les cavités de son corps amplifient les sons,\nce qui lui permet d'émettre un cri mélodieux.",
		es: "Puede hacer que el sonido resuene en las cavidades\nde su cuerpo y producir un hermoso canto.",
		it: "Usa delle cavità all'interno del proprio corpo come\ncasse di risonanza per produrre melodie affascinanti.",
		de: "Seinen wunderschönen Ruf erzeugt es mithilfe eines\nHohlraums im Körper, der als Verstärker fungiert.",
		'pt-br': "Ao permitir que seu choro ressoe no espaço oco\nde sua barriga, produz um som cativante.",
		ko: "몸 안에 있는 빈 공간으로\n소리를 메아리치게 해\n아름다운 울음소리가 된다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Entrancing Melody",
			fr: "Mélodie Envoûtante",
			es: "Melodía Envolvente",
			it: "Incantomelodia",
			de: "Zaubermelodie",
			'pt-br': "Melodia Hipnotizante",
			ko: "트랜스멜로디"
		},

		damage: 50,
		cost: ["Grass", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			
			ko: "상대의 배틀 포켓몬을 혼란으로 만든다.",
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
