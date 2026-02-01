import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Meowth",
		fr: "Miaouss de la Team Rocket",
		es: "Meowth del Team Rocket",
		'es-mx': "Meowth del Equipo Rocket",
		de: "Team Rockets Mauzi",
		it: "Meowth del Team Rocket",
		pt: "Meowth da Equipe Rocket"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Paw-cket Pilfer",
			fr: "Chat-Pardage",
			es: "Hurto Zarpa",
			'es-mx': "Zarpas Ladronas",
			de: "Tatzendieb",
			it: "Sgraffignatore",
			pt: "Pata na Botija"
		},

		effect: {
			en: "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck.",
			fr: "Choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre cette carte, puis la mélange avec son deck.",
			es: "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
			'es-mx': "Elige 1 carta aleatoria de la mano de tu rival. Tu rival muestra esa carta, la pone en su mazo y las baraja todas.",
			de: "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karte und mischt sie in sein Deck.",
			it: "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
			pt: "Escolha uma carta aleatória da mão do seu oponente. Seu oponente revela aquela carta e a embaralha no baralho dele."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Fury Swipes",
			fr: "Combo-Griffe",
			es: "Golpes Furia",
			'es-mx': "Garras Furiosas",
			de: "Kratzfurie",
			it: "Sfuriate",
			pt: "Golpes de Fúria"
		},

		effect: {
			en: "Flip 3 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			'es-mx': "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			pt: "Jogue 3 moedas. Este ataque causa 20 pontos de dano para cada cara."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675973,
		cardmarket: 869772
	}
}

export default card