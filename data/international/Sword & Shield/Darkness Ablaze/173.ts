import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Yell Horn",
		'fr-fr': "Clairon de la Team Yell",
		'es-es': "Trompeta Yell",
		'it-it': "Trombetta Yell",
		'pt-br': "Corneta da Equipe Yell",
		'de-de': "Yell-Tröte"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Both Active Pokémon are now Confused.",
		'fr-fr': "Les deux Pokémon Actifs sont maintenant Confus.",
		'es-es': "Ambos Pokémon Activos pasan a estar Confundidos.",
		'it-it': "Entrambi i Pokémon attivi vengono confusi.",
		'pt-br': "Ambos os Pokémon Ativos agora estão Confusos.",
		'de-de': "Beide Aktiven Pokémon sind jetzt verwirrt."
	},

	trainerType: "Item",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483744,
				tcgplayer: 219290
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483744,
				tcgplayer: 219290
			}
		},
	],
}

export default card
