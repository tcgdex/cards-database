import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Sableye",
		fr: "Ténéfix",
		es: "Sableye",
		it: "Sableye",
		de: "Zobiris",
		'pt-br': "Sableye",
		ko: "깜까미"
	},

	illustrator: "Aya Kusube",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		en: "It dwells in the darkness of caves. It uses its sharp claws to dig up gems to nourish itself.",
		fr: "Ce Pokémon vit dans les grottes obscures\net mange des pierres précieuses qu'il\ndéterre à l'aide de ses griffes acérées.",
		es: "Hace su guarida en cuevas oscuras. Usa sus afiladas\ngarras para desenterrar las gemas que se come.",
		it: "Si costruisce la tana in grotte oscure e utilizza gli\nartigli affilati per estrarre le gemme di cui si nutre.",
		de: "Es haust in düsteren Höhlen, wo es mit seinen\nspitzen Klauen Edelsteine ausgräbt und verspeist.",
		'pt-br': "Ele habita a escuridão das cavernas. Ele usa suas garras\nafiadas para cavar pedras preciosas para se alimentar.",
		ko: "어두운 동굴에 거처를 만들고\n예리한 손톱을 써서\n보석을 파내어 먹는다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Corner",
			fr: "Coinçage",
			es: "Arrinconar",
			it: "Trappola",
			de: "Bedrängen",
			'pt-br': "Quina",
			ko: "몰아붙이기"
		},

		damage: 40,
		cost: ["Psychic", "Colorless"],

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			ko: "상대의 다음 차례에 이 기술을 받은 포켓몬은 후퇴할 수 없다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card