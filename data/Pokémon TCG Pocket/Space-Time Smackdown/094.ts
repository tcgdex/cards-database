import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Hippowdon",
		fr: "Hippodocus",
		es: "Hippowdon",
		it: "Hippowdon",
		de: "Hippoterus",
		'pt-br': "Hippowdon",
		ko: "하마돈"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		en: "Hippopotas"
	},

	description: {
		en: "It is surprisingly quick to anger. It holds its mouth agape as a display of its strength.",
		fr: "Ce Pokémon s'énerve facilement. Il ouvre ses mâchoires\nau maximum pour intimider ses adversaires.",
		es: "Mantiene la boca abierta para mostrar su fuerza.\nSe enfada con sorprendente rapidez.",
		it: "Si infuria molto facilmente. Per mostrare\nla sua forza tiene la bocca spalancata.",
		de: "Es wird überraschend schnell wütend. Als Zeichen\nseiner Stärke sperrt es sein Maul auf.",
		'pt-br': "É surpreendentemente rápido deixá-lo irritado.\nEle mantém a boca aberta como sinal de sua força.",
		ko: "의외로 화를 잘 내는 포켓몬으로\n입을 크게 벌려\n주위에 자신의 강함을 어필한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Earthen Press",
			fr: "Pression Tellurique",
			es: "Presión Terrestre",
			it: "Pressa Tellurica",
			de: "Bodenpresse",
			'pt-br': "Pressão Terrestre",
			ko: "그라운드 프레스"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4,
	boosters: ["palkia"]
}

export default card
