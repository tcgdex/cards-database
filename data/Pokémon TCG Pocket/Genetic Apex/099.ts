import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Voltorb",
		fr: "Voltorbe",
		es: "Voltorb",
		it: "Voltorb",
		de: "Voltobal",
		'pt-br': "Voltorb",
		ko: "찌리리공"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			de: "Tackle",
			'pt-br': "Investida",
			ko: "몸통박치기"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It rolls to move. If the ground is uneven, a sudden jolt from hitting a bump can cause it to explode.",
		fr: "Il se déplace en roulant. Si le sol est cabossé,\nles chocs le font exploser.",
		es: "Se mueve rodando. Si el terreno es\nirregular, una chispa provocada por\nalgún bache lo hará explotar.",
		it: "Rotola per spostarsi. Se il terreno è\nirregolare, può esplodere all'improvviso\na causa dell'urto contro un dosso.",
		de: "Es bewegt sich rollend fort. Rollt es über\nunebenen Boden, kann es plötzlich explodieren.",
		'pt-br': "Ele rola para se mover. Quando o solo está\ndesnivelado, um solavanco repentino após\num baque pode fazê-lo explodir.",
		ko: "굴러서 이동하기 때문에\n땅이 울퉁불퉁하면\n충격으로 폭발해 버린다."
	}
}

export default card
