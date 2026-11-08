import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Porygon-Z",
		'fr-fr': "Porygon-Z",
		'es-es': "Porygon-Z",
		'it-it': "Porygon-Z",
		'pt-br': "Porygon-Z",
		'de-de': "Porygon-Z"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		474,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon2",
		'es-es': "Porygon2",
		'it-it': "Porygon2",
		'pt-br': "Porygon2",
		'de-de': "Porygon2"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Cyber Crush",
				'fr-fr': "Cyber Broyage",
				'es-es': "Cibercolisión",
				'it-it': "Schianto Cibernetico",
				'pt-br': "Ciberesmagamento",
				'de-de': "Cyberschlag"
			},
			effect: {
				'en-us': "Discard all Special Energy attached to each of your opponent's Pokémon.",
				'fr-fr': "Défaussez toutes les Énergies spéciales attachées à chacun des Pokémon de votre adversaire.",
				'es-es': "Descarta todas las Energías Especiales unidas a cada uno de los Pokémon de tu rival.",
				'it-it': "Scarta tutte le Energie speciali assegnate a ciascuno dei Pokémon del tuo avversario.",
				'pt-br': "Descarte todas as Energias Especiais ligada a cada um dos Pokémon do seu oponente.",
				'de-de': "Lege alle Spezial-Energie, die an jedes gegnerische Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slowing Beam",
				'fr-fr': "Rayon Ralentissant",
				'es-es': "Rayo Desacelerador",
				'it-it': "Frenoraggio",
				'pt-br': "Raio Desacelerador",
				'de-de': "Bremsender Strahl"
			},
			effect: {
				'en-us': "During your opponent's next turn, the Defending Pokémon's attacks cost Colorless more.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur coûtent Colorless de plus.",
				'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor cuestan Colorless más.",
				'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore costano Colorless in più.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, os ataques do Pokémon Defensor custam mais Colorless.",
				'de-de': "Während des nächsten Zuges deines Gegners erhöhen sich die Angriffskosten des Verteidigenden Pokémon um Colorless."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its programming was modified to enable it to travel through alien dimensions. Seems there might have been an error…",
	},

	thirdParty: {
		cardmarket: 284247,
		tcgplayer: 101488
	}
}

export default card
