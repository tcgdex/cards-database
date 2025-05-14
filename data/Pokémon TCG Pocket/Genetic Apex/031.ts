import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Skiddo",
		fr: "Cabriolaine",
		es: "Skiddo",
		it: "Skiddo",
		de: "Mähikel",
		'pt-br': "Skiddo",
		ko: "메이클"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise",
			es: "Ataque Sorpresa",
			it: "Attacco a Sorpresa",
			de: "Überraschungsangriff",
			'pt-br': "Ataque Surpresa",
			ko: "허찌르기"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			ko: "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다."
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "Until recently, people living in the mountains would ride on the backs of these Pokémon to traverse the mountain paths.",
		fr: "Il y a encore peu, les personnes vivant dans\nles zones montagneuses se déplaçaient à dos\nde Cabriolaine.",
		es: "Hasta hace bien poco, los habitantes\nde las montañas se desplazaban por sus\nsenderos a lomos de este Pokémon.",
		it: "Fino a poco tempo fa, la gente di montagna era solita\npercorrere i sentieri montani in groppa a degli Skiddo.",
		de: "Bis vor Kurzem ritten die in den Bergen lebenden\nMenschen auf dem Rücken dieses Pokémon, um\nsich auf den Bergpfaden fortzubewegen.",
		'pt-br': "Até pouco tempo, as pessoas vivendo em montanhas\nmontavam nas costas deste Pokémon para atravessá-las.",
		ko: "최근까지도 산악 지대에 사는 사람들은\n메이클의 등에 올라타서\n산길을 이동했다."
	}
}

export default card
