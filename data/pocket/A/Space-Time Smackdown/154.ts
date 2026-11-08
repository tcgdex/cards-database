import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dawn",
		'fr-fr': "Aurore",
		'es-es': "Maya",
		'it-it': "Lucinda",
		'de-de': "Lucia",
		'pt-br': "Dawn",
		'ko-kr': "빛나"
	},

	illustrator: "saino misaki",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Move an Energy from 1 of your Benched Pokémon to your Active Pokémon.",
		'fr-fr': "Déplacez une Énergie de l'un de vos Pokémon de Banc vers votre Pokémon Actif.",
		'es-es': "Mueve 1 Energía de 1 de tus Pokémon en Banca a tu Pokémon Activo.",
		'it-it': "Sposta un'Energia da uno dei tuoi Pokémon in panchina al tuo Pokémon attivo.",
		'de-de': "Verschiebe 1 Energie von 1 der Pokémon auf deiner Bank auf dein Aktives Pokémon.",
		'pt-br': "Mova 1 Energia de 1 dos seus Pokémon no Banco para o seu Pokémon Ativo.",
		'ko-kr': "자신의 벤치 포켓몬에서 에너지를 1개 선택해서 배틀 포켓몬에게 바꿔 붙인다."
	},

	trainerType: "Supporter",
	boosters: ["dialga"]
}

export default card