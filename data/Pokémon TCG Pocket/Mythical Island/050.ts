import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Weezing",
		fr: "Smogogo",
		es: "Weezing",
		it: "Weezing",
		de: "Smogmog",
		'pt-br': "Weezing",
		ko: "또도가스"
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Koffing"
	},

	description: {
		en: "If one of the twin Koffing inflates, the other one deflates. It constantly mixes its poisonous gases.",
		fr: "Si l'un des deux Smogo se gonfle, l'autre se dégonfle.\nIls mélangent leurs gaz en permanence.",
		es: "Si uno de los gemelos Koffing se\ninfla, el otro se desinfla. Mezclan\nconstantemente sus venenosos gases.",
		it: "Se un gemello Koffing si sgonfia, l'altro si gonfia.\nI gas velenosi dei due si mischiano continuamente.",
		de: "Pumpt sich eines der zwei Smogon auf, lässt das\nandere Luft ab. So findet ein Giftgasaustausch statt.",
		'pt-br': "Se um dos gêmeos Koffing inflar, o outro\nesvazia, misturando constantemente\nseus gases venenosos.",
		ko: "한쪽이 부풀어 오르면 다른 한쪽은\n오그라드는 쌍둥이 또가스. 항상\n체내의 독가스를 섞고 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Smokescreen",
			fr: "Brouillard",
			es: "Pantalla de Humo",
			it: "Muro di Fumo",
			de: "Rauchwolke",
			'pt-br': "Cortina de Fumaça",
			ko: "연막"
		},

		damage: 50,
		cost: ["Darkness", "Darkness"],

		effect: {
			en: "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen.",
			fr: "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d'utiliser une attaque, votre adversaire lance une pièce. Si c'est pile, l'attaque n'est pas lancée.",
			es: "Durante el próximo turno de tu rival, si el Pokémon Defensor intenta usar un ataque, tu rival lanza 1 moneda. Si sale cruz, ese ataque no se lleva a cabo.",
			it: "Durante il prossimo turno del tuo avversario, se il Pokémon difensore prova a usare un attacco, il tuo avversario lancia una moneta. Se esce croce, quell'attacco non avviene.",
			de: "Wenn das Verteidigende Pokémon während des nächsten Zuges deines Gegners versucht, eine Attacke einzusetzen, wirft dein Gegner 1 Münze. Bei Zahl wird jene Attacke nicht ausgeführt.",
			'pt-br': "Durante o próximo turno do seu oponente, se o Pokémon Defensor tentar usar um ataque, seu oponente jogará uma moeda. Se sair coroa, aquele ataque não acontecerá.",
			ko: "상대의 다음 차례에 이 기술을 받은 포켓몬이 기술을 사용할 때 상대는 동전을 1번 던진다. 뒷면이 나오면 그 기술은 실패한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Diamond"
}

export default card
