import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Eelektross",
		'fr-fr': "Ohmassacre",
		'es-es': "Eelektross",
		'it-it': "Eelektross",
		'de-de': "Zapplarang",
		'pt-br': "Eelektross",
		'ko-kr': "저리더프"
	},

	illustrator: "hatachu",
	category: "Pokemon",

	dexId: [604],
	hp: 140,
	types: ["Lightning"],
	stage: "Stage2",

	evolveFrom: {
		'en-us': "Eelektrik"
	},

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Thunder Fang",
			'fr-fr': "Crocs Éclair",
			'es-es': "Colmillo Rayo",
			'it-it': "Fulmindenti",
			'de-de': "Donnerzahn",
			'pt-br': "Presa Trovejante",
			'ko-kr': "번개엄니"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 마비로 만든다.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
		},

		damage: "80"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Three Diamond",

	description: {
		'en-us': "They crawl out of the ocean using their arms. They will attack prey on shore and immediately drag it into the ocean.",
		'fr-fr': "Il peut sortir de l'eau à la force de ses bras\npour attaquer des proies sur la rive et les\nentraîner avec lui dans l'eau en un instant.",
		'es-es': "Sale del mar con la fuerza de sus brazos y ataca a sus\npresas en la costa. Luego se las lleva de vuelta al mar.",
		'it-it': "Striscia fuori dal mare con la sola forza\ndei propri arti. Poi attacca la preda a riva\ne con un guizzo la trascina con sé in acqua.",
		'de-de': "Es kriecht mithilfe seiner Arme an Land,\nstürzt sich auf seine Beute und zerrt sie\naugenblicklich ins Meer.",
		'pt-br': "Rastejam para fora do oceano usando seus braços.\nEles atacam as presas na costa e as arrastam\nimediatamente para a água.",
		'ko-kr': "팔 힘으로 바다에서 기어 나와\n물가에 있는 먹이를 덮친다.\n한순간에 바다로 끌고 들어간다."
	},

	boosters: ["mewtwo"]
}

export default card
