import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Abra",
		'fr-fr': "Abra",
		'es-es': "Abra",
		'it-it': "Abra",
		'de-de': "Abra",
		'pt-br': "Abra",
		'ko-kr': "캐이시"
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
			'en-us': "Teleport",
			'fr-fr': "Téléport",
			'es-es': "Teletransporte",
			'it-it': "Teletrasporto",
			'de-de': "Teleport",
			'pt-br': "Teleporte",
			'ko-kr': "순간이동"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'ko-kr': "이 포켓몬을 벤치 포켓몬과 교체한다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "This Pokémon uses its psychic powers while it sleeps. The contents of Abra's dreams affect the powers that the Pokémon wields.",
		'fr-fr': "Le contenu de ses rêves influe sur les pouvoirs\npsychiques qu'il utilise dans son sommeil.",
		'es-es': "Es capaz de usar sus poderes psíquicos aun\nestando dormido. Al parecer, el contenido\ndel sueño influye en sus facultades.",
		'it-it': "Il contenuto dei suoi sogni influisce sui suoi poteri\npsichici, che può utilizzare anche mentre dorme.",
		'de-de': "Es setzt seine Psycho-Kräfte selbst im\nSchlaf ein. Der Inhalt seiner Träume hat\nEinfluss auf die Kräfte, die es verwendet.",
		'pt-br': "Usa seus poderes psíquicos enquanto dorme.\nO conteúdo dos sonhos de Abra afeta os\npoderes que este Pokémon possui.",
		'ko-kr': "자면서 초능력을 구사한다.\n꿈의 내용이\n사용하는 힘에 영향을 준다."
	},

	boosters: ["charizard"]
}

export default card
