import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

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

	illustrator: "Masakazu Fukuda",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		en: "It rolls to move. If the ground is uneven, a sudden jolt from hitting a bump can cause it to explode.",
		fr: "Il se déplace en roulant. Si le sol est cabossé,\nles chocs le font exploser.",
		es: "Se mueve rodando. Si el terreno es\nirregular, una chispa provocada por\nalgún bache lo hará explotar.",
		it: "Rotola per spostarsi. Se il terreno è\nirregolare, può esplodere all'improvviso\na causa dell'urto contro un dosso.",
		de: "Es bewegt sich rollend fort. Rollt es über\nunebenen Boden, kann es plötzlich explodieren.",
		'pt-br': "Ele rola para se mover. Quando o solo está\ndesnivelado, um solavanco repentino após\num baque pode fazê-lo explodir.",
		ko: "굴러서 이동하기 때문에\n땅이 울퉁불퉁하면\n충격으로 폭발해 버린다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Lightning Ball",
			fr: "Boule Éclair",
			es: "Bola Relámpago",
			it: "Fulminpalla",
			de: "Kugelblitz",
			'pt-br': "Bola de Raios",
			ko: "번쩍구슬"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card