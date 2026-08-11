import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Fresh Water Set",
		'fr-fr': "Pack d'Eaux Fraîches",
		'es-es': "Lote de Agua Fresca",
		'it-it': "Set di Acqua Fresca",
		'pt-br': "Conjunto de Água Fresca",
		'de-de': "Tafelwasserpack"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Heal 20 damage from each of your Pokémon.",
		'fr-fr': "Soignez 20 dégâts de chacun de vos Pokémon.",
		'es-es': "Cura 20 puntos de daño a cada uno de tus Pokémon.",
		'it-it': "Cura ciascuno dei tuoi Pokémon da 20 danni.",
		'pt-br': "Cure 20 pontos de dano de cada um dos seus Pokémon.",
		'de-de': "Heile 20 Schadenspunkte bei jedem deiner Pokémon."
	},

	trainerType: "Item",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608685,
				tcgplayer: 263861
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608685,
				tcgplayer: 263861
			}
		},
	],
}

export default card
