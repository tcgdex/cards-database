import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lickitung",
		'fr-fr': "Excelangue",
		'es-es': "Lickitung",
		'it-it': "Lickitung",
		'de-de': "Schlurp",
		'pt-br': "Lickitung",
		'ko-kr': "내루미"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",

	dexId: [108],
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Continuous Lick",
			'fr-fr': "Langue Sans Fin",
			'es-es': "Lengüetazo Incesante",
			'it-it': "Leccata Infinita",
			'de-de': "Dauerschlecker",
			'pt-br': "Lambida Contínua",
			'ko-kr': "연속낼름낼름"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 60 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 60 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 60 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 60 danni ogni volta che esce testa.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 60 pontos de dano para cada cara.",
			'ko-kr': "뒷면이 나올 때까지 동전을 던져서 앞면이 나온 수 × 60데미지를 준다."
		},

		damage: "60×"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Diamond",

	description: {
		'en-us': "If this Pokémon's sticky saliva gets on you and you don't clean it off, an intense itch will set in. The itch won't go away, either.",
		'fr-fr': "Si sa salive gluante entre en contact avec la peau\net qu'on ne l'essuie pas bien, elle provoque de\nterribles démangeaisons qui ne s'arrêtent jamais.",
		'es-es': "Si sus lametones no se tratan a tiempo,\nsu saliva pegajosa y urticante puede\nprovocar picores persistentes.",
		'it-it': "La sua saliva appiccicosa provoca\nun prurito terribile che non dà tregua\nse le parti leccate non vengono ripulite.",
		'de-de': "Wäscht man sich nach der Berührung mit seinem\nklebrigen Speichel nicht, setzt bald ein starker\nJuckreiz ein, der nicht mehr zu stoppen ist.",
		'pt-br': "Se você entrar em contato com a saliva grudenta\ndeste Pokémon e não se limpar, sentirá uma\ncoceira intensa. E a coceira não parará.",
		'ko-kr': "끈적끈적한 타액에 접촉한 후\n그대로 방치하면 굉장히 가렵고\n급기야 멈출 수 없게 된다."
	},

	boosters: ["mewtwo"]
}

export default card
