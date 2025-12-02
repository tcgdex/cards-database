import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Eelektrik",
		fr: "Lampéroie",
		es: "Eelektrik",
		it: "Eelektrik",
		de: "Zapplalek",
		'pt-br': "Eelektrik",
		ko: "저리릴"
	},

	illustrator: "Midori Harada",
	category: "Pokemon",

	dexId: [603],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	evolveFrom: {
		en: "Tynamo"
	},

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Head Bolt",
			fr: "Éclair Frontal",
			es: "Rayo de Cabeza",
			it: "Zuccalampo",
			de: "Kopf-Blitz",
			'pt-br': "Raio de Cabeça",
			ko: "헤드볼트"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "They coil around foes and shock them with electricity-generating organs that seem simply to be circular patterns.",
		fr: "Ses taches rondes sont des organes qui émettent de l'électricité.\nIl s'enroule autour de ses proies et les électrocute.",
		es: "Las motas redondas componen su\naparato electrificador. Enrolla a su rival\ny deja que la corriente fluya por ellas.",
		it: "I motivi circolari sono organi generatori di\ncorrente. Si avvolge al nemico premendoglieli\naddosso per poi rilasciare una scarica elettrica.",
		de: "Die runden Flecken sind Organe, die Strom\nerzeugen. Es schlingt sich um seinen Gegner,\npresst sie gegen ihn und aktiviert sie.",
		'pt-br': "Eles se enrolam nos adversários e disparam choques\ncom órgãos geradores de eletricidade que parecem\nsimplesmente ser padrões circulares.",
		ko: "둥근 무늬가 발전 기관이다.\n상대를 휘감은 후 무늬를\n딱 붙여서 전기를 흘려보낸다."
	},

	boosters: ["mewtwo"]
}

export default card
