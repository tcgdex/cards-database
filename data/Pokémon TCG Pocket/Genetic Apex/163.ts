import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Grapploct",
		fr: "Krakos",
		es: "Grapploct",
		it: "Grapploct",
		de: "Kaocto",
		'pt-br': "Grapploct",
		ko: "케오퍼스"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Stage1",
	evolveFrom: {
		en: "Clobbopus"
	},


	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Knock Back",
			fr: "Dégagement"
		},

		effect: {
			en: "Switch out your opponent’s Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			fr: "Échangez le Pokémon Actif de votre adversaire avec l'un de ses Pokémon de Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Diamond",

	description: {
		en: "A body made up of nothing but muscle makes the grappling moves this Pokémon performs with its tentacles tremendously powerful.",
		fr: "Son corps est un amas de muscles. La puissance des prises\nd'étranglement qu'il exécute avec ses tentacules est saisissante.",
		es: "Todo su cuerpo es una mole de puro músculo.\nUtiliza los tentáculos para ejecutar técnicas de\nestrangulamiento con una formidable potencia.",
		it: "Il suo corpo è un ammasso di muscoli.\nÈ in grado di stritolare con una potenza\nformidabile grazie ai suoi tentacoli.",
		de: "Sein Körper besteht gänzlich aus Muskeln.\nDie schiere Stärke seines Würgegriffs, bei dem\nes seine Tentakel einsetzt, ist sagenhaft.",
		'pt-br': "O corpo composto unicamente de músculos deste\nPokémon torna os seus movimentos de chave com\nos tentáculos incrivelmente poderosos.",
		ko: "온몸이 근육덩어리다.\n촉수를 사용해서 펼치는\n조르기 기술의 위력은 무시무시하다."
	}
}

export default card
