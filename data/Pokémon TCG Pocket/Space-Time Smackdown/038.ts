import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Buizel",
		fr: "Mustébouée",
		es: "Buizel",
		it: "Buizel",
		de: "Bamelin",
		'pt-br': "Buizel",
		ko: "브이젤"
	},

	illustrator: "OKUBO",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "It spins its two tails like a screw to propel itself through water. The tails also slice clinging seaweed.",
		fr: "Il se propulse sous l'eau et tranche les algues qui le gênent\nà l'aide de ses deux queues, qu'il utilise comme une hélice.",
		es: "Para impulsarse por el agua, gira sus dos colas como\nuna hélice. Así también corta las algas del camino.",
		it: "Facendo girare le sue code a mo' di elica\nsi sposta nell'acqua e riesce anche a\nfalciare le alghe quando rimane impigliato.",
		de: "Es lässt seine Ruten wie eine Schiffsschraube\nrotieren, um sich im Wasser fortzubewegen und\nAlgen zu zerschneiden, die an ihm haften.",
		'pt-br': "Ele gira suas duas caudas como um parafuso\npara se deslocar pela água.\nAs caudas também retalham as algas pegajosas.",
		ko: "꼬리를 스크루처럼 돌려서\n수중을 헤엄치는 것뿐만 아니라\n엉겨 붙는 해초도 자를 수 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			es: "Pistola Agua",
			it: "Pistolacqua",
			de: "Aquaknarre",
			'pt-br': "Revólver d'Água",
			ko: "물대포"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga", "palkia"]
}

export default card
