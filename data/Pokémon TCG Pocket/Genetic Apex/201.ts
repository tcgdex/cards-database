import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Lickitung",
		fr: "Excelangue",
		es: "Lickitung",
		it: "Lickitung",
		de: "Schlurp",
		'pt-br': "Lickitung",
		ko: "내루미"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Continuous Lick",
			fr: "Langue Sans Fin",
			es: "Lengüetazo Incesante",
			it: "Leccata Infinita",
			de: "Dauerschlecker",
			'pt-br': "Lambida Contínua",
			ko: "연속낼름낼름"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 60 damage for each heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 60 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 60 puntos de daño por cada cara.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 60 danni ogni volta che esce testa.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 60 pontos de dano para cada cara.",
			ko: "뒷면이 나올 때까지 동전을 던져서 앞면이 나온 수 × 60데미지를 준다."
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
		en: "If this Pokémon's sticky saliva gets on you and you don't clean it off, an intense itch will set in. The itch won't go away, either.",
		fr: "Si sa salive gluante entre en contact avec la peau\net qu'on ne l'essuie pas bien, elle provoque de\nterribles démangeaisons qui ne s'arrêtent jamais.",
		es: "Si sus lametones no se tratan a tiempo,\nsu saliva pegajosa y urticante puede\nprovocar picores persistentes.",
		it: "La sua saliva appiccicosa provoca\nun prurito terribile che non dà tregua\nse le parti leccate non vengono ripulite.",
		de: "Wäscht man sich nach der Berührung mit seinem\nklebrigen Speichel nicht, setzt bald ein starker\nJuckreiz ein, der nicht mehr zu stoppen ist.",
		'pt-br': "Se você entrar em contato com a saliva grudenta\ndeste Pokémon e não se limpar, sentirá uma\ncoceira intensa. E a coceira não parará.",
		ko: "끈적끈적한 타액에 접촉한 후\n그대로 방치하면 굉장히 가렵고\n급기야 멈출 수 없게 된다."
	},

	boosters: ["mewtwo"]
}

export default card
