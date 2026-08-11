import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Salandit",
		'fr-fr': "Tritox",
		'es-es': "Salandit",
		'it-it': "Salandit",
		'de-de': "Molunk",
		'pt-br': "Salandit",
		'ko-kr': "야도뇽"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",

	dexId: [757],
	hp: 60,
	types: ["Fire"],

	description: {
		'en-us': "It taunts its prey and lures them into narrow, rocky areas where it then sprays them with toxic gas to make them dizzy and take them down.",
		'fr-fr': "Il provoque ses proies afin de les attirer dans\nd'étroites zones rocheuses, puis il les étourdit\navec son gaz toxique avant de les achever.",
		'es-es': "Provoca a sus presas para conducirlas a zonas\nrocosas y estrechas, donde las aturde con un\ngas venenoso antes de acabar con ellas.",
		'it-it': "Provoca le sue prede e le attira in stretti luoghi rocciosi,\nper poi stordirle con il suo gas velenoso e abbatterle.",
		'de-de': "Es provoziert seine Beute und lockt sie\nin enge Felsspalten, wo es sie dann mit\nGiftgas ins Taumeln bringt und erlegt.",
		'pt-br': "Provoca suas presas e as atrai para áreas estreitas\ne rochosas. Em seguida, espirra sobre elas um gás\ntóxico para deixá-las atordoadas e dar o bote.",
		'ko-kr': "먹잇감을 도발해서\n좁은 암석 지대로 유인한 뒤\n어지러워지는 독가스를 뿜어서 마무리한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Venoshock",
			'fr-fr': "Choc Venin",
			'es-es': "Carga Tóxica",
			'it-it': "Velenoshock",
			'de-de': "Giftschock",
			'pt-br': "Venochoque",
			'ko-kr': "베놈쇼크"
		},

		damage: "10+",
		cost: ["Colorless"],

		effect: {
			'en-us': "If your opponent's Active Pokémon is Poisoned, this attack does 40 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 40 dégâts de plus.",
			'es-es': "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 40 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 40 danni in più.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 40 Schadenspunkte mehr zu.",
			
			'ko-kr': "상대의 배틀 포켓몬이 독이라면 40데미지를 추가한다.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 40 pontos de dano a mais."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
