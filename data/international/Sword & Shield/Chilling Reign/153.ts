import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Narcisse",
		'en-us': "Siebold",
		'es-es': "Narciso",
		'it-it': "Narciso",
		'pt-br': "Siebold",
		'de-de': "Narcisse"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'fr-fr': "Choisissez jusqu'à 2 de vos Pokémon Mille Poings, puis soignez 60 dégâts de chacun de ces Pokémon.",
		'en-us': "Choose up to 2 of your Rapid Strike Pokémon and heal 60 damage from each of them.",
		'es-es': "Elige hasta 2 de tus Pokémon Golpe Fluido y cura 60 puntos de daño a cada uno de ellos.",
		'it-it': "Scegli fino a due dei tuoi Pokémon Colpo Rapido e cura ciascuno di essi da 60 danni.",
		'pt-br': "Escolha até 2 dos seus Pokémon Golpe Fluido e cure 60 pontos de dano de cada um deles.",
		'de-de': "Wähle bis zu 2 deiner Fließender-Angriff-Pokémon und heile bei jedem von ihnen 60 Schadenspunkte."
	},

	trainerType: "Supporter",
	regulationMark: "E",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567261,
				tcgplayer: 241861
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567261,
				tcgplayer: 241861
			}
		},
	],
}

export default card
