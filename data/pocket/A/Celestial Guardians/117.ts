import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alolan Diglett",
		'fr-fr': "Taupiqueurd'Alola",
		'es-es': "Diglettde Alola",
		'it-it': "Diglettdi Alola",
		'de-de': "Alola-Digda",
		'pt-br': "Diglettde Alola",
		'ko-kr': "알로라디그다"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [50],
	hp: 50,
	types: ["Metal"],

	description: {
		'en-us': "The metal-rich geology of this Pokémon's habitat caused it to develop steel whiskers on its head.",
		'fr-fr': "À force d'être en contact avec des terres\nriches en métaux, des vibrisses en acier\nont poussé sur le sommet de sa tête.",
		'es-es': "Debido al terreno rico en metales, le crecen\nen la cabeza unos filamentos metálicos.",
		'it-it': "Il terreno ricco di metalli gli ha fatto\nspuntare dei peli d'acciaio sulla testa.",
		'de-de': "Seine stählernen Haare auf dem Kopf sind ihm\ngewachsen, weil es sich in einem Boden mit\nhohem metallischen Anteil aufhielt.",
		'pt-br': "O habitat rico em metal deste Pokémon\nfez com que bigodes de aço se formassem em sua cabeça.",
		'ko-kr': "금속 성분이 많이 포함된\n지질의 영향으로 강철\n수염이 머리에 났다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'de-de': "Kopfnuss",
			'pt-br': "Cabeçada",
			'ko-kr': "박치기"
		},

		damage: 20,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo", "lunala"]
}

export default card