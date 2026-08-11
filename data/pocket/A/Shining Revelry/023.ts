import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
		'es-es': "Voltorb",
		'it-it': "Voltorb",
		'de-de': "Voltobal",
		'pt-br': "Voltorb",
		'ko-kr': "찌리리공"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [100],
	hp: 70,
	types: ["Lightning"],

	description: {
		'en-us': "It rolls to move. If the ground is uneven, a sudden jolt from hitting a bump can cause it to explode.",
		'fr-fr': "Il se déplace en roulant. Si le sol est cabossé,\nles chocs le font exploser.",
		'es-es': "Se mueve rodando. Si el terreno es\nirregular, una chispa provocada por\nalgún bache lo hará explotar.",
		'it-it': "Rotola per spostarsi. Se il terreno è\nirregolare, può esplodere all'improvviso\na causa dell'urto contro un dosso.",
		'de-de': "Es bewegt sich rollend fort. Rollt es über\nunebenen Boden, kann es plötzlich explodieren.",
		'pt-br': "Ele rola para se mover. Quando o solo está\ndesnivelado, um solavanco repentino após\num baque pode fazê-lo explodir.",
		'ko-kr': "굴러서 이동하기 때문에\n땅이 울퉁불퉁하면\n충격으로 폭발해 버린다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Lightning Ball",
			'fr-fr': "Boule Éclair",
			'es-es': "Bola Relámpago",
			'it-it': "Fulminpalla",
			'de-de': "Kugelblitz",
			'pt-br': "Bola de Raios",
			'ko-kr': "번쩍구슬"
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