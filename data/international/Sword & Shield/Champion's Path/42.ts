import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [560],

	name: {
		'en-us': "Scrafty",
		'fr-fr': "Baggaïd",
		'es-es': "Scrafty",
		'it-it': "Scrafty",
		'pt-br': "Scrafty",
		'de-de': "Irokex"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Scraggy",
		'fr-fr': "Baggiguane"
	},

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Corner",
				'fr-fr': "Coinçage",
				'es-es': "Arrinconar",
				'it-it': "Trappola",
				'pt-br': "Quina",
				'de-de': "Bedrängen"
			},
			effect: {
				'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bad Brawl",
				'fr-fr': "Grosse Bagarre",
				'es-es': "Seria Pelea",
				'it-it': "Brutta Rissa",
				'pt-br': "Briga Braba",
				'de-de': "Übles Raufen"
			},
			effect: {
				'en-us': "If you played Piers from your hand during this turn, this attack does 90 more damage.",
				'fr-fr': "Si vous avez joué Peterson de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si has jugado 1 carta de Nerio de tu mano durante este turno, este ataque hace 90 puntos de daño más.",
				'it-it': "Se hai giocato Ginepro dalla tua mano durante questo turno, questo attacco infligge 90 danni in più.",
				'pt-br': "Se você jogou Pietro da sua mão durante este turno, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn du Nezz während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		'en-us': "As halfhearted as this Pokémon's kicks may seem, they pack enough power to shatter Conkeldurr's concrete pillars."
	},

	thirdParty: {
		cardmarket: 500065,
		tcgplayer: 223042
	}
}

export default card
