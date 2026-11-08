import { Card } from "models/database/card"
import Set from "../Genetic Apex"

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

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",

	dexId: [57],
	hp: 90,
	types: ["Fighting"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Mankey"
	},

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Fight Back",
			'fr-fr': "Rendre les Coups",
			'es-es': "Devolver Golpe",
			'it-it': "Lottadifesa",
			'de-de': "Zur Wehr setzen",
			'pt-br': "Devolver Ataque",
			'ko-kr': "되갚기"
		},

		effect: {
			'en-us': "If this Pokémon has damage on it, this attack does 60 more damage.",
			'fr-fr': "Si ce Pokémon a subi des dégâts, cette attaque inflige 60 dégâts de plus.",
			'es-es': "Si este Pokémon ya tiene daño, este ataque hace 60 puntos de daño más.",
			'it-it': "Se questo Pokémon è danneggiato, questo attacco infligge 60 danni in più.",
			'de-de': "Wenn diesem Pokémon bereits Schaden zugefügt wurde, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'pt-br': "Se este Pokémon estiver danificado, este ataque causará 60 pontos de dano a mais.",
			'ko-kr': "이 포켓몬이 데미지를 받고 있다면 60데미지를 추가한다."
		},

		damage: "40+"
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		'en-us': "It becomes wildly furious if it even senses someone looking at it. It chases anyone that meets its glare.",
		'fr-fr': "Il devient fou furieux s'il se sent observé\net pourchasse tout être qui croise son regard.",
		'es-es': "Se pone furioso si nota que alguien lo\nestá mirando. Persigue a cualquiera\nque establezca contacto visual con él.",
		'it-it': "Diventa furioso se si sente osservato.\nInsegue chiunque incontri il suo sguardo.",
		'de-de': "Spürt Rasaff, dass jemand es anblickt, wird es\nrasend vor Wut. Es verfolgt jeden, der es wagt,\nseinen Blick zu erwidern.",
		'pt-br': "Fica incrivelmente furioso se perceber que\nestá sendo observado. Persegue qualquer\num que o encarar.",
		'ko-kr': "누군가의 시선을 느끼기만 해도\n대단히 화를 낸다. 그리고\n눈이 마주친 상대를 쫓아다닌다."
	},

	boosters: ["charizard"]
}

export default card
