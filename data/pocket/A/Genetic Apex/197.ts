import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Persian",
		'fr-fr': "Persian",
		'es-es': "Persian",
		'it-it': "Persian",
		'de-de': "Snobilikat",
		'pt-br': "Persian",
		'ko-kr': "페르시온"
	},

	illustrator: "nagimiso",
	category: "Pokemon",

	dexId: [53],
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Meowth"
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Shadow Claw",
			'fr-fr': "Griffe Ombre",
			'es-es': "Garra Umbría",
			'it-it': "Ombrartigli",
			'de-de': "Dunkelklaue",
			'pt-br': "Garra Sombria",
			'ko-kr': "섀도클로"
		},

		effect: {
			'en-us': "Flip a coin. If heads, discard a random card from your opponent's hand.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez au hasard une carte de la main de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 carta aleatoria de la mano de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, scarta una carta a caso dalla mano del tuo avversario.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte 1 carta aleatória da mão do seu oponente.",
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 상대의 패에서 랜덤으로 1장 트래쉬한다."
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		'en-us': "Although its fur has many admirers, it is tough to raise as a pet because of its fickle meanness.",
		'fr-fr': "Sa magnifique fourrure suscite l'admiration, mais il est difficile\nà apprivoiser en raison de son caractère rétif.",
		'es-es': "Aunque es muy admirado por el pelaje,\nes difícil de entrenar como mascota\nporque enseguida suelta arañazos.",
		'it-it': "Molti lo vogliono come Pokémon da compagnia\nper via dello splendido pelo, ma non va preso\nsotto gamba perché graffia facilmente.",
		'de-de': "Aufgrund seines schönen Fells wollen viele ein\nSnobilikat im Haus haben. Es ist jedoch schwer\nerziehbar, da es sehr schnell kratzt.",
		'pt-br': "Apesar de sua pelugem ser admirada por muitos,\né difícil criá-lo como um Pokémon de estimação\npor causa de sua maldade inconstante.",
		'ko-kr': "털의 결이 아름다워 애완용으로\n기르려는 사람이 많지만,\n곧잘 할퀴려 들기 때문에 쉽지 않다."
	},

	boosters: ["charizard"]
}

export default card
