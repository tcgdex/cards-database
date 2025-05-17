import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		de: "Pikachu",
		'pt-br': "Pikachu",
		ko: "피카츄"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
		fr: "Quand il s'énerve, il libère instantanément\nl'énergie emmagasinée dans les poches de\nses joues.",
		es: "Cuando se enfada, este Pokémon\ndescarga la energía que almacena en\nel interior de las bolsas de las mejillas.",
		it: "Quando s'arrabbia, libera subito l'energia\naccumulata nelle sacche sulle guance.",
		de: "Ist es wütend, entlädt sich augenblicklich die\nElektrizität, die es in seinen Backentaschen\ngespeichert hat.",
		'pt-br': "Quando está com raiva, descarrega\nimediatamente a energia armazenada\nnas bolsas em suas bochechas.",
		ko: "양 볼에는 전기를 저장하는 주머니가 있다.\n화가 나면 저장한 전기를 단숨에 방출한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Circle Circuit",
			fr: "Cercle Électrik",
			es: "Circuito Circular",
			it: "Elettroruota",
			de: "Rundparcours",
			'pt-br': "Circuito Circular",
			ko: "일렉트릭서클"
		},

		damage: "10×",
		cost: ["Lightning"],

		effect: {
			en: "This attack does 10 damage for each of your Benched {L} Pokémon.",
			fr: "Cette attaque inflige 10 dégâts pour chaque Pokémon {L} sur votre Banc.",
			es: "Este ataque hace 10 puntos de daño por cada uno de tus Pokémon {L} en Banca.",
			it: "Questo attacco infligge 10 danni per ogni Pokémon {L} nella tua panchina.",
			de: "Diese Attacke fügt für jedes {L}-Pokémon auf deiner Bank 10 Schadenspunkte zu.",
			'pt-br': "Este Pokémon causa 10 pontos de dano para cada Pokémon {L} no seu Banco.",
			ko: "자신의 벤치의 {L}포켓몬의 수 × 10데미지를 준다."
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
