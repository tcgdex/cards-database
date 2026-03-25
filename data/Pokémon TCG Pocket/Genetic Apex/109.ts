import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Eelektross",
		fr: "Ohmassacre",
		es: "Eelektross",
		it: "Eelektross",
		de: "Zapplarang",
		'pt-br': "Eelektross",
		ko: "저리더프"
	},

	illustrator: "hatachu",
	category: "Pokemon",

	dexId: [604],
	hp: 140,
	types: ["Lightning"],
	stage: "Stage2",

	evolveFrom: {
		en: "Eelektrik",
		fr: "Lampéroie",
		es: "Eelektrik",
		it: "Eelektrik",
		pt: "Eelektrik",
		de: "Zapplalek"
	},

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Thunder Fang",
			fr: "Crocs Éclair",
			es: "Colmillo Rayo",
			it: "Fulmindenti",
			de: "Donnerzahn",
			'pt-br': "Presa Trovejante",
			ko: "번개엄니"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 마비로 만든다.",
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
		en: "They crawl out of the ocean using their arms. They will attack prey on shore and immediately drag it into the ocean.",
		fr: "Il peut sortir de l'eau à la force de ses bras\npour attaquer des proies sur la rive et les\nentraîner avec lui dans l'eau en un instant.",
		es: "Sale del mar con la fuerza de sus brazos y ataca a sus\npresas en la costa. Luego se las lleva de vuelta al mar.",
		it: "Striscia fuori dal mare con la sola forza\ndei propri arti. Poi attacca la preda a riva\ne con un guizzo la trascina con sé in acqua.",
		de: "Es kriecht mithilfe seiner Arme an Land,\nstürzt sich auf seine Beute und zerrt sie\naugenblicklich ins Meer.",
		'pt-br': "Rastejam para fora do oceano usando seus braços.\nEles atacam as presas na costa e as arrastam\nimediatamente para a água.",
		ko: "팔 힘으로 바다에서 기어 나와\n물가에 있는 먹이를 덮친다.\n한순간에 바다로 끌고 들어간다."
	},

	boosters: ["mewtwo"]
}

export default card
