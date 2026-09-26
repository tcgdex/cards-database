import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "The vibrating of the bumps all over its body causes earthquake-like tremors. Seismitoad and Croagunk are similar species."
	},

	name: {
		en: "Seismitoad",
		fr: "Crapustule",
		de: "Branawarz",
		es: "Seismitoad",
		it: "Seismitoad",
		'es-mx': "Seismitoad",
		pt: "Seismitoad"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	dexId: [537],
	hp: 160,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [{
		name: {
			en: "Quaking Fist",
			fr: "Poing Secousse",
			de: "Bebende Faust",
			es: "Sismopuño",
			it: "Colpo Tellurico",
			'es-mx': "Puño Sísmico",
			pt: "Punho Estremecedor"
		},

		effect: {
			en: "During your opponent's next turn, whenever they try to use a Trainer card from their hand, they flip a coin. If tails, your opponent discards that Trainer card instead of using it.",
			fr: "Pendant son prochain tour, chaque fois que votre adversaire essaie d'utiliser une carte Dresseur de sa main, cette personne lance une pièce. Si c'est pile, votre adversaire défausse cette carte Dresseur au lieu de l'utiliser.",
			de: "Jedes Mal, wenn dein Gegner während seines nächsten Zuges versucht, eine Trainerkarte aus seiner Hand einzusetzen, wirft er 1 Münze. Bei Zahl legt dein Gegner jene Trainerkarte auf seinen Ablagestapel, anstatt sie einzusetzen.",
			es: "Durante el próximo turno de tu rival, cada vez que intente usar una carta de Entrenador de su mano, este lanza 1 moneda. Si sale cruz, tu rival descarta esa carta de Entrenador en vez de usarla.",
			it: "Durante il suo prossimo turno, ogni volta che prova a usare una carta Allenatore che ha in mano, il tuo avversario lancia una moneta. Se esce croce, il tuo avversario scarta quella carta Allenatore invece di usarla.",
			'es-mx': "Durante el próximo turno de tu rival, cada vez que este intente usar una carta de Entrenador de su mano, tu rival lanza 1 moneda. Si sale cruz, tu rival descarta esa carta de Entrenador en lugar de usarla.",
			pt: "Durante o próximo turno do seu oponente, sempre que ele tentar usar uma carta de Treinador da mão dele, ele jogará uma moeda. Se sair coroa, seu oponente descartará aquela carta de Treinador em vez de usá-la."
		},

		damage: 60,
		cost: ["Fighting"]
	}, {
		name: {
			en: "Mega Punch",
			fr: "Ultimapoing",
			de: "Megahieb",
			es: "Megapuño",
			it: "Megapugno",
			'es-mx': "Megapuño",
			pt: "Megassoco"
		},

		damage: 180,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907691,
				tcgplayer: 716480
			}
		}
	],
}

export default card
