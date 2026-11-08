import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dubwool",
		'fr-fr': "Moumouflon",
		'es-es': "Dubwool",
		'it-it': "Dubwool",
		'de-de': "Zwollock",
		'pt-br': "Dubwool",
		'ko-kr': "배우르"
	},

	illustrator: "saino misaki",
	category: "Pokemon",

	dexId: [832],
	hp: 120,
	types: ["Colorless"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Wooloo"
	},

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Rolling Tackle",
			'fr-fr': "Roulé-Boulé",
			'es-es': "Placaje Giro",
			'it-it': "Rollazione",
			'de-de': "Rolltackle",
			'pt-br': "Golpe de Colisão Rolante",
			'ko-kr': "구르기 태클"
		},

		damage: "80"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		'en-us': "Weave a carpet from its springy wool, and you end up with something closer to a trampoline. You'll start to bounce the moment you set foot on it.",
		'fr-fr': "La texture de sa laine est si élastique que\nla surface des tapis fabriqués avec ce matériau\nest aussi rebondissante que celle d'un trampoline.",
		'es-es': "Su lana es muy flexible. Las alfombras tejidas con ella\nadoptan una textura similar a la de las camas elásticas.",
		'it-it': "I tappeti realizzati con i suoi peli sono\ntalmente elastici che saltandoci sopra\nsi rimbalza come su un trampolino.",
		'de-de': "Spannt man einen aus den elastischen Haaren\nvon Zwollock gewobenen Teppich auf, kann man\ndarauf hüpfen wie auf einem Trampolin.",
		'pt-br': "Tece um tapete feito de sua lã elástica, e o resultado\né algo semelhante a um trampolim. Você começará\na pular assim que pisar nele.",
		'ko-kr': "탄력 있는 털로 짜낸\n카펫은 트램펄린 같아서\n올라가면 통통 튀어 오르게 된다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
