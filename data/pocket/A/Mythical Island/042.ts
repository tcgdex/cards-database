import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Primeape",
		'fr-fr': "Colossinge",
		'es-es': "Primeape",
		'it-it': "Primeape",
		'de-de': "Rasaff",
		'pt-br': "Primeape",
		'ko-kr': "성원숭"
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",

	dexId: [57],
	hp: 80,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Mankey"
	},

	description: {
		'en-us': "It becomes wildly furious if it even senses someone looking at it. It chases anyone that meets its glare.",
		'fr-fr': "Il devient fou furieux s'il se sent observé\net pourchasse tout être qui croise son regard.",
		'es-es': "Se pone furioso si nota que alguien lo\nestá mirando. Persigue a cualquiera\nque establezca contacto visual con él.",
		'it-it': "Diventa furioso se si sente osservato.\nInsegue chiunque incontri il suo sguardo.",
		'de-de': "Spürt Rasaff, dass jemand es anblickt, wird es\nrasend vor Wut. Es verfolgt jeden, der es wagt,\nseinen Blick zu erwidern.",
		'pt-br': "Fica incrivelmente furioso se perceber que\nestá sendo observado. Persegue qualquer\num que o encarar.",
		'ko-kr': "누군가의 시선을 느끼기만 해도\n대단히 화를 낸다. 그리고\n눈이 마주친 상대를 쫓아다닌다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Punch",
			'fr-fr': "Koud'Poing",
			'es-es': "Puño",
			'it-it': "Pugno",
			'de-de': "Boxhieb",
			'pt-br': "Soco",
			'ko-kr': "펀치"
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
