import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'de-de': "Pikachu",
		'pt-br': "Pikachu",
		'ko-kr': "피카츄"
	},

	illustrator: "MAHOU",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [25],
	hp: 60,
	types: ["Lightning"],

	description: {
		'en-us': "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
		'fr-fr': "Quand il s'énerve, il libère instantanément\nl'énergie emmagasinée dans les poches de\nses joues.",
		'es-es': "Cuando se enfada, este Pokémon\ndescarga la energía que almacena en\nel interior de las bolsas de las mejillas.",
		'it-it': "Quando s'arrabbia, libera subito l'energia\naccumulata nelle sacche sulle guance.",
		'de-de': "Ist es wütend, entlädt sich augenblicklich die\nElektrizität, die es in seinen Backentaschen\ngespeichert hat.",
		'pt-br': "Quando está com raiva, descarrega\nimediatamente a energia armazenada\nnas bolsas em suas bochechas.",
		'ko-kr': "양 볼에는 전기를 저장하는 주머니가 있다.\n화가 나면 저장한 전기를 단숨에 방출한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Spark",
			'fr-fr': "Étincelle",
			'es-es': "Chispa",
			'it-it': "Scintilla",
			'de-de': "Funkensprung",
			'pt-br': "Faísca",
			'ko-kr': "스파크"
		},

		damage: 10,
		cost: ["Lightning"],

		effect: {
			'en-us': "This attack also does 10 damage to 1 of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige aussi 10 dégâts à un des Pokémon de Banc de votre adversaire.",
			'es-es': "Este ataque también hace 10 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
			'it-it': "Questo attacco infligge anche 10 danni a uno dei Pokémon nella panchina del tuo avversario.",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 10 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
			'ko-kr': "상대의 벤치 포켓몬 1마리에게도 10데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
