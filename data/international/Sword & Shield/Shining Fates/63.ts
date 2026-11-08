import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Bannière de la Team Yell",
		'en-us': "Team Yell Towel",
		'es-es': "Toalla del Team Yell",
		'it-it': "Asciugamano del Team Yell",
		'pt-br': "Toalha da Equipe Yell",
		'de-de': "Tuch von Team Yell"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'fr-fr': "Soignez 50 dégâts des deux Pokémon Actifs.",
		'en-us': "Heal 50 damage from both Active Pokémon.",
		'es-es': "Cura 50 puntos de daño a ambos Pokémon Activos.",
		'it-it': "Cura entrambi i Pokémon attivi da 50 danni.",
		'pt-br': "Cure 50 pontos de dano de ambos os Pokémon Ativos.",
		'de-de': "Heile 50 Schadenspunkte bei beiden Aktiven Pokémon."
	},

	trainerType: "Item",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539338,
				tcgplayer: 232542
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539338,
				tcgplayer: 232542
			}
		},
	],
}

export default card
