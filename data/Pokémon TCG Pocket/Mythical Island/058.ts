import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgeotto",
		fr: "Roucoups",
		es: "Pidgeotto",
		it: "Pidgeotto",
		de: "Tauboga",
		'pt-br': "Pidgeotto",
		ko: "피죤"
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",

	dexId: [17],
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Pidgey"
	},

	description: {
		en: "The claws on its feet are well developed. It can carry prey such as an Exeggcute to its nest over 60 miles away.",
		fr: "Grâce à ses griffes très puissantes, il est capable de transporter\ndes Noeunoeuf vers un nid éloigné de plus de 100 km.",
		es: "Tiene unas garras desarrolladas. Puede\natrapar un Exeggcute y transportarlo\ndesde una distancia de casi 100 km.",
		it: "Grazie ai potenti artigli può trasportare una preda\ndelle dimensioni di un Exeggcute per oltre 100 km.",
		de: "Die Krallen an seinen Füßen sind sehr ausgeprägt.\nEs kann sogar ein Owei zu seinem Nest\nin 100 km Entfernung tragen.",
		'pt-br': "As garras nos seus pés são bem desenvolvidas.\nEle pode levar presas como Exeggcute para seu\nninho a mais de 100 km de distância.",
		ko: "발톱이 발달해 있다.\n먹이인 아라리를 잡아\n100km 떨어져 있는 둥지까지 나른다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Wing Attack",
			fr: "Cru-Ailes",
			es: "Ataque Ala",
			it: "Attacco d'Ala",
			de: "Flügelschlag",
			'pt-br': "Ataque de Asa",
			ko: "날개치기"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
