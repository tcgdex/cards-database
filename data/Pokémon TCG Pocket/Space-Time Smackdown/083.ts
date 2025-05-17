import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Gligar",
		fr: "Scorplane",
		es: "Gligar",
		it: "Gligar",
		de: "Skorgla",
		'pt-br': "Gligar",
		ko: "글라이거"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "It usually clings to cliffs. When it spots its prey, it spreads its wings and glides down to attack.",
		fr: "Il s'accroche souvent aux falaises. Sa proie\nrepérée, il plane vers elle pour l'attaquer.",
		es: "A veces se sujeta a los precipicios. Cuando divisa\nuna presa, despliega sus alas y planea para atacar.",
		it: "Di solito sta attaccato agli scogli. Attacca\nla preda spalancando le ali e planando.",
		de: "Es hängt meist an Klippen. Erspäht es Beute,\nspreizt es seine Flügel und greift diese sofort an.",
		'pt-br': "Costuma agarrar-se a penhascos. Ao avistar sua presa,\nabre as asas e mergulha para o ataque.",
		ko: "보통은 벼랑에 붙어 있다.\n먹이를 발견하면 날개를 펼쳐\n바람을 타고 날아 덮친다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pierce",
			fr: "Transpercement",
			es: "Perforar",
			it: "Perforare",
			de: "Durchbohren",
			'pt-br': "Perfurar",
			ko: "궤찌르기"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga"]
}

export default card
