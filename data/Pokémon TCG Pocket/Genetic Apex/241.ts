import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoking",
		fr: "Nidoking",
		es: "Nidoking",
		it: "Nidoking",
		de: "Nidoking",
		'pt-br': "Nidoking",
		ko: "니드킹"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],
	stage: "Stage2",

	evolveFrom: {
		en: "Nidorino"
	},

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Poison Horn",
			fr: "Corne Empoisonnée",
			es: "Cuerno Veneno",
			it: "Velencorno",
			de: "Gifthorn",
			'pt-br': "Chifre Venenoso",
			ko: "독뿔"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			
			ko: "상대의 배틀 포켓몬을 독으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado."
		},

		damage: "90"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0,
	rarity: "One Star",

	description: {
		en: "When it goes on a rampage, it's impossible to control. But in the presence of a Nidoqueen it's lived with for a long time, Nidoking calms down.",
		fr: "Lorsqu'il s'énerve, il devient incontrôlable, mais il retrouve\nson calme face à Nidoqueen, sa compagne de longue date.",
		es: "Una vez que se desboca, no hay quien lo pare. Solo se\ncalma ante Nidoqueen, su compañera de toda la vida.",
		it: "Quando si scatena non c'è modo di\nfermarlo, ma davanti a Nidoqueen, la sua\ncompagna di lunga data, ritrova la calma.",
		de: "Gerät es in Rage, ist es nur schwer aufzuhalten.\nDoch vor einem Nidoqueen, mit dem es schon\nviele Jahre verbracht hat, zeigt es sich friedlich.",
		'pt-br': "É impossível controlar Nidoking quando fica\nenfurecido. Porém, a presença de uma Nidoqueen\ncom quem viveu por muito tempo o acalmará.",
		ko: "날뛰기 시작하면 손쓸 수 없게 되지만\n긴 세월 함께 지낸 니드퀸\n앞에서는 온순해진다."
	},

	boosters: ["pikachu"]
}

export default card
