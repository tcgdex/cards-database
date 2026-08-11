import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Metapod",
		'fr-fr': "Chrysacier",
		'es-es': "Metapod",
		'it-it': "Metapod",
		'pt-br': "Metapod",
		'de-de': "Safcon"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		11,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Caterpie",
		'fr-fr': "Chenipan",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Iron Defense",
				'fr-fr': "Mur de Fer",
				'es-es': "Defensa Férrea",
				'it-it': "Ferroscudo",
				'pt-br': "Defesa de Ferro",
				'de-de': "Eisenabwehr"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent’s next turn.",
				'fr-fr': "Lancez une pièce. Si c’est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, evita todo el daño infligido a este Pokémon por ataques durante el próximo turno de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, previeni tutti i danni da attacchi inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
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
				'en-us': "Bug Bite",
				'fr-fr': "Piqûre",
				'es-es': "Picadura",
				'it-it': "Coleomorso",
				'pt-br': "Picada",
				'de-de': "Käferbiss"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its shell is filled with its soft innards. It doesn't move much because of the risk it might carelessly spill its innards out.",
	},

	thirdParty: {
		cardmarket: 295307,
		tcgplayer: 126873
	}
}

export default card
