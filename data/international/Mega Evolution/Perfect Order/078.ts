import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lumiose Galette",
		'fr-fr': "Galette Illumis",
		'es-es': "Galette Luminalia",
		'es-mx': "Galette Luminalia",
		'de-de': "Illumina-Galette",
		'it-it': "Pan di Lumi",
		'pt-br': "Crepe de Lumiose"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Heal 20 damage and remove a Special Condition from your Active Pokémon.",
		'fr-fr': "Soignez 20 dégâts et retirez un État Spécial de votre Pokémon Actif.",
		'es-es': "Cura 20 puntos de daño y elimina una Condición Especial de tu Pokémon Activo.",
		'es-mx': "Cura 20 puntos de daño y elimina 1 Condición Especial de tu Pokémon Activo.",
		'de-de': "Heile 20 Schadenspunkte und entferne 1 Speziellen Zustand von deinem Aktiven Pokémon.",
		'it-it': "Cura il tuo Pokémon attivo da 20 danni e rimuovi una condizione speciale che lo influenza.",
		'pt-br': "Cure 20 pontos de dano e remova uma Condição Especial do seu Pokémon Ativo."
	},

	trainerType: "Item",
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684389,
				cardmarket: 877495
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684389,
				cardmarket: 877495
			}
		}
	],

}

export default card
