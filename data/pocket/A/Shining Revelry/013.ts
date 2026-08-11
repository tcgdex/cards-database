import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Paldean Tauros",
		'fr-fr': "Taurosde Paldea",
		'es-es': "Taurosde Paldea",
		'it-it': "Taurosdi Paldea",
		'de-de': "Paldea-Tauros",
		'pt-br': "Taurosde Paldea",
		'ko-kr': "팔데아켄타로스"
	},

	illustrator: "Minahamu",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [128],
	hp: 110,
	types: ["Fire"],

	description: {
		'en-us': "When heated by fire energy, its horns can get hotter than 1,800 degrees Fahrenheit. Those gored by them will suffer both wounds and burns.",
		'fr-fr': "Ses cornes atteignent les 1 000 °C lorsqu'elles\nsont chauffées par énergie incandescente.\nElles infligent blessures et brûlures à ses adversaires.",
		'es-es': "Sus cuernos alcanzan los 1000 °C cuando los\ncalienta con energía ígnea. Quienes reciben una\nde sus cornadas sufren heridas y quemaduras.",
		'it-it': "Le corna arroventate dalla sua energia\nFuoco raggiungono i 1.000 ºC e causano\nal nemico trafitto sia ferite che ustioni.",
		'de-de': "Seine Hörner erreichen mithilfe von Feuer-Energie\n1000 ºC. Spießt es damit Gegner auf, so erleiden\ndiese Verletzungen und Verbrennungen.",
		'pt-br': "Quando aquecido por energia de fogo, seus chifres podem\nchegar a mais de 980 ºC. Aqueles que forem atacados\npor eles sofrerão com feridas e queimaduras.",
		'ko-kr': "불꽃 에너지로 가열된 뿔은\n섭씨 1000도에 달하며, 뿔에 찔린 상대는\n상처와 화상에 고통받게 된다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Blaze Tackle",
			'fr-fr': "Charge Flamboyante",
			'es-es': "Placaje Llameante",
			'it-it': "Assalto Infuocato",
			'de-de': "Flammender Tackle",
			'pt-br': "Investida Incendiária",
			'ko-kr': "블레이즈태클"
		},

		damage: 80,
		cost: ["Fire", "Colorless", "Colorless"],

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'ko-kr': "이 포켓몬에게도 10데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card