import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Cherubi",
		fr: "Ceribou",
		es: "Cherubi",
		it: "Cherubi",
		de: "Kikugi",
		'pt-br': "Cherubi",
		ko: "체리버"
	},

	illustrator: "Atsuko Nishida",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		en: "It nimbly dashes about to avoid getting pecked by bird Pokémon that would love to make off with its small, nutrient-rich storage ball.",
		fr: "Il s'enfuit à la vue des Pokémon oiseaux, dont le mets\nfavori est sa petite boule remplie de nutriments.",
		es: "Se ve obligado a huir constantemente de\nlos Pokémon pájaro, pues su pequeña esfera\nrepleta de nutrientes es su manjar predilecto.",
		it: "Fugge dai Pokémon alati, ghiotti della\nsua pallina ricca di sostanze nutritive.",
		de: "Sein nährstoffreiches Bällchen erfreut sich bei\nVogel-Pokémon großer Beliebtheit. Es ist ständig\nauf der Flucht, damit es nicht gefressen wird.",
		'pt-br': "Corre agilmente para evitar ser bicado por Pokémon\npássaro que adorariam fugir com sua bolinha\nde armazenamento rica em nutrientes.",
		ko: "영양이 듬뿍 담긴 구슬을\n새포켓몬들이 아주 좋아한다.\n쪼이지 않기 위해 도망 다닌다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Leafage",
			fr: "Feuillage",
			es: "Follaje",
			it: "Fogliame",
			de: "Blattwerk",
			'pt-br': "Folhagem",
			ko: "나뭇잎"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
