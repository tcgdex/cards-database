import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Magcargo",
		'fr-fr': "Volcaropod",
		'es-es': "Magcargo",
		'it-it': "Magcargo",
		'de-de': "Magcargo",
		'pt-br': "Magcargo",
		'ko-kr': "마그카르고"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [219],
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Slugma"
	},

	description: {
		'en-us': "Its brittle shell occasionally spouts intense flames that circulate throughout its body.",
		'fr-fr': "Sa coquille, très fragile, projette régulièrement\ndes flammes qui circulent dans son corps.",
		'es-es': "En ocasiones, su resbaladiza concha lanza\nintensas llamaradas que recorren todo su cuerpo.",
		'it-it': "A volte intense fiamme partono dal fragile\nguscio e avvolgono tutto il suo corpo.",
		'de-de': "Aus seinem porösen Schneckengehäuse sprudeln\nFeuerfontänen, die seinen Körper durchfluten.",
		'pt-br': "Sua frágil concha ocasionalmente lança chamas intensas\nque circulam em volta do seu corpo.",
		'ko-kr': "등껍질은 깨어지기 쉬우며\n가끔 체내를 순환하고 있는\n고열의 불꽃을 뿜어낸다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Searing Flame",
			'fr-fr': "Flammes Calcinantes",
			'es-es': "Llama Abrasadora",
			'it-it': "Fiamme Ustionanti",
			'de-de': "Sengende Flammen",
			'pt-br': "Chama Cauterizante",
			'ko-kr': "태워그을리기"
		},

		damage: 30,
		cost: ["Fire", "Colorless"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			
			'ko-kr': "상대의 배틀 포켓몬을 화상으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["dialga", "palkia"]
}

export default card
