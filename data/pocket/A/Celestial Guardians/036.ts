import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

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

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [758],
	hp: 90,
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
			'en-us': "Heated Poison",
			'fr-fr': "Poison Ardent",
			'es-es': "Veneno Candente",
			'it-it': "Veleno Ardente",
			'de-de': "Glühendes Gift",
			'pt-br': "Veneno Ardente",
			'ko-kr': "히트포이즌"
		},

		damage: 30,
		cost: ["Fire", "Fire"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned and Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado y Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato e bruciato.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet und ist verbrannt.",
			
			'ko-kr': "상대의 배틀 포켓몬을 독과 화상으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado e Queimado."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo", "lunala"]
}

export default card