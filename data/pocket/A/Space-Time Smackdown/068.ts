import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'es-es': "Ralts",
		'it-it': "Ralts",
		'de-de': "Trasla",
		'pt-br': "Ralts",
		'ko-kr': "랄토스"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [280],
	hp: 60,
	types: ["Psychic"],

	description: {
		'en-us': "The horns on its head provide a strong power that enables it to sense people's emotions.",
		'fr-fr': "Il perçoit très précisément les émotions humaines\ngrâce aux cornes rouges sur sa tête.",
		'es-es': "Gracias a los cuernos rojos de su cabeza,\npuede captar lo que sienten las personas.",
		'it-it': "Ha la capacità di percepire le emozioni delle\npersone grazie alle corna rosse che ha sul capo.",
		'de-de': "Mit den roten Hörnern auf seinem Kopf kann es\ndie Gefühle der Menschen genau erspüren.",
		'pt-br': "O chifre na sua cabeça lhe garante o poder\ngrandioso de sentir as emoções das pessoas.",
		'ko-kr': "사람의 감정을 머리의\n빨간 뿔로 민감하게\n감지하는 힘을 가졌다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Teleport",
			'fr-fr': "Téléport",
			'es-es': "Teletransporte",
			'it-it': "Teletrasporto",
			'de-de': "Teleport",
			'pt-br': "Teleporte",
			'ko-kr': "순간이동"
		},

		cost: ["Colorless"],

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
	boosters: ["dialga"]
}

export default card
