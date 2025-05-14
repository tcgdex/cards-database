import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Phanpy",
		fr: "Phanpy",
		es: "Phanpy",
		it: "Phanpy",
		de: "Phanpy",
		'pt-br': "Phanpy",
		ko: "코코리"
	},

	illustrator: "Asako Ito",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "This Pokémon lives and nests on a riverbank. After playing in the mud, it won't be able to settle down unless it washes its body.",
		fr: "Les Phanpy vivent dans les trous qu'ils creusent,\nprès des rivières. Après avoir joué dans la boue,\nils ont besoin de faire leur toilette pour se calmer.",
		es: "Vive en hoyos que cava en la ribera de los ríos. Tras retozar en el\nlodo, no se queda tranquilo hasta haberse lavado bien el cuerpo.",
		it: "Vive in tane che costruisce in riva ai fiumi.\nDopo aver giocato nel fango, non riesce\na star tranquillo finché non si è lavato.",
		de: "Es lebt in Nestern, die es an Flussufern baut.\nNach dem Spielen im Schlamm muss es sich\nerst waschen, um sich wohlzufühlen.",
		'pt-br': "Este Pokémon vive e constrói seu ninho nas margens\ndos rios. Depois de brincar na lama, não sossega\naté se lavar direito.",
		ko: "냇가에 굴을 파고 산다.\n흙장난을 한 뒤에 몸을 씻지 못하면\n안절부절못하기 때문이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rollout",
			fr: "Roulade",
			es: "Rodar",
			it: "Rotolamento",
			de: "Walzer",
			'pt-br': "Rolagem",
			ko: "구르기"
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
