import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pinsir",
		'fr-fr': "Scarabrute",
		'es-es': "Pinsir",
		'it-it': "Pinsir",
		'de-de': "Pinsir",
		'pt-br': "Pinsir",
		'ko-kr': "쁘사이저"
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",

	dexId: [127],
	hp: 90,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			'en-us': "Double Horn",
			'fr-fr': "Double Corne",
			'es-es': "Cornada Doble",
			'it-it': "Doppia Cornata",
			'de-de': "Doppelhorn",
			'pt-br': "Chifre Duplo",
			'ko-kr': "더블혼"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 50 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.",
			'it-it': "Lancia 2 volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 50 pontos de dano para cada cara.",
			'ko-kr': "동전을 2번 던져서 앞면이 나온 수 × 50데미지를 준다."
		},

		damage: "50×"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		'en-us': "These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender.",
		'fr-fr': "Ses cornes déterminent son rang au sein\ndu groupe. Plus elles sont imposantes, plus\nles membres du sexe opposé l'apprécient.",
		'es-es': "Los Pinsir se juzgan entre ellos por la robustez\nde la cornamenta. Cuanto más imponente sea,\nmás agradará a sus congéneres del sexo opuesto.",
		'it-it': "I Pinsir si giudicano a vicenda in base alle corna.\nQuelli con corna grosse e imponenti hanno\npiù successo con gli esemplari dell'altro sesso.",
		'de-de': "Der Status eines Pinsirs hängt von seinen Hörnern\nab. Je dicker und stattlicher diese sind, desto\nbeliebter ist es beim anderen Geschlecht.",
		'pt-br': "Estes Pokémon se julgam de acordo com\nsuas pinças. As pinças mais grossas e notáveis\nsão mais populares com o gênero oposto.",
		'ko-kr': "뿔로 서로의 등급을 매긴다.\n굵고 훌륭한 뿔을 가진\n쁘사이저일수록 이성에게 인기다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
