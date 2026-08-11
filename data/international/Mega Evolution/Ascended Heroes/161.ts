import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Team Rocket's Meowth",
		'fr-fr': "Miaouss de la Team Rocket",
		'es-es': "Meowth del Team Rocket",
		'es-mx': "Meowth del Equipo Rocket",
		'de-de': "Team Rockets Mauzi",
		'it-it': "Meowth del Team Rocket",
		'pt-br': "Meowth da Equipe Rocket"
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
			'en-us': "Paw-cket Pilfer",
			'fr-fr': "Chat-Pardage",
			'es-es': "Hurto Zarpa",
			'es-mx': "Zarpas Ladronas",
			'de-de': "Tatzendieb",
			'it-it': "Sgraffignatore",
			'pt-br': "Pata na Botija"
		},

		effect: {
			'en-us': "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck.",
			'fr-fr': "Choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre cette carte, puis la mélange avec son deck.",
			'es-es': "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
			'es-mx': "Elige 1 carta aleatoria de la mano de tu rival. Tu rival muestra esa carta, la pone en su mazo y las baraja todas.",
			'de-de': "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karte und mischt sie in sein Deck.",
			'it-it': "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
			'pt-br': "Escolha uma carta aleatória da mão do seu oponente. Seu oponente revela aquela carta e a embaralha no baralho dele."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Fury Swipes",
			'fr-fr': "Combo-Griffe",
			'es-es': "Golpes Furia",
			'es-mx': "Garras Furiosas",
			'de-de': "Kratzfurie",
			'it-it': "Sfuriate",
			'pt-br': "Golpes de Fúria"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 20 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			'es-mx': "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 20 pontos de dano para cada cara."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "All it does is sleep during the daytime. At night, it patrols its territory with its eyes aglow.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869772,
			tcgplayer: 675973
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870388,
			tcgplayer: 677118
		}
	},
	{
		type: "reverse",
		foil: "team-rocket",
		thirdParty: {
			cardmarket: 870387,
			tcgplayer: 676978
		}
	},
],
}

export default card
