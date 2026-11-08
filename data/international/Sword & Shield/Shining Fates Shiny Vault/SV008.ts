import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [825],
	set: Set,

	name: {
		'fr-fr': "Coléodôme",
		'en-us': "Dottler",
		'es-es': "Dottler",
		'it-it': "Dottler",
		'pt-br': "Dottler",
		'de-de': "Keradar"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	evolveFrom: {
		'fr-fr': "Larvadar",
		'en-us': "Blipbug"
	},

	attacks: [{
		name: {
			'fr-fr': "Protection",
			'en-us': "Reflect",
			'es-es': "Reflejo",
			'it-it': "Riflesso",
			'pt-br': "Refletir",
			'de-de': "Reflektor"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 40 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'en-us': "During your opponent's next turn, this Pokémon takes 40 less damage from attacks (after applying Weakness and Resistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 40 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 40 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 40 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 40 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Collision",
			'en-us': "Ram",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "As it grows inside its shell, it uses its psychic abilities to monitor the outside world and prepare for evolution."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539428,
				tcgplayer: 232353
			}
		},
	],
}

export default card
