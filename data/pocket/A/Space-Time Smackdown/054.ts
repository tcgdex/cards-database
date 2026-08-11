import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

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

	illustrator: "Midori Harada",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [100],
	hp: 60,
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
			'en-us': "Big Explosion",
			'fr-fr': "Grosse Explosion",
			'es-es': "Gran Explosión",
			'it-it': "Grande Esplosione",
			'de-de': "Große Explosion",
			'pt-br': "Grande Explosão",
			'ko-kr': "폭발"
		},

		damage: 30,
		cost: ["Lightning"],

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
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga", "palkia"]
}

export default card
