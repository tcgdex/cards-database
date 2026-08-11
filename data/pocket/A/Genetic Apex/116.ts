import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Kadabra",
		'fr-fr': "Kadabra",
		'es-es': "Kadabra",
		'it-it': "Kadabra",
		'de-de': "Kadabra",
		'pt-br': "Kadabra",
		'ko-kr': "윤겔라"
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",

	dexId: [64],
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Abra"
	},

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Super Psy Bolt",
			'fr-fr': "Super Psy",
			'es-es': "Superrayo Psi",
			'it-it': "Superpsico",
			'de-de': "Super-Psischlag",
			'pt-br': "Super-raio Psíquico",
			'ko-kr': "초염동력"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		'en-us': "Using its psychic power, Kadabra levitates as it sleeps. It uses its springy tail as a pillow.",
		'fr-fr': "Ses pouvoirs psychiques lui permettent de léviter en dormant.\nIl utilise alors sa queue très souple comme un oreiller.",
		'es-es': "Duerme suspendido en el aire gracias a sus\npoderes psíquicos. La cola, de una flexibilidad\nextraordinaria, hace las veces de almohada.",
		'it-it': "I suoi poteri psichici gli permettono di\nlevitare mentre dorme. Come cuscino usa\nla sua coda straordinariamente elastica.",
		'de-de': "Kadabras Psycho-Kräfte ermöglichen es ihm,\nschwebend zu schlafen. Seinen äußerst\nelastischen Schweif nutzt es dabei als Kissen.",
		'pt-br': "Usando seu poder psíquico, Kadabra levita\nenquanto dorme. Usa sua cauda elástica\ncomo um travesseiro.",
		'ko-kr': "사이코 파워로 공중에 떠서 잠든다.\n탄력이 뛰어난 꼬리를\n베개 대신으로 사용한다."
	},

	boosters: ["charizard"]
}

export default card
