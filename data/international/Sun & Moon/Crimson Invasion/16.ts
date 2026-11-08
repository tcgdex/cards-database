import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Starmie",
		'fr-fr': "Staross",
		'es-es': "Starmie",
		'it-it': "Starmie",
		'pt-br': "Starmie",
		'de-de': "Starmie"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Staryu",
		'fr-fr': "Stari",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Escape",
				'fr-fr': "Évasion",
				'es-es': "Escapada",
				'it-it': "Fuga",
				'pt-br': "Escapar",
				'de-de': "Entkommen"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may shuffle this Pokémon and all cards attached to it into your deck.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez mélanger ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes poner este Pokémon y todas las cartas unidas a él en tu baraja y barajarlas todas.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi rimischiare questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode embaralhar este Pokémon e todas as cartas ligadas a ele no seu baralho.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du dieses Pokémon und alle an es angelegten Karten in dein Deck mischen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spinning Attack",
				'fr-fr': "Attaque Tournante",
				'es-es': "Ataque Giratorio",
				'it-it': "Attacco Rotante",
				'pt-br': "Ataque Giratório",
				'de-de': "Rundumangriff"
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

	retreat: 1,

	description: {
		'en-us': "Its shining core is thought to receive and transmit enigmatic signals. It has been known to cause headaches in those who approach it.",
	},

	thirdParty: {
		cardmarket: 311866,
		tcgplayer: 149037
	}
}

export default card
