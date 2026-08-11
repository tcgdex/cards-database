import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Floatzel",
		fr: "Mustéflott",
		es: "Floatzel",
		it: "Floatzel",
		de: "Bojelin",
		'pt-br': "Floatzel",
		ko: "플로젤"
	},

	illustrator: "Kouki Saitou",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [419],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Buizel"
	},

	description: {
		en: "With its flotation sac inflated, it can carry people on its back. It deflates the sac before it dives.",
		fr: "Il gonfle sa bouée pour permettre aux gens de\nmonter sur son dos et il la dégonfle pour plonger.",
		es: "Con la vejiga natatoria inflada, puede llevar a personas\nsobre su espalda. Antes de bucear, la desinfla.",
		it: "Col galleggiante gonfio, può trasportare delle\npersone sul dorso. Per immergersi lo sgonfia.",
		de: "Mit gefüllter Schwimmblase kann es Menschen\nauf seinem Rücken tragen. Lässt es Luft aus ihr\nheraus, taucht es unter.",
		'pt-br': "Com sua bolsa de flutuação inflada, pode transportar\npessoas nas costas. Esvazia a bolsa antes de mergulhar.",
		ko: "부낭을 부풀리면 사람을\n등에 태울 수 있다.\n부낭을 오그라들게 하여 잠수한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Water Arrow",
			fr: "Flèche d'Eau",
			es: "Flecha de Agua",
			it: "Idrofreccia",
			de: "Wasserpfeil",
			'pt-br': "Flecha d'Água",
			ko: "워터애로"
		},

		cost: ["Water"],

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon.",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival.",
			it: "Questo attacco infligge 30 danni a uno dei Pokémon\ndel tuo avversario.",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente.",
			ko: "상대의 포켓몬 1마리에게 30데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card