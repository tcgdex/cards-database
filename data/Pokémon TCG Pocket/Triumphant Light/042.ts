import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Nosepass",
		fr: "Tarinor",
		es: "Nosepass",
		it: "Nosepass",
		de: "Nasgnet",
		'pt-br': "Nosepass",
		ko: "코코파스"
	},

	illustrator: "Satoshi Shirai",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "It moves less than an inch a year, but when it's in a jam, it will spin and drill down into the ground in a split second.",
		fr: "Il ne se déplace que d'un centimètre\npar an, mais s'il se sent menacé, il virevolte\net s'enfonce dans le sol en un instant.",
		es: "Solo se desplaza un centímetro al año, pero,\nsi se siente amenazado, gira sobre sí mismo\ny se hunde bajo tierra en un abrir y cerrar de ojos.",
		it: "Si sposta di 1 cm all'anno, ma quando si trova in difficoltà\nruota su se stesso e in un attimo si nasconde sottoterra.",
		de: "Es bewegt sich nur 1 cm pro Jahr, aber in\nNotlagen bohrt es sich mit seinem Körper\nblitzschnell in den Boden.",
		'pt-br': "Este Pokémon move-se 3 centímetros por ano,\nmas quando está em uma enrascada, gira e perfura o solo\nem questão de segundos.",
		ko: "1년에 1cm밖에 움직이지 않지만\n위기에 처하면 회전하여\n순식간에 땅속으로 파고든다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			de: "Tackle",
			'pt-br': "Investida",
			ko: "몸통박치기"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card
