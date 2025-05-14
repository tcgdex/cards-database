import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Blastoise",
		fr: "Tortank",
		es: "Blastoise",
		it: "Blastoise",
		de: "Turtok",
		'pt-br': "Blastoise",
		ko: "거북왕"
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Stage2",
	evolveFrom: {
		en: "Wartortle"
	},


	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
			es: "Hidrobomba",
			it: "Idropompa",
			de: "Hydropumpe",
			'pt-br': "Jato d'Água",
			ko: "하이드로펌프"
		},

		effect: {
			en: "If this Pokémon has at least 2 extra {W} Energy attached, this attack does 60 more damage.",
			fr: "Si ce Pokémon a au moins 2 Énergies {W} de plus, cette attaque inflige 60 dégâts supplémentaires.",
			es: "Si este Pokémon tiene por lo menos 2 Energías {W} adicionales unidas a él, este ataque hace 60 puntos de daño más.",
			it: "Se questo Pokémon ha almeno 2 Energie {W} extra assegnate, questo attacco infligge 60 danni in più.",
			de: "Wenn an dieses Pokémon mindestens 2 extra {W} Energien angelegt sind, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'pt-br': "Se este Pokémon tiver pelo menos 2 Energias {W} extras ligada a ele, este ataque causará 60 pontos de dano a mais.",
			ko: "W에너지 2개가 추가로 붙어 있다면 60데미지를 추가한다."
		},

		damage: "80+"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Three Diamond",

	description: {
		en: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
		fr: "Il écrase ses adversaires de tout son poids\npour leur faire perdre connaissance.\nIl rentre dans sa carapace s'il se sent en danger.",
		es: "Para acabar con su enemigo, lo aplasta\ncon el peso de su cuerpo. En momentos\nde apuro, se esconde en el caparazón.",
		it: "Mette KO gli avversari schiacciandoli sotto il corpo\npossente. Se è in difficoltà, può ritrarsi nella corazza.",
		de: "Es begräbt seine Gegner mit seinem enormen\nKörpergewicht. Wenn es in einer aussichtslosen\nLage steckt, zieht es sich in seinen Panzer zurück.",
		'pt-br': "Esmaga seus inimigos com seu corpo pesado\naté que desmaiem. Quando está em apuros,\nse esconde dentro do seu casco.",
		ko: "무거운 몸으로 상대를\n덮쳐서 기절시킨다.\n위기에 처하면 등껍질에 숨는다."
	}
}

export default card
