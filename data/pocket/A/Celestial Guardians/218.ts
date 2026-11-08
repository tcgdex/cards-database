import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Staryu",
		'fr-fr': "Stari",
		'es-es': "Staryu",
		'it-it': "Staryu",
		'de-de': "Sterndu",
		'pt-br': "Staryu",
		'ko-kr': "별가사리"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [120],
	hp: 50,
	types: ["Water"],

	description: {
		'en-us': "If you visit a beach at the end of summer, you'll be able to see groups of Staryu lighting up in a steady rhythm.",
		'fr-fr': "Lorsqu'on se rend en bord de mer à la fin\nde l'été, on peut voir des groupes de Stari\nclignoter à un rythme régulier.",
		'es-es': "A finales de verano, se pueden ver grupos\nde Staryu en la orilla de la playa sincronizando\nel brillo de sus núcleos a ritmo regular.",
		'it-it': "Alla fine dell'estate, sui litorali è\npossibile osservare gruppi di Staryu\nche emettono luce a un ritmo regolare.",
		'de-de': "Bei spätsommerlichen Strandbesuchen kann man\nGruppen von Sterndu begegnen, deren Kerne in\ngleichmäßigem Rhythmus aufblinken.",
		'pt-br': "Se for à praia perto do fim do verão, você\nverá grupos de Staryu iluminados em um\nritmo contínuo.",
		'ko-kr': "늦여름 해변에 가면\n규칙적인 리듬으로 빛나는\n별가사리의 무리를 볼 수 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Smack",
			'fr-fr': "Claque",
			'es-es': "Palmetazo",
			'it-it': "Schiaffo",
			'de-de': "Klatscher",
			'pt-br': "Estalo",
			'ko-kr': "수벽치기"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo"]
}

export default card