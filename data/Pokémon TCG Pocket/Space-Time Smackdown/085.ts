import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Hitmontop",
		fr: "Kapoera",
		es: "Hitmontop",
		it: "Hitmontop",
		de: "Kapoera",
		'pt-br': "Hitmontop",
		ko: "카포에라"
	},

	illustrator: "sowsow",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [237],
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "It launches kicks while spinning. If it spins at high speed, it may bore its way into the ground.",
		fr: "Il assène des coups de pied tout en tournant sur lui-même.\nIl va parfois si vite qu'il commence à s'enfoncer dans le sol.",
		es: "Lanza patadas mientras gira. Si alcanza mucha\nvelocidad, puede cavar un hoyo en la tierra.",
		it: "Gira su se stesso tirando calci. Se gira molto\nvelocemente può scavare una fossa nel terreno.",
		de: "Es dreht sich um sich selbst und verteilt Tritte.\nGewinnt es ausreichend an Schwung, bohrt es\nsich dabei in den Boden.",
		'pt-br': "Ele dá chutes enquanto gira. Se ele girar\nem alta velocidade, faz um caminho no chão.",
		ko: "빙글빙글 돌며 킥을 날린다.\n고속으로 돌다 보면\n그대로 지면을 파고들어 간다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
			es: "Ataque Giratorio",
			it: "Attacco Rotante",
			de: "Rundumangriff",
			'pt-br': "Ataque Giratório",
			ko: "회전어택"
		},

		damage: 50,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga"]
}

export default card
