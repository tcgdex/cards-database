import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Fomantis",
		'fr-fr': "Mimantis",
		'es-es': "Fomantis",
		'it-it': "Fomantis",
		'de-de': "Imantis",
		'pt-br': "Fomantis",
		'ko-kr': "짜랑랑"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [753],
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "Fomantis hates having its naps interrupted. It fires off beams using energy it gathers by bathing in the sun.",
		'fr-fr': "Ce Pokémon déteste qu'on le dérange\npendant sa sieste. Il projette des rayons\ngrâce à l'énergie solaire qu'il emmagasine.",
		'es-es': "Detesta que lo molesten cuando echa la siesta. Dispara rayos\nempleando la energía que ha acumulado al tomar el sol.",
		'it-it': "Detesta chiunque disturbi le sue pennichelle\ndiurne. Standosene al sole accumula energia\nche poi rilascia in forma di potenti raggi.",
		'de-de': "Es wird nicht gern beim Mittagsschlaf gestört.\nMithilfe der Energie, die es beim Sonnenbaden\nsammelt, kann es Strahlen abfeuern.",
		'pt-br': "Fomantis odeia que interrompam suas sonecas. Dispara\nraios usando a energia que armazena enquanto toma sol.",
		'ko-kr': "낮잠을 방해받는 것을 매우 싫어한다.\n일광욕으로 모은 에너지로\n빔을 발사할 수 있다."
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

	retreat: 1,
	boosters: ["solgaleo", "lunala"]
}

export default card