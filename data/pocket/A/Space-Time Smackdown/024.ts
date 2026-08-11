import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Magmortar",
		'fr-fr': "Maganon",
		'es-es': "Magmortar",
		'it-it': "Magmortar",
		'de-de': "Magbrant",
		'pt-br': "Magmortar",
		'ko-kr': "마그마번"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [467],
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Magmar"
	},

	description: {
		'en-us': "When Magmortar inhales deeply, the fire burning in its belly intensifies, rising in temperature to over 3,600 degrees Fahrenheit.",
		'fr-fr': "Quand il inspire profondément, les flammes dans son\nventre gagnent en intensité et atteignent les 2 000 °C.",
		'es-es': "Al respirar profundamente, el fuego del interior de su\nvientre gana intensidad y puede alcanzar los 2000 °C.",
		'it-it': "Quando respira profondamente, le fiamme all'interno del\nsuo ventre aumentano d'intensità, raggiungendo i 2.000 ºC.",
		'de-de': "Holt es tief Luft, werden die Flammen in seinem Bauch\nstärker und erreichen eine Temperatur von 2000 ºC.",
		'pt-br': "Quando Magmortar respira fundo, o fogo na sua barriga\nse intensifica, chegando a atingir temperaturas superiores\na 2.000 ºC.",
		'ko-kr': "크게 숨을 들이쉬면 배 안의\n불꽃이 더욱 거세어져서\n섭씨 2000도에 달하게 된다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Bursting Inferno",
			'fr-fr': "Enfer Explosif",
			'es-es': "Infierno Explosivo",
			'it-it': "Inferno in Fiamme",
			'de-de': "Flammendes Inferno",
			'pt-br': "Inferno em Chamas",
			'ko-kr': "버스트 인페르노"
		},

		damage: 100,
		cost: ["Fire", "Fire", "Fire", "Fire"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			
			'ko-kr': "상대의 배틀 포켓몬을 화상으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["palkia"]
}

export default card
