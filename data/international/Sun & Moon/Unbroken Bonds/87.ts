import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Geodude",
		'fr-fr': "Racaillou",
		'es-es': "Geodude",
		'it-it': "Geodude",
		'pt-br': "Geodude",
		'de-de': "Kleinstein"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		74,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Defense Curl",
				'fr-fr': "Boul’Armure",
				'es-es': "Rizo Defensa",
				'it-it': "Ricciolscudo",
				'pt-br': "Espiral de Defesa",
				'de-de': "Einigler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent’s next turn.",
				'fr-fr': "Lancez une pièce. Si c’est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, evita todo el daño infligido a este Pokémon por ataques durante el próximo turno de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco durante il prossimo turno del tuo avversario.",
				'pt-br': "Jogue 1 moeda. Se sair cara, prevenirá todo o dano causado a este Pokémon por ataques durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wirf 1 Münze. Verhindere bei Kopf allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken zugefügt wird."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rock Throw",
				'fr-fr': "Jet-Pierres",
				'es-es': "Lanzarrocas",
				'it-it': "Sassata",
				'pt-br': "Lançamento de Rocha",
				'de-de': "Steinwurf"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Geodude that have lived a long life have had all their edges smoothed out until they're totally round. They also have a calm, quiet disposition.",
	},

	thirdParty: {
		cardmarket: 372378,
		tcgplayer: 189186
	}
}

export default card
