import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Heat Rotom",
		'fr-fr': "Motisma Chaleur",
		'es-es': "Rotom Calor",
		'it-it': "Rotom Calore",
		'de-de': "Hitze-Rotom",
		'pt-br': "Rotom Calor",
		'ko-kr': "히트로토무"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [479],
	hp: 80,
	types: ["Fire"],

	description: {
		'en-us': "If the convection microwave oven is not working properly, then the Rotom inhabiting it will become lethargic.",
		'fr-fr': "Si le four dont il prend possession ne fonctionne\npas bien, Motisma perdra sa vitalité.",
		'es-es': "Si el horno eléctrico se encuentra en mal estado, la salud\ndel Rotom que reside en su interior se deteriora también.",
		'it-it': "Se il forno elettrico dentro cui si trova è in\ncattive condizioni, anche Rotom ne risente.",
		'de-de': "Funktioniert der Mikrowellenherd nicht richtig,\nso leidet auch das Rotom darin.",
		'pt-br': "Se o forno de micro-ondas não estiver funcionando\ndireito, o Rotom que habita dentro dele\nse tornará letárgico.",
		'ko-kr': "오븐레인지의 상태가 나쁘면\n안에 들어 있는 로토무도\n기운이 나지 않는다고 한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Heat Breath",
			'fr-fr': "Souffle Ardent",
			'es-es': "Aliento Ardiente",
			'it-it': "Alitorovente",
			'de-de': "Heißer Atem",
			'pt-br': "Bafo de Calor",
			'ko-kr': "히트브레스"
		},

		damage: "30+",
		cost: ["Fire", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 30데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga", "palkia"]
}

export default card
