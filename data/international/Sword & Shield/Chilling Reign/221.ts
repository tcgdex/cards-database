import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Siebold",
		'fr-fr': "Narcisse",
		'es-es': "Narciso",
		'it-it': "Narciso",
		'pt-br': "Siebold",
		'de-de': "Narcisse"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'en-us': "Choose up to 2 of your Rapid Strike Pokémon and heal 60 damage from each of them.",
		'fr-fr': "Choisissez jusqu'à 2 de vos Pokémon Mille Poings, puis soignez 60 dégâts de chacun de ces Pokémon.",
		'es-es': "Elige hasta 2 de tus Pokémon Golpe Fluido y cura 60 puntos de daño a cada uno de ellos.",
		'it-it': "Scegli fino a due dei tuoi Pokémon Colpo Rapido e cura ciascuno di essi da 60 danni.",
		'pt-br': "Escolha até 2 dos seus Pokémon Golpe Fluido e cure 60 pontos de dano de cada um deles.",
		'de-de': "Wähle bis zu 2 deiner Fließender-Angriff-Pokémon und heile bei jedem von ihnen 60 Schadenspunkte."
	},

	trainerType: "Supporter",


	illustrator: "Hideki Ishikawa",
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 567329,
				tcgplayer: 241863
			}
		},
	],
}

export default card
