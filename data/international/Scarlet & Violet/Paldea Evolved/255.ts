import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Saguaro",
		'en-us': "Saguaro",
		'es-es': "Hugo",
		'it-it': "Guaro",
		'pt-br': "Saguaro",
		'de-de': "Saguaro"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'fr-fr': "Choisissez jusqu'à 2 de vos Pokémon, puis soignez 50 dégâts de chacun d'eux.",
		'en-us': "Choose up to 2 of your Pokémon and heal 50 damage from each of them.",
		'es-es': "Elige hasta 2 de tus Pokémon y cura 50 puntos de daño a cada uno de ellos.",
		'it-it': "Scegli fino a due dei tuoi Pokémon e cura ciascuno di essi da 50 danni.",
		'pt-br': "Escolha até 2 dos seus Pokémon e cure 50 pontos de dano de cada um deles.",
		'de-de': "Wähle bis zu 2 deiner Pokémon und heile 50 Schadenspunkte bei jedem von ihnen."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715730,
				tcgplayer: 497670,
				cardtrader: 248898
			}
		},
	],

	illustrator: "nagimiso",

	
}

export default card
