import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Magmortar",
		fr: "Maganon",
		es: "Magmortar",
		it: "Magmortar",
		de: "Magbrant",
		'pt-br': "Magmortar",
		ko: "마그마번"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Magmar"
	},

	description: {
		en: "When Magmortar inhales deeply, the fire burning in its belly intensifies, rising in temperature to over 3,600 degrees Fahrenheit.",
		fr: "Quand il inspire profondément, les flammes dans son\nventre gagnent en intensité et atteignent les 2 000 °C.",
		es: "Al respirar profundamente, el fuego del interior de su\nvientre gana intensidad y puede alcanzar los 2000 °C.",
		it: "Quando respira profondamente, le fiamme all'interno del\nsuo ventre aumentano d'intensità, raggiungendo i 2.000 ºC.",
		de: "Holt es tief Luft, werden die Flammen in seinem Bauch\nstärker und erreichen eine Temperatur von 2000 ºC.",
		'pt-br': "Quando Magmortar respira fundo, o fogo na sua barriga\nse intensifica, chegando a atingir temperaturas superiores\na 2.000 ºC.",
		ko: "크게 숨을 들이쉬면 배 안의\n불꽃이 더욱 거세어져서\n섭씨 2000도에 달하게 된다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bursting Inferno",
			fr: "Enfer Explosif",
			es: "Infierno Explosivo",
			it: "Inferno in Fiamme",
			de: "Flammendes Inferno",
			'pt-br': "Inferno em Chamas",
			ko: "버스트 인페르노"
		},

		damage: 100,
		cost: ["Fire", "Fire", "Fire", "Fire"],

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Burned.",
			ko: "상대의 배틀 포켓몬을 화상으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3
}

export default card
