import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Ralts",
		fr: "Tarsal",
		es: "Ralts",
		it: "Ralts",
		de: "Trasla",
		'pt-br': "Ralts",
		ko: "랄토스"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "The horns on its head provide a strong power that enables it to sense people's emotions.",
		fr: "Il perçoit très précisément les émotions humaines\ngrâce aux cornes rouges sur sa tête.",
		es: "Gracias a los cuernos rojos de su cabeza,\npuede captar lo que sienten las personas.",
		it: "Ha la capacità di percepire le emozioni delle\npersone grazie alle corna rosse che ha sul capo.",
		de: "Mit den roten Hörnern auf seinem Kopf kann es\ndie Gefühle der Menschen genau erspüren.",
		'pt-br': "O chifre na sua cabeça lhe garante o poder\ngrandioso de sentir as emoções das pessoas.",
		ko: "사람의 감정을 머리의\n빨간 뿔로 민감하게\n감지하는 힘을 가졌다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Teleport",
			fr: "Téléport",
			es: "Teletransporte",
			it: "Teletrasporto",
			de: "Teleport",
			'pt-br': "Teleporte",
			ko: "순간이동"
		},

		cost: ["Colorless"],

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

	retreat: 1
}

export default card
