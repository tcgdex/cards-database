import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Manectric",
		'fr-fr': "Élecsprint",
		'es-es': "Manectric",
		'it-it': "Manectric",
		'de-de': "Voltenso",
		'pt-br': "Manectric",
		'ko-kr': "썬더볼트"
	},

	illustrator: "match",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [310],
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Electrike"
	},

	description: {
		'en-us': "It stimulates its own muscles with electricity, so it can move quickly. It eases its soreness with electricity, too, so it can recover quickly as well.",
		'fr-fr': "Il diffuse de l'électricité dans ses membres\npour augmenter sa vitesse. C'est également\nainsi qu'il apaise ses douleurs musculaires.",
		'es-es': "La electricidad estimula su musculatura para\nque pueda moverse a gran velocidad y le ayuda\na recuperarse del dolor muscular rápidamente.",
		'it-it': "L'elettricità gli stimola i muscoli rendendolo più\nveloce e inoltre allevia i suoi dolori muscolari\nfacendolo tornare rapidamente in forma.",
		'de-de': "Da es seine Muskeln mit Elektrizität stimuliert,\nkann es sich sehr schnell bewegen.\nAuch Muskelkater heilt es sofort mit Strom.",
		'pt-br': "Estimula eletricamente os próprios músculos para\nmover-se mais rapidamente. Alivia também as suas dores\ncom eletricidade, para se recuperar mais rápido.",
		'ko-kr': "전기로 근육을 자극해서\n재빠르게 움직일 수 있다. 근육통도\n전기로 풀기 때문에 금방 낫는다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Flash",
			'fr-fr': "Flash",
			'es-es': "Destello",
			'it-it': "Flash",
			'de-de': "Blitz",
			'pt-br': "Clarão",
			'ko-kr': "플래시"
		},

		damage: 40,
		cost: ["Lightning"],

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
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
