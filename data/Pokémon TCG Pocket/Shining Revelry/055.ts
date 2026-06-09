import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Varoom",
		fr: "Vrombi",
		es: "Varoom",
		it: "Varoom",
		de: "Knattox",
		'pt-br': "Varoom",
		ko: "부르롱"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [965],
	hp: 70,
	types: ["Metal"],

	description: {
		en: "It is said that this Pokémon was born when an unknown poison Pokémon entered and inspirited an engine left at a scrap-processing factory.",
		fr: "On raconte qu'il est né lorsqu'un mystérieux Pokémon Poison\na pris possession d'un moteur laissé à l'abandon dans une casse.",
		es: "Se dice que surgió cuando un misterioso Pokémon venenoso\ntomó posesión de un motor abandonado en un desguace.",
		it: "Pare sia nato quando un misterioso Pokémon\ndi tipo Veleno prese possesso di un motore\nabbandonato in un deposito di rottami.",
		de: "Es soll entstanden sein, als ein unbekanntes\nGift-Pokémon von einem Motor Besitz ergriff,\nder in einer Schrottfabrik zurückgelassen wurde.",
		'pt-br': "Acredita-se que este Pokémon nasceu quando um\nPokémon venenoso desconhecido possuiu um motor\nabandonado em uma fábrica que processa ferro-velho.",
		ko: "고철 처리장에 방치된 엔진에\n정체불명의 독포켓몬이 들어가\n탄생한 것으로 전해지고 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			de: "Kopfnuss",
			'pt-br': "Cabeçada",
			ko: "박치기"
		},

		damage: 10,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card