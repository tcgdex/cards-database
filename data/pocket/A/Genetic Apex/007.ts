import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Butterfree",
		'fr-fr': "Papilusion",
		'es-es': "Butterfree",
		'it-it': "Butterfree",
		'de-de': "Smettbo",
		'pt-br': "Butterfree",
		'ko-kr': "버터플"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",

	dexId: [12],
	hp: 120,
	types: ["Grass"],
	stage: "Stage2",

	evolveFrom: {
		'en-us': "Metapod"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Powder Heal",
			'fr-fr': "Soin Poudre",
			'es-es': "Polvo Sanador",
			'it-it': "Polvere Lenitiva",
			'de-de': "Puderheilung",
			'pt-br': "Cura em Pó",
			'ko-kr': "파우더 힐"
		},

		effect: {
			'en-us': "Once during your turn, you may heal 20 damage from each of your Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de chacun de vos Pokémon.",
			'es-es': "Una vez durante tu turno, puedes curar 20 puntos de daño a cada uno de tus Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, puoi curare ciascuno dei tuoi Pokémon da 20 danni.",
			'de-de': "Einmal während deines Zuges kannst du 20 Schadenspunkte bei jedem deiner Pokémon heilen.",
			'pt-br': "Uma vez durante o seu turno, você poderá curar 20 pontos de dano de cada um dos seus Pokémon.",
			'ko-kr': "자신의 차례에 1번 사용할 수 있다. 자신의 포켓몬 전원의 HP를 20회복."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Gust",
			'fr-fr': "Tornade",
			'es-es': "Tornado",
			'it-it': "Raffica",
			'de-de': "Windstoß",
			'pt-br': "Lufada de Vento",
			'ko-kr': "바람일으키기"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond",

	description: {
		'en-us': "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
		'fr-fr': "En combat, il bat des ailes très rapidement pour\nprojeter de la poudre toxique sur ses ennemis.",
		'es-es': "Aletea a gran velocidad para lanzar al aire\nsus escamas extremadamente tóxicas.",
		'it-it': "Sbatte le ali a gran velocità per liberare\nle sue polveri tossiche nell'aria.",
		'de-de': "Wenn es sehr schnell mit den Flügeln schlägt,\nsetzt es hochgiftigen Flügelstaub frei.",
		'pt-br': "Durante as batalhas, bate as asas muito rápido\npara liberar uma poeira altamente tóxica no ar.",
		'ko-kr': "매우 빠르게 날갯짓하면\n맹독성의 인분이\n바람을 타고 날아간다."
	},

	boosters: ["pikachu"]
}

export default card
