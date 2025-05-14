import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Salandit",
		fr: "Tritox",
		es: "Salandit",
		it: "Salandit",
		de: "Molunk",
		'pt-br': "Salandit",
		ko: "야도뇽"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		en: "It taunts its prey and lures them into narrow, rocky areas where it then sprays them with toxic gas to make them dizzy and take them down.",
		fr: "Il provoque ses proies afin de les attirer dans\nd'étroites zones rocheuses, puis il les étourdit\navec son gaz toxique avant de les achever.",
		es: "Provoca a sus presas para conducirlas a zonas\nrocosas y estrechas, donde las aturde con un\ngas venenoso antes de acabar con ellas.",
		it: "Provoca le sue prede e le attira in stretti luoghi rocciosi,\nper poi stordirle con il suo gas velenoso e abbatterle.",
		de: "Es provoziert seine Beute und lockt sie\nin enge Felsspalten, wo es sie dann mit\nGiftgas ins Taumeln bringt und erlegt.",
		'pt-br': "Provoca suas presas e as atrai para áreas estreitas\ne rochosas. Em seguida, espirra sobre elas um gás\ntóxico para deixá-las atordoadas e dar o bote.",
		ko: "먹잇감을 도발해서\n좁은 암석 지대로 유인한 뒤\n어지러워지는 독가스를 뿜어서 마무리한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Venoshock",
			fr: "Choc Venin",
			es: "Carga Tóxica",
			it: "Velenoshock",
			de: "Giftschock",
			'pt-br': "Venochoque",
			ko: "베놈쇼크"
		},

		damage: "10+",
		cost: ["Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 40 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Poisoned, cette attaque inflige 40 dégâts de plus.",
			es: "Si el Pokémon Activo de tu rival está Poisoned, este ataque hace 40 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è Poisoned, questo attacco infligge 40 danni in più.",
			de: "Wenn das Aktive Pokémon deines Gegners [Text:SpecialCondition v0=\"{} ist\" v1=\"{}\" ], fügt diese Attacke 40 Schadenspunkte mehr zu.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver Poisoned, este ataque causará 40 pontos de dano a mais.",
			ko: "상대의 배틀 포켓몬이 Poisoned[Gr:Patchim v=\"이/가\" ]라면 40데미지를 추가한다."
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
