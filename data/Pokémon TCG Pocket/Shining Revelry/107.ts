import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Beedrill ex",
		fr: "Dardargnan-ex",
		es: "Beedrill ex",
		it: "Beedrill-ex",
		de: "Bibor-ex",
		'pt-br': "Beedrill ex",
		ko: "독침붕 ex"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 170,
	types: ["Grass"],

	evolveFrom: {
		en: "Kakuna"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Crushing Spear",
			fr: "Lance Destructrice",
			es: "Lanza Devastadora",
			it: "Lancia Devastante",
			de: "Vernichtender Speer",
			'pt-br': "Lança Aniquiladora",
			ko: "크래시스피어"
		},

		damage: 80,
		cost: ["Grass", "Grass"],

		effect: {
			en: "Discard a random Energy from your opponent's Active Pokémon.",
			fr: "Défaussez au hasard une Énergie du Pokémon Actif de votre adversaire.",
			es: "Descarta 1 Energía aleatoria del Pokémon Activo de tu rival.",
			it: "Rimuovi un'Energia a caso dal Pokémon attivo del tuo avversario.",
			de: "Lege 1 zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
			'pt-br': "Descarte 1 Energia aleatória do Pokémon Ativo do seu oponente.",
			ko: "상대의 배틀 포켓몬에서 에너지를 랜덤으로 1개 트래쉬한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Shiny"
}

export default card