import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Fini",
		fr: "Tokopisco",
		es: "Tapu Fini",
		it: "Tapu Fini",
		de: "Kapu-Kime",
		'pt-br': "Tapu Fini",
		ko: "카푸느지느"
	},

	illustrator: "OKACHEKE",
	rarity: "One Star",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		en: "This guardian deity of Poni Island manipulates water. Because it lives deep within a thick fog, it came to be both feared and revered.",
		fr: "Gardien de Poni et maître de l'eau, il vit au plus\nprofond de la brume. C'est notamment pour\ncette raison qu'il est à la fois craint et vénéré.",
		es: "El espíritu guardián de Poni, temido y venerado a la vez.\nMora en una espesa niebla y manipula el agua a su antojo.",
		it: "Protettore di Poni, ha il potere di controllare i flutti. Vive\nin una fitta nebbia, venerato e temuto allo stesso tempo.",
		de: "Als Schutzpatron von Poni kontrolliert es das Wasser\nund lauert im dichten Nebel. Es wird gleichermaßen\ngefürchtet wie respektiert.",
		'pt-br': "O espírito guardião da Ilha Poni manipula a água.\nVive nas profundezas de uma névoa espessa,\npor isso passou a ser temido e reverenciado.",
		ko: "짙은 안개 속에 살고 있다고\n두려움과 존경을 받아 왔다.\n물을 조종하는 포니의 수호신이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Spiral Drain",
			fr: "Spirale Épuisante",
			es: "Drenaje Espiral",
			it: "Assorbimento Spirale",
			de: "Spiralsauger",
			'pt-br': "Dreno Espiral",
			ko: "스파이럴 드레인"
		},

		damage: 60,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts de ce Pokémon.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 20 danni.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon.",
			ko: "이 포켓몬의 HP를 20회복."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card