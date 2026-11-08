import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Slowbro EX",
		'fr-fr': "Flagadoss EX",
		'es-es': "Slowbro EX",
		'it-it': "Slowbro EX",
		'pt-br': "Slowbro EX",
		'de-de': "Lahmus EX"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		80,
	],

	hp: 180,

	types: [
		"Water",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slack Off",
				'fr-fr': "Paresse",
				'es-es': "Relajo",
				'it-it': "Pigro",
				'pt-br': "Relaxar",
				'de-de': "Tagedieb"
			},
			effect: {
				'en-us': "Heal 60 damage from this Pokémon. This Pokémon can't attack during your next turn.",
				'fr-fr': "Soignez 60 dégâts à ce Pokémon. Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				'es-es': "Cura 60 puntos de daño a este Pokémon. Este Pokémon no puede atacar durante tu próximo turno.",
				'it-it': "Cura questo Pokémon da 60 danni. Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				'pt-br': "Cure 60 de danos deste Pokémon. Este Pokémon não poderá atacar durante sua próxima vez de jogar.",
				'de-de': "Heile 60 Schadenspunkte bei diesem Pokémon. Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Flash Splash",
				'fr-fr': "Éclaboussure Éclair",
				'es-es': "Salpicadura Resplandor",
				'it-it': "Splash Luminoso",
				'pt-br': "Borrifada Rápida",
				'de-de': "Blitzartiger Platscher"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic",

	thirdParty: {
		cardmarket: 293383,
		tcgplayer: 124039
	}
}

export default card
