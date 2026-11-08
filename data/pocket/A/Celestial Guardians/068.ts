import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tapu Koko",
		'fr-fr': "Tokorico",
		'es-es': "Tapu Koko",
		'it-it': "Tapu Koko",
		'de-de': "Kapu-Riki",
		'pt-br': "Tapu Koko",
		'ko-kr': "카푸꼬꼬꼭"
	},

	illustrator: "kirisAki",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [785],
	hp: 100,
	types: ["Lightning"],

	description: {
		'en-us': "Although it's called a guardian deity, if a person or Pokémon puts it in a bad mood, it will become a malevolent deity and attack.",
		'fr-fr': "Bien qu'on le considère comme une divinité\nprotectrice, il peut se montrer cruel envers\nles humains et les Pokémon qui l'ont offensé.",
		'es-es': "Aunque se le considera un espíritu guardián,\nobra también como espíritu vengativo contra\nlas personas y Pokémon que desatan su ira.",
		'it-it': "È considerato un nume protettore ma, se si offende, monta su\ntutte le furie e non esita ad attaccare Pokémon ed esseri umani.",
		'de-de': "Trotz seiner Rolle als Schutzpatron kommt es vor,\ndass es wild wird und andere Pokémon oder Menschen\nangreift, die ihm die Laune verderben.",
		'pt-br': "Embora seja considerado um espírito guardião, se uma\npessoa ou Pokémon deixá-lo de mau humor, torna-se\num espírito malévolo e ataca.",
		'ko-kr': "수호신이라고 불리지만\n기분을 해치는 사람이나 포켓몬을\n공격하는 난폭한 신이기도 하다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Volt Switch",
			'fr-fr': "Change Éclair",
			'es-es': "Voltiocambio",
			'it-it': "Invertivolt",
			'de-de': "Voltwechsel",
			'pt-br': "Troca Elétrica",
			'ko-kr': "볼트체인지"
		},

		damage: 70,
		cost: ["Lightning", "Lightning", "Lightning"],

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched {L} Pokémon.",
			'fr-fr': "Échangez ce Pokémon avec un de vos Pokémon {L} de Banc.",
			'es-es': "Cambia este Pokémon por 1 de tus Pokémon {L} en Banca.",
			'it-it': "Scambia questo Pokémon con un Pokémon {L} della tua panchina.",
			'de-de': "Tausche dieses Pokémon gegen 1 {L}-Pokémon auf deiner Bank aus.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon {L} no Banco.",
			'ko-kr': "이 포켓몬을 벤치의 {L}포켓몬과 교체한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo"]
}

export default card
