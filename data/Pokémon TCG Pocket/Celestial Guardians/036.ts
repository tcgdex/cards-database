import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Salazzle",
		fr: "Malamandre",
		es: "Salazzle",
		it: "Salazzle",
		de: "Amfira",
		'pt-br': "Salazzle",
		ko: "염뉴트"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		en: "Salandit"
	},

	description: {
		en: "Salazzle makes its opponents light-headed with poisonous gas, then captivates them with alluring movements to turn them into loyal servants.",
		fr: "Il étourdit ses adversaires avec son gaz toxique,\npuis il les asservit en exécutant une danse envoûtante.",
		es: "Convierte a sus rivales en devotos súbditos\ntras marearlos con su gas venenoso y seducirlos\ncon los cautivadores movimientos de su cuerpo.",
		it: "Trasforma gli avversari in seguaci stordendoli con del\ngas tossico per poi sedurli con movenze ammalianti.",
		de: "Zuerst benebelt es Gegner mit Giftgas, um sie\ndanach mit fesselnden Körperbewegungen zu\nbetören und zu ergebenen Dienern zu machen.",
		'pt-br': "Salazzle deixa os oponentes zonzos com seu\ngás venenoso, depois os cativa com movimentos\nfascinantes para transformá-los em servos leais.",
		ko: "독가스에 어질어질해진 상대를\n요염한 몸놀림으로 유혹해서\n충실한 부하로 만들어 버린다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Heated Poison",
			fr: "Poison Ardent",
			es: "Veneno Candente",
			it: "Veleno Ardente",
			de: "Glühendes Gift",
			'pt-br': "Veneno Ardente",
			ko: "히트포이즌"
		},

		damage: 30,
		cost: ["Fire", "Fire"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned and Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado y Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato e bruciato.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet und ist verbrannt.",
			
			ko: "상대의 배틀 포켓몬을 독과 화상으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado e Queimado."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card