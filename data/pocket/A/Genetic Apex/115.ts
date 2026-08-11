import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Abra",
		fr: "Abra",
		es: "Abra",
		it: "Abra",
		de: "Abra",
		'pt-br': "Abra",
		ko: "캐이시"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",

	dexId: [63],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Teleport",
			fr: "Téléport",
			es: "Teletransporte",
			it: "Teletrasporto",
			de: "Teleport",
			'pt-br': "Teleporte",
			ko: "순간이동"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			ko: "이 포켓몬을 벤치 포켓몬과 교체한다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "This Pokémon uses its psychic powers while it sleeps. The contents of Abra's dreams affect the powers that the Pokémon wields.",
		fr: "Le contenu de ses rêves influe sur les pouvoirs\npsychiques qu'il utilise dans son sommeil.",
		es: "Es capaz de usar sus poderes psíquicos aun\nestando dormido. Al parecer, el contenido\ndel sueño influye en sus facultades.",
		it: "Il contenuto dei suoi sogni influisce sui suoi poteri\npsichici, che può utilizzare anche mentre dorme.",
		de: "Es setzt seine Psycho-Kräfte selbst im\nSchlaf ein. Der Inhalt seiner Träume hat\nEinfluss auf die Kräfte, die es verwendet.",
		'pt-br': "Usa seus poderes psíquicos enquanto dorme.\nO conteúdo dos sonhos de Abra afeta os\npoderes que este Pokémon possui.",
		ko: "자면서 초능력을 구사한다.\n꿈의 내용이\n사용하는 힘에 영향을 준다."
	},

	boosters: ["charizard"]
}

export default card
