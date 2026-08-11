import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Blissey",
		'fr-fr': "Leuphorie",
		'es-es': "Blissey",
		'it-it': "Blissey",
		'pt-br': "Blissey",
		'de-de': "Heiteira"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		242,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Softboiled",
				'fr-fr': "E-Coque",
				'es-es': "Amortiguador",
				'it-it': "Covauova",
				'pt-br': "Cozidos",
				'de-de': "Weichei"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, heal 30 damage from your Active Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, soignez 30 dégâts à votre Pokémon Actif.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes lanzar una moneda. Si sale cara, cura 30 puntos de daño a tu Pokémon Activo.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi lanciare una moneta. Se esce testa, cura il tuo Pokémon attivo da 30 danni.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você pode jogar uma moeda. Se sair cara, cure 30 de danos do seu Pokémon Ativo.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Münze werfen. Heile bei „Kopf“ 30 Schadenspunkte bei deinem Aktiven Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double-Edge",
				'fr-fr': "Damoclès"
			},
			effect: {
				'en-us': "This Pokémon does 60 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 60 dégâts."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The eggs it lays are filled with happiness. Eating even one bite will bring a smile to anyone.",
	},

	thirdParty: {
		cardmarket: 280410,
		tcgplayer: 83925
	}
}

export default card
