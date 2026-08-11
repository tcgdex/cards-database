import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Meowscarada",
		'fr-fr': "Miascarade",
		'es-es': "Meowscarada",
		'it-it': "Meowscarada",
		'de-de': "Maskagato",
		'pt-br': "Meowscarada",
		'ko-kr': "마스카나"
	},

	illustrator: "danciao",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [908],
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Floragato"
	},

	description: {
		'en-us': "This Pokémon uses the reflective fur lining its cape to camouflage the stem of its flower, creating the illusion that the flower is floating.",
		'fr-fr': "Il se sert de la réverbération de la lumière sur\nla fourrure de sa cape pour camoufler sa tige,\nce qui donne l'illusion que sa fleur flotte dans les airs.",
		'es-es': "Se sirve de la luz que reflejan los tricomas de\nsu manto de hojas para camuflar la vid y crear\nla ilusión óptica de que la flor flota en el aire.",
		'it-it': "I riflessi del pelo all'interno del mantello\ncamuffano lo stelo del suo fiore, che\ncosì sembra fluttuare nell'aria.",
		'de-de': "Es erweckt den Eindruck, als würde seine Blume\nschweben, indem es ihren Stiel mit der Reflexion\ndes Fells an der Innenseite seines Mantels tarnt.",
		'pt-br': "Este Pokémon usa a pelugem reflexiva da sua capa\npara camuflar o caule da sua flor, criando a ilusão\nde que a flor está flutuando.",
		'ko-kr': "꽃이 떠 있는 것처럼 보이는 것은\n망토 뒷면의 털이 빛을 반사해서\n줄기를 보이지 않게 하기 때문이다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Fighting Claws",
			'fr-fr': "Griffes Combatives",
			'es-es': "Garras Luchadoras",
			'it-it': "Lottartigli",
			'de-de': "Kampfkrallen",
			'pt-br': "Garras de Luta",
			'ko-kr': "투지의손톱"
		},

		damage: "60+",
		cost: ["Grass", "Grass"],

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon ex, this attack does 70 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-{ex}, cette attaque inflige 70 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon {ex}, este ataque hace 70 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-{ex}, questo attacco infligge 70 danni in più.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-{ex} ist, fügt diese Attacke 70 Schadenspunkte mehr zu.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon {ex}, este ataque causará 70 pontos de dano a mais.",
			'ko-kr': "상대의 배틀 포켓몬이 「포켓몬 {ex}」라면 70데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card