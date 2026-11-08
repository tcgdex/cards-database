import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Drifblim",
		'fr-fr': "Grodrive",
		'es-es': "Drifblim",
		'it-it': "Drifblim",
		'pt-br': "Drifblim",
		'de-de': "Drifzepeli"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		426,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Drifloon",
		'fr-fr': "Baudrive",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Tag Transport",
				'fr-fr': "Porte-Escouade",
				'es-es': "Transporte Relevo",
				'it-it': "Trasporto Alleato",
				'pt-br': "Transporte de Aliados",
				'de-de': "Team-Transport"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may switch your Active TAG TEAM Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger votre Pokémon ESCOUADE Actif avec l’un de vos Pokémon de Banc.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes cambiar tu Pokémon de equipo de RELEVOS Activo por 1 de tus Pokémon en Banca.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scambiare il tuo Pokémon ALLEATI attivo con uno dei tuoi Pokémon in panchina.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode trocar o seu Pokémon ALIADOS Ativo por 1 dos seus Pokémon no Banco.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du dein Aktives TAG TEAM Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
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
				'en-us': "Spinning Attack",
				'fr-fr': "Attaque Tournante",
				'es-es': "Ataque Giratorio",
				'it-it': "Attacco Rotante",
				'pt-br': "Ataque Giratório",
				'de-de': "Rundumangriff"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "There's a rumor that if you catch a Drifblim floating on the wind at dusk, you'll be carried away to the afterlife.",
	},

	thirdParty: {
		cardmarket: 388212,
		tcgplayer: 195011
	}
}

export default card
