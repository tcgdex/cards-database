import { Card } from "models/database/card"
import Set from "../Mythical Island"

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

	illustrator: "Naoyo Kimura",
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
			'en-us': "Circle Circuit",
			'fr-fr': "Cercle Électrik",
			'es-es': "Circuito Circular",
			'it-it': "Elettroruota",
			'de-de': "Rundparcours",
			'pt-br': "Circuito Circular",
			'ko-kr': "일렉트릭서클"
		},

		damage: "10×",
		cost: ["Lightning"],

		effect: {
			'en-us': "This attack does 10 damage for each of your Benched {L} Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts pour chaque Pokémon {L} sur votre Banc.",
			'es-es': "Este ataque hace 10 puntos de daño por cada uno de tus Pokémon {L} en Banca.",
			'it-it': "Questo attacco infligge 10 danni per ogni Pokémon {L} nella tua panchina.",
			'de-de': "Diese Attacke fügt für jedes {L}-Pokémon auf deiner Bank 10 Schadenspunkte zu.",
			'pt-br': "Este Pokémon causa 10 pontos de dano para cada Pokémon {L} no seu Banco.",
			'ko-kr': "자신의 벤치의 {L}포켓몬의 수 × 10데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
