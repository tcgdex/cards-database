import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Omastar",
		'fr-fr': "Amonistar",
		'es-es': "Omastar",
		'it-it': "Omastar",
		'pt-br': "Omastar",
		'de-de': "Amoroso"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		139,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Omanyte",
		'fr-fr': "Amonita",
		'es-es': "Omanyte",
		'it-it': "Omanyte",
		'pt-br': "Omanyte",
		'de-de': "Amonitas"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Restoring Beam",
				'fr-fr': "Rayon Réparateur",
				'es-es': "Rayo Recreador",
				'it-it': "Raggio Ricreante",
				'pt-br': "Raio Restaurador",
				'de-de': "Erweckungsstrahl"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for a Restored Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher un Pokémon Recréé dans votre deck et le placer sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja un Pokémon Recreado y ponerlo en tu Banca. Baraja las cartas de tu baraja después.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo un Pokémon Ricreato e metterlo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você pode procurar em seu baralho um Pokémon Restaurado e colocá-lo no seu Banco. Em seguida, embaralhe seus cards.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach 1 Erweckt-Pokémon durchsuchen und auf deine Bank legen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
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

			damage: 60,

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
		'en-us': "Once wrapped around its prey, it never lets go. It eats the prey by tearing at it with sharp fangs.",
	},

	thirdParty: {
		cardmarket: 289844,
		tcgplayer: 117780
	}
}

export default card
