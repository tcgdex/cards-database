import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Dawn",
		fr: "Aurore",
		es: "Maya",
		it: "Lucinda",
		de: "Lucia",
		'pt-br': "Dawn",
		ko: "빛나"
	},

	illustrator: "saino misaki",
	rarity: "Two Star",
	category: "Trainer",

	effect: {
		en: "Move an Energy from 1 of your Benched Pokémon to your Active Pokémon.",
		fr: "Déplacez une Énergie de l'un de vos Pokémon de Banc vers votre Pokémon Actif.",
		es: "Mueve 1 Energía de 1 de tus Pokémon en Banca a tu Pokémon Activo.",
		it: "Sposta un'Energia da uno dei tuoi Pokémon in panchina al tuo Pokémon attivo.",
		de: "Verschiebe 1 Energie von 1 der Pokémon auf deiner Bank auf dein Aktives Pokémon.",
		'pt-br': "Mova 1 Energia de 1 dos seus Pokémon no Banco para o seu Pokémon Ativo.",
		ko: "자신의 벤치 포켓몬에서 에너지를 1개 선택해서 배틀 포켓몬에게 바꿔 붙인다."
	},

	trainerType: "Supporter",
	boosters: ["dialga"]
}

export default card