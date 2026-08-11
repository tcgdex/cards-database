import { Card } from "models/database/card"
import Set from "../Celestial Guardians"
const card: Card = {
	set: Set,

	name: {
		'en-us': "Blastoise",
		'fr-fr': "Tortank",
		'es-es': "Blastoise",
		'it-it': "Blastoise",
		'de-de': "Turtok",
		'ko-kr': "거북왕",
		'pt-br': "Blastoise"
	},

	illustrator: "Nisota Niso",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [9],
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Wartortle"
	},

	description: {
		'en-us': "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
		'fr-fr': "Il écrase ses adversaires de tout son poids\npour leur faire perdre connaissance.\nIl rentre dans sa carapace s'il se sent en danger.",
		'es-es': "Para acabar con su enemigo, lo aplasta\ncon el peso de su cuerpo. En momentos\nde apuro, se esconde en el caparazón.",
		'it-it': "Mette KO gli avversari schiacciandoli sotto il corpo\npossente. Se è in difficoltà, può ritrarsi nella corazza.",
		'de-de': "Es begräbt seine Gegner mit seinem enormen\nKörpergewicht. Wenn es in einer aussichtslosen\nLage steckt, zieht es sich in seinen Panzer zurück.",
		'ko-kr': "무거운 몸으로 상대를\n덮쳐서 기절시킨다.\n위기에 처하면 등껍질에 숨는다.",
		'pt-br': "Esmaga seus inimigos com seu corpo pesado\naté que desmaiem. Quando está em apuros,\nse esconde dentro do seu casco."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Hydro Pump",
			'fr-fr': "Hydrocanon",
			'es-es': "Hidrobomba",
			'it-it': "Idropompa",
			'de-de': "Hydropumpe",
			'ko-kr': "하이드로펌프",
			'pt-br': "Jato d'Água"
		},
		damage: 80,
		cost: ["Water", "Water", "Colorless"],
		effect: {
			'en-us': "If this Pokémon has at least 2 extra {W} Energy attached, this attack does 60 more damage.",
			'fr-fr': "Si ce Pokémon a au moins 2 Énergies {W} de plus, cette attaque inflige 60 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene por lo menos 2 Energías {W} adicionales unidas a él, este ataque hace 60 puntos de daño más.",
			'it-it': "Se questo Pokémon ha almeno 2 Energie {W} extra assegnate, questo attacco infligge 60 danni in più.",
			'de-de': "Wenn an dieses Pokémon mindestens 2 extra {W}-Energien angelegt sind, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'ko-kr': "{W}에너지 2개가 추가로 붙어 있다면 60데미지를 추가한다.",
			'pt-br': "Se este Pokémon tiver pelo menos 2 Energia {W} extra ligada a ele, este ataque causará 60 pontos de dano a mais."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["lunala"]
}
export default card