import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Quagsire",
		'fr-fr': "Maraiste",
		'es-es': "Quagsire",
		'it-it': "Quagsire",
		'pt-br': "Quagsire",
		'de-de': "Morlord"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		195,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Wooper",
		'fr-fr': "Axoloto",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Wash Out",
				'fr-fr': "Surlavage",
				'es-es': "Hacer Limpieza",
				'it-it': "Sciacquare",
				'pt-br': "Lavagem",
				'de-de': "Wegspülen"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may move a Water Energy from 1 of your Benched Pokémon to your Active Pokémon.",
				'fr-fr': "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Water de l’un de vos Pokémon de Banc vers votre Pokémon Actif.",
				'es-es': "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover 1 Energía Water de 1 de tus Pokémon en Banca a tu Pokémon Activo.",
				'it-it': "Durante il tuo turno, prima di attaccare, puoi spostare un’Energia Water da uno dei tuoi Pokémon in panchina al tuo Pokémon attivo tutte le volte che vuoi.",
				'pt-br': "Quantas vezes desejar durante a sua vez de jogar (antes de atacar), você pode mover 1 Energia Water de 1 dos seus Pokémon no Banco para o seu Pokémon Ativo.",
				'de-de': "Beliebig oft während deines Zuges (bevor du angreifst) kannst du 1 Water-Energie von 1 Pokémon auf deiner Bank auf dein Aktives Pokémon verschieben."
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
				'en-us': "Hydro Pump",
				'fr-fr': "Hydrocanon",
				'es-es': "Hidrobomba",
				'it-it': "Idropompa",
				'pt-br': "Jato d’Água",
				'de-de': "Hydropumpe"
			},
			effect: {
				'en-us': "This attack does 20 more damage times the amount of Water Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía Water unida a este Pokémon.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia Water ligada a este Pokémon.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten Water-Energien zu."
			},
			damage: "60+",

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
		'en-us': "This carefree Pokémon has an easygoing nature. While swimming, it always bumps into boat hulls.",
	},

	thirdParty: {
		cardmarket: 363498,
		tcgplayer: 175392
	}
}

export default card
