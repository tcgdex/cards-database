import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Salazzle",
		'fr-fr': "Malamandre",
		'es-es': "Salazzle",
		'it-it': "Salazzle",
		'de-de': "Amfira",
		'pt-br': "Salazzle",
		'ko-kr': "염뉴트"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",

	dexId: [758],
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Salandit"
	},

	description: {
		'en-us': "Salazzle makes its opponents light-headed with poisonous gas, then captivates them with alluring movements to turn them into loyal servants.",
		'fr-fr': "Il étourdit ses adversaires avec son gaz toxique,\npuis il les asservit en exécutant une danse envoûtante.",
		'es-es': "Convierte a sus rivales en devotos súbditos\ntras marearlos con su gas venenoso y seducirlos\ncon los cautivadores movimientos de su cuerpo.",
		'it-it': "Trasforma gli avversari in seguaci stordendoli con del\ngas tossico per poi sedurli con movenze ammalianti.",
		'de-de': "Zuerst benebelt es Gegner mit Giftgas, um sie\ndanach mit fesselnden Körperbewegungen zu\nbetören und zu ergebenen Dienern zu machen.",
		'pt-br': "Salazzle deixa os oponentes zonzos com seu\ngás venenoso, depois os cativa com movimentos\nfascinantes para transformá-los em servos leais.",
		'ko-kr': "독가스에 어질어질해진 상대를\n요염한 몸놀림으로 유혹해서\n충실한 부하로 만들어 버린다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Poison Claws",
			'fr-fr': "Griffes Empoisonnées",
			'es-es': "Garras Venenosas",
			'it-it': "Velenartigli",
			'de-de': "Giftkrallen",
			'pt-br': "Garras Venenosas",
			'ko-kr': "독발톱"
		},

		damage: 30,
		cost: ["Fire"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			
			'ko-kr': "상대의 배틀 포켓몬을 독으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
