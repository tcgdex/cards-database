import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Koko",
		fr: "Tokorico",
		es: "Tapu Koko",
		it: "Tapu Koko",
		de: "Kapu-Riki",
		'pt-br': "Tapu Koko",
		ko: "카푸꼬꼬꼭"
	},

	illustrator: "OKACHEKE",
	rarity: "One Star",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		en: "Although it's called a guardian deity, if a person or Pokémon puts it in a bad mood, it will become a malevolent deity and attack.",
		fr: "Bien qu'on le considère comme une divinité\nprotectrice, il peut se montrer cruel envers\nles humains et les Pokémon qui l'ont offensé.",
		es: "Aunque se le considera un espíritu guardián,\nobra también como espíritu vengativo contra\nlas personas y Pokémon que desatan su ira.",
		it: "È considerato un nume protettore ma, se si offende, monta su\ntutte le furie e non esita ad attaccare Pokémon ed esseri umani.",
		de: "Trotz seiner Rolle als Schutzpatron kommt es vor,\ndass es wild wird und andere Pokémon oder Menschen\nangreift, die ihm die Laune verderben.",
		'pt-br': "Embora seja considerado um espírito guardião, se uma\npessoa ou Pokémon deixá-lo de mau humor, torna-se\num espírito malévolo e ataca.",
		ko: "수호신이라고 불리지만\n기분을 해치는 사람이나 포켓몬을\n공격하는 난폭한 신이기도 하다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Volt Switch",
			fr: "Change Éclair",
			es: "Voltiocambio",
			it: "Invertivolt",
			de: "Voltwechsel",
			'pt-br': "Troca Elétrica",
			ko: "볼트체인지"
		},

		damage: 70,
		cost: ["Lightning", "Lightning", "Lightning"],

		effect: {
			en: "Switch this Pokémon with 1 of your Benched {L} Pokémon.",
			fr: "Échangez ce Pokémon avec un de vos Pokémon {L} de Banc.",
			es: "Cambia este Pokémon por 1 de tus Pokémon {L} en Banca.",
			it: "Scambia questo Pokémon con un Pokémon {L} della tua panchina.",
			de: "Tausche dieses Pokémon gegen 1 {L} Pokémon auf deiner Bank aus.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon {L} no Banco.",
			ko: "이 포켓몬을 벤치의 {L}포켓몬과 교체한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
