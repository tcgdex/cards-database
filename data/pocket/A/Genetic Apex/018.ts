import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bellsprout",
		'fr-fr': "Chétiflor",
		'es-es': "Bellsprout",
		'it-it': "Bellsprout",
		'de-de': "Knofensa",
		'pt-br': "Bellsprout",
		'ko-kr': "모다피"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",

	dexId: [69],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Vine Whip",
			'fr-fr': "Fouet Lianes",
			'es-es': "Látigo Cepa",
			'it-it': "Frustata",
			'de-de': "Rankenhieb",
			'pt-br': "Chicote de Vinha",
			'ko-kr': "덩굴채찍"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "Even though its body is extremely skinny, it is blindingly fast when catching its prey.",
		'fr-fr': "Même si son corps est très frêle, ce Pokémon\nest extrêmement rapide quand il attaque ses adversaires.",
		'es-es': "Aunque su cuerpo es extremadamente delgado,\nes muy rápido a la hora de capturar sus presas.",
		'it-it': "Sebbene abbia un corpo magrissimo, sa essere\nmolto rapido quando si scaglia sulla preda.",
		'de-de': "Obwohl sein Körper sehr schmal ist,\nschnappt es blitzschnell nach Beute.",
		'pt-br': "Mesmo tendo um corpo extremamente magro,\né estupidamente rápido para pegar suas presas.",
		'ko-kr': "홀쭉한 체격이지만\n먹이를 잡을 때의 움직임은\n눈에 보이지 않을 정도로 빠르다."
	},

	boosters: ["charizard"]
}

export default card
