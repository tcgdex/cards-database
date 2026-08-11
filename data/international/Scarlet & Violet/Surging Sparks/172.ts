import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dragon Elixir",
		'fr-fr': "Élixir de Dragon",
		'es-es': "Elixir Dragón",
		'it-it': "Elisir del Drago",
		'pt-br': "Elixir do Dragão",
		'de-de': "Drachenelixier"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Heal 60 damage from your Active {N} Pokémon.",
		'fr-fr': "Soignez 60 dégâts de votre Pokémon {N} Actif.",
		'es-es': "Cura 60 puntos de daño a tu Pokémon {N} Activo.",
		'it-it': "Cura il tuo Pokémon attivo {N} da 60 danni.",
		'pt-br': "Cure 60 pontos de dano do seu Pokémon {N} Ativo.",
		'de-de': "Heile 60 Schadenspunkte bei deinem Aktiven {N}-Pokémon."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794545,
				tcgplayer: 589920
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794545,
				tcgplayer: 589920
			}
		},
	],

	illustrator: "AYUMI ODASHIMA",

}

export default card
