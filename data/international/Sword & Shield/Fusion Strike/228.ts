import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cook",
		'fr-fr': "Cuisinier",
		'es-es': "Chef",
		'it-it': "Cuoco",
		'pt-br': "Chef",
		'de-de': "Küchenchef"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Heal 70 damage from your Active Pokémon.",
		'fr-fr': "Soignez 70 dégâts de votre Pokémon Actif.",
		'es-es': "Cura 70 puntos de daño a tu Pokémon Activo.",
		'it-it': "Cura il tuo Pokémon attivo da 70 danni.",
		'pt-br': "Cure 70 pontos de dano do seu Pokémon Ativo.",
		'de-de': "Heile 70 Schadenspunkte bei deinem Aktiven Pokémon."
	},

	trainerType: "Supporter",
	regulationMark: "E",
	illustrator: "Sanosuke Sakuma",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582964,
				tcgplayer: 253099
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582964,
				tcgplayer: 253099
			}
		},
	],
}

export default card
