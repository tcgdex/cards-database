import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Paras",
		'fr-fr': "Paras",
		'es-es': "Paras",
		'it-it': "Paras",
		'de-de': "Paras",
		'pt-br': "Paras",
		'ko-kr': "파라스"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",

	dexId: [46],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'it-it': "Graffio",
			'de-de': "Kratzer",
			'pt-br': "Arranhão",
			'ko-kr': "할퀴기"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "The mushrooms, known as tochukaso, are controlling the bug. Even if the bug bugs the mushrooms, they tell it to bug off.",
		'fr-fr': "Les champignons, appelés tochukaso,\ncontrôlent l'insecte contre sa volonté.",
		'es-es': "Las setas que tiene en el dorso,\nllamadas tochukaso, controlan\nal insecto contra su voluntad.",
		'it-it': "I funghi che crescono sul dorso di questo\nPokémon, chiamati tochukaso, controllano\nle sue azioni contro la sua volontà.",
		'de-de': "Paras' Körper kann nicht nach seinem eigenen\nWillen handeln, da er von Tochukaso, den Pilzen\nauf seinem Rücken, kontrolliert wird.",
		'pt-br': "Os cogumelos, conhecidos como tochukaso,\ncontrolam o inseto. Quando o inseto perturba\nos cogumelos, eles o mandam catar coquinho.",
		'ko-kr': "동충하초라고 불리는 버섯이\n벌레를 조종하고 있다.\n벌레의 의사는 무시된다."
	},

	boosters: ["pikachu"]
}

export default card
