import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gligar",
		'fr-fr': "Scorplane",
		'es-es': "Gligar",
		'it-it': "Gligar",
		'de-de': "Skorgla",
		'pt-br': "Gligar",
		'ko-kr': "글라이거"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [207],
	hp: 60,
	types: ["Fighting"],

	description: {
		'en-us': "It usually clings to cliffs. When it spots its prey, it spreads its wings and glides down to attack.",
		'fr-fr': "Il s'accroche souvent aux falaises. Sa proie\nrepérée, il plane vers elle pour l'attaquer.",
		'es-es': "A veces se sujeta a los precipicios. Cuando divisa\nuna presa, despliega sus alas y planea para atacar.",
		'it-it': "Di solito sta attaccato agli scogli. Attacca\nla preda spalancando le ali e planando.",
		'de-de': "Es hängt meist an Klippen. Erspäht es Beute,\nspreizt es seine Flügel und greift diese sofort an.",
		'pt-br': "Costuma agarrar-se a penhascos. Ao avistar sua presa,\nabre as asas e mergulha para o ataque.",
		'ko-kr': "보통은 벼랑에 붙어 있다.\n먹이를 발견하면 날개를 펼쳐\n바람을 타고 날아 덮친다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Pierce",
			'fr-fr': "Transpercement",
			'es-es': "Perforar",
			'it-it': "Perforare",
			'de-de': "Durchbohren",
			'pt-br': "Perfurar",
			'ko-kr': "궤찌르기"
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
