import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Bellsprout",
		fr: "Chétiflor",
		es: "Bellsprout",
		it: "Bellsprout",
		de: "Knofensa",
		'pt-br': "Bellsprout",
		ko: "모다피"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes",
			es: "Látigo Cepa",
			it: "Frustata",
			de: "Rankenhieb",
			'pt-br': "Chicote de Vinha",
			ko: "덩굴채찍"
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
		en: "Even though its body is extremely skinny, it is blindingly fast when catching its prey.",
		fr: "Même si son corps est très frêle, ce Pokémon\nest extrêmement rapide quand il attaque ses adversaires.",
		es: "Aunque su cuerpo es extremadamente delgado,\nes muy rápido a la hora de capturar sus presas.",
		it: "Sebbene abbia un corpo magrissimo, sa essere\nmolto rapido quando si scaglia sulla preda.",
		de: "Obwohl sein Körper sehr schmal ist,\nschnappt es blitzschnell nach Beute.",
		'pt-br': "Mesmo tendo um corpo extremamente magro,\né estupidamente rápido para pegar suas presas.",
		ko: "홀쭉한 체격이지만\n먹이를 잡을 때의 움직임은\n눈에 보이지 않을 정도로 빠르다."
	}
}

export default card
