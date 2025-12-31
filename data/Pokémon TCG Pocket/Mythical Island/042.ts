import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Primeape",
		fr: "Colossinge",
		es: "Primeape",
		it: "Primeape",
		de: "Rasaff",
		'pt-br': "Primeape",
		ko: "성원숭"
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",

	dexId: [57],
	hp: 80,
	types: ["Fighting"],

	evolveFrom: {
		en: "Mankey"
	},

	description: {
		en: "It becomes wildly furious if it even senses someone looking at it. It chases anyone that meets its glare.",
		fr: "Il devient fou furieux s'il se sent observé\net pourchasse tout être qui croise son regard.",
		es: "Se pone furioso si nota que alguien lo\nestá mirando. Persigue a cualquiera\nque establezca contacto visual con él.",
		it: "Diventa furioso se si sente osservato.\nInsegue chiunque incontri il suo sguardo.",
		de: "Spürt Rasaff, dass jemand es anblickt, wird es\nrasend vor Wut. Es verfolgt jeden, der es wagt,\nseinen Blick zu erwidern.",
		'pt-br': "Fica incrivelmente furioso se perceber que\nestá sendo observado. Persegue qualquer\num que o encarar.",
		ko: "누군가의 시선을 느끼기만 해도\n대단히 화를 낸다. 그리고\n눈이 마주친 상대를 쫓아다닌다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Punch",
			fr: "Koud'Poing",
			es: "Puño",
			it: "Pugno",
			de: "Boxhieb",
			'pt-br': "Soco",
			ko: "펀치"
		},

		damage: 50,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
