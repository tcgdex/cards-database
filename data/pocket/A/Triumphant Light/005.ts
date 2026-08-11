import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Vespiquen",
		'fr-fr': "Apireine",
		'es-es': "Vespiquen",
		'it-it': "Vespiquen",
		'de-de': "Honweisel",
		'pt-br': "Vespiquen",
		'ko-kr': "비퀸"
	},

	illustrator: "kawayoo",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [416],
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Combee"
	},

	description: {
		'en-us': "It houses its colony in cells in its body and releases various pheromones to make those grubs do its bidding.",
		'fr-fr': "Son abdomen abrite ses petits, qu'il\ncontrôle grâce à des phéromones.",
		'es-es': "Cría larvas en los panales de su cuerpo y\nsegrega diversas feromonas para controlarlas.",
		'it-it': "Nell'addome ospita la sua progenie, sulla quale esercita\nun controllo assoluto tramite i feromoni che rilascia.",
		'de-de': "Sein Rumpf fungiert als Wabe für die Larven,\ndie es mithilfe verschiedener Pheromone frei\nherumkommandieren kann.",
		'pt-br': "Guarda sua colônia em células do seu corpo\ne libera vários feromônios para que as larvas\ncumpram suas exigências.",
		'ko-kr': "몸통은 새끼들의 둥지다.\n여러 페로몬을 내뿜어\n새끼들을 자유롭게 조종한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Reckless Charge",
			'fr-fr': "Attaque Imprudente",
			'es-es': "Carga Descuidada",
			'it-it': "Carica Avventata",
			'de-de': "Waghalsiger Sturmangriff",
			'pt-br': "Carga Indomável",
			'ko-kr': "돌격"
		},

		damage: 120,
		cost: ["Grass", "Grass", "Grass"],

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'ko-kr': "이 포켓몬에게도 30데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card
