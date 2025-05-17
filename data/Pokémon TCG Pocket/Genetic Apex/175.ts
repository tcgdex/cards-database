import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Muk",
		fr: "Grotadmorv",
		es: "Muk",
		it: "Muk",
		de: "Sleimok",
		'pt-br': "Muk",
		ko: "질뻐기"
	},

	illustrator: "Hajime Kusajima",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Stage1",

	evolveFrom: {
		en: "Grimer"
	},

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Venoshock",
			fr: "Choc Venin",
			es: "Carga Tóxica",
			it: "Velenoshock",
			de: "Giftschock",
			'pt-br': "Venochoque",
			ko: "베놈쇼크"
		},

		effect: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 50 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 50 dégâts de plus.",
			es: "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 50 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 50 danni in più.",
			de: "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 50 Schadenspunkte mehr zu.",
			
			ko: "상대의 배틀 포켓몬이 독이라면 50데미지를 추가한다.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 50 pontos de dano a mais."
		},

		damage: "70+"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Three Diamond",

	description: {
		en: "It's thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.",
		fr: "Ce Pokémon est recouvert d'une épaisse couche\nde boue crasseuse. Il est si toxique que même\nses traces de pas sont empoisonnées.",
		es: "Está cubierto por un repugnante lodo.\nEs tan tóxico que hasta su rastro es venenoso.",
		it: "Coperto di melma sudicia, è così tossico\nche persino le sue impronte sono velenose.",
		de: "Der schmutzige Schleim dieses Pokémon\nist extrem toxisch. Selbst die Spuren,\ndie es hinterlässt, enthalten Gift.",
		'pt-br': "É coberto por uma camada grossa\nde lodo nojento. É tão tóxica que até\nseus rastros são venenosos.",
		ko: "더러운 오물이 온몸에 달라붙었다.\n지나간 자리를 건드리기만 해도\n독이 퍼져 버린다."
	},

	boosters: ["mewtwo"]
}

export default card
