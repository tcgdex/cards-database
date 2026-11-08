import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Butte du Dynarbre",
		'en-us': "Dyna Tree Hill",
		'es-es': "Colina del Maxiárbol",
		'it-it': "Collina Dynalbero",
		'pt-br': "Colina Dinárvore",
		'de-de': "Hügel des Dyna-Baums"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'fr-fr': "Les Pokémon (les vôtres et ceux de votre adversaire) ne peuvent pas être soignés.",
		'en-us': "Pokémon (both yours and your opponent's) can't be healed.",
		'es-es': "Los Pokémon (tanto tuyos como de tu rival) no pueden ser curados.",
		'it-it': "I Pokémon, sia tuoi che del tuo avversario, non possono essere curati.",
		'pt-br': "Os Pokémon (seus e do seu oponente) não podem ser curados.",
		'de-de': "Pokémon (deine und die deines Gegners) können nicht geheilt werden."
	},

	trainerType: "Stadium",
	regulationMark: "E",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567242,
				tcgplayer: 241827
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567242,
				tcgplayer: 241827
			}
		},
	],
}

export default card
