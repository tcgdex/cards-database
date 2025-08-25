import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [560],

	name: {
		en: "Scrafty",
		fr: "Baggaïd",
		es: "Scrafty",
		it: "Scrafty",
		pt: "Scrafty",
		de: "Irokex"
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
		en: "Scraggy",
		fr: "Baggiguane"
	},

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Corner",
				fr: "Coinçage",
				es: "Arrinconar",
				it: "Trappola",
				pt: "Quina",
				de: "Bedrängen"
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
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
				en: "Bad Brawl",
				fr: "Grosse Bagarre",
				es: "Seria Pelea",
				it: "Brutta Rissa",
				pt: "Briga Braba",
				de: "Übles Raufen"
			},
			effect: {
				en: "If you played Piers from your hand during this turn, this attack does 90 more damage.",
				fr: "Si vous avez joué Peterson de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si has jugado 1 carta de Nerio de tu mano durante este turno, este ataque hace 90 puntos de daño más.",
				it: "Se hai giocato Ginepro dalla tua mano durante questo turno, questo attacco infligge 90 danni in più.",
				pt: "Se você jogou Pietro da sua mão durante este turno, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn du Nezz während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
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
		en: "As halfhearted as this Pokémon's kicks may seem, they pack enough power to shatter Conkeldurr's concrete pillars."
	},

	thirdParty: {
		cardmarket: 500065,
		tcgplayer: 223042
	}
}

export default card
