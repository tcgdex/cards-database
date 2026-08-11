import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Wooloo",
		'fr-fr': "Moumouton",
		'es-es': "Wooloo",
		'it-it': "Wooloo",
		'pt-br': "Wooloo",
		'de-de': "Wolly"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Expand",
				'fr-fr': "Développement",
				'es-es': "Expandir",
				'it-it': "Potenzia",
				'pt-br': "Expandir",
				'de-de': "Ausdehnen"
			},
			effect: {
				'en-us': "During your opponent's next turn, this Pokémon takes 10 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 10 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques hacen 10 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 10 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 10 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 10 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "If its fleece grows too long, Wooloo won't be able to move. Cloth made with the wool of this Pokémon is surprisingly strong."
	},

	dexId: [831],

	thirdParty: {
		cardmarket: 436854,
		tcgplayer: 208473
	}
}

export default card
