import { Card } from "models/database/card"
import Set from "../Shining Revelry"

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

	illustrator: "Miki Tanaka",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [467],
	hp: 120,
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
			'en-us': "Smoke Bomb",
			'fr-fr': "Bombe Fumante",
			'es-es': "Bomba de Humo",
			'it-it': "Bomba Fumogena",
			'de-de': "Rauchbombe",
			'pt-br': "Bomba de Fumaça",
			'ko-kr': "스모크봄"
		},

		damage: 70,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			'en-us': "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d'utiliser une attaque, votre adversaire lance une pièce. Si c'est pile, l'attaque n'est pas lancée.",
			'es-es': "Durante el próximo turno de tu rival, si el Pokémon Defensor intenta usar un ataque, tu rival lanza 1 moneda. Si sale cruz, ese ataque no se lleva a cabo.",
			'it-it': "Durante il prossimo turno del tuo avversario, se il Pokémon difensore prova a usare un attacco, il tuo avversario lancia una moneta. Se esce croce, quell'attacco non avviene.",
			'de-de': "Wenn das Verteidigende Pokémon während des nächsten Zuges deines Gegners versucht, eine Attacke einzusetzen, wirft dein Gegner 1 Münze. Bei Zahl wird jene Attacke nicht ausgeführt.",
			'pt-br': "Durante o próximo turno do seu oponente, se o Pokémon Defensor tentar usar um ataque, seu oponente jogará uma moeda. Se sair coroa, aquele ataque não acontecerá.",
			'ko-kr': "상대의 다음 차례에 이 기술을 받은 포켓몬이 기술을 사용할 때 상대는 동전을 1번 던진다. 뒷면이 나오면 그 기술은 실패한다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3
}

export default card