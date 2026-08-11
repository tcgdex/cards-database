import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy",
		'es-es': "Phanpy",
		'it-it': "Phanpy",
		'de-de': "Phanpy",
		'pt-br': "Phanpy",
		'ko-kr': "코코리"
	},

	illustrator: "Asako Ito",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [231],
	hp: 60,
	types: ["Fighting"],

	description: {
		'en-us': "This Pokémon lives and nests on a riverbank. After playing in the mud, it won't be able to settle down unless it washes its body.",
		'fr-fr': "Les Phanpy vivent dans les trous qu'ils creusent,\nprès des rivières. Après avoir joué dans la boue,\nils ont besoin de faire leur toilette pour se calmer.",
		'es-es': "Vive en hoyos que cava en la ribera de los ríos. Tras retozar en el\nlodo, no se queda tranquilo hasta haberse lavado bien el cuerpo.",
		'it-it': "Vive in tane che costruisce in riva ai fiumi.\nDopo aver giocato nel fango, non riesce\na star tranquillo finché non si è lavato.",
		'de-de': "Es lebt in Nestern, die es an Flussufern baut.\nNach dem Spielen im Schlamm muss es sich\nerst waschen, um sich wohlzufühlen.",
		'pt-br': "Este Pokémon vive e constrói seu ninho nas margens\ndos rios. Depois de brincar na lama, não sossega\naté se lavar direito.",
		'ko-kr': "냇가에 굴을 파고 산다.\n흙장난을 한 뒤에 몸을 씻지 못하면\n안절부절못하기 때문이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade",
			'es-es': "Rodar",
			'it-it': "Rotolamento",
			'de-de': "Walzer",
			'pt-br': "Rolagem",
			'ko-kr': "구르기"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card
