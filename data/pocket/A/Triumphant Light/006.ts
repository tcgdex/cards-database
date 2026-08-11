import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cherubi",
		'fr-fr': "Ceribou",
		'es-es': "Cherubi",
		'it-it': "Cherubi",
		'de-de': "Kikugi",
		'pt-br': "Cherubi",
		'ko-kr': "체리버"
	},

	illustrator: "Atsuko Nishida",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [420],
	hp: 50,
	types: ["Grass"],

	description: {
		'en-us': "It nimbly dashes about to avoid getting pecked by bird Pokémon that would love to make off with its small, nutrient-rich storage ball.",
		'fr-fr': "Il s'enfuit à la vue des Pokémon oiseaux, dont le mets\nfavori est sa petite boule remplie de nutriments.",
		'es-es': "Se ve obligado a huir constantemente de\nlos Pokémon pájaro, pues su pequeña esfera\nrepleta de nutrientes es su manjar predilecto.",
		'it-it': "Fugge dai Pokémon alati, ghiotti della\nsua pallina ricca di sostanze nutritive.",
		'de-de': "Sein nährstoffreiches Bällchen erfreut sich bei\nVogel-Pokémon großer Beliebtheit. Es ist ständig\nauf der Flucht, damit es nicht gefressen wird.",
		'pt-br': "Corre agilmente para evitar ser bicado por Pokémon\npássaro que adorariam fugir com sua bolinha\nde armazenamento rica em nutrientes.",
		'ko-kr': "영양이 듬뿍 담긴 구슬을\n새포켓몬들이 아주 좋아한다.\n쪼이지 않기 위해 도망 다닌다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Leafage",
			'fr-fr': "Feuillage",
			'es-es': "Follaje",
			'it-it': "Fogliame",
			'de-de': "Blattwerk",
			'pt-br': "Folhagem",
			'ko-kr': "나뭇잎"
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
