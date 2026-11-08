import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Arven's Sandwich",
		'fr-fr': "Sandwich de Pepper",
		'de-de': "Peppers Sandwich",
		'it-it': "Panino di Pepe",
		'es-es': "Bocadillo de Damián",
		'pt-br': "Sanduíche do Arven",
		'es-mx': "Sándwich de Damián"
	},


	illustrator: "AYUMI ODASHIMA",

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Heal 30 damage from your Active Pokémon. If that Pokémon is an Arven's Pokémon, heal 100 damage from it instead.",
		'fr-fr': "Soignez 30 dégâts de votre Pokémon Actif. Si ce Pokémon est un Pokémon de Pepper, soignez-le de 100 dégâts à la place.",
		'de-de': "Heile 30 Schadenspunkte bei deinem Aktiven Pokémon. Wenn jenes Pokémon ein Peppers Pokémon ist, heile bei ihm stattdessen 100 Schadenspunkte.",
		'it-it': "Cura il tuo Pokémon attivo da 30 danni. Se quel Pokémon è un Pokémon di Pepe, invece curalo da 100 danni.",
		'es-es': "Cura 30 puntos de daño a tu Pokémon Activo. Si ese Pokémon es un Pokémon de Damián, cúrale 100 puntos de daño en vez de 30.",
		'pt-br': "Cure 30 pontos de dano do seu Pokémon Ativo. Se aquele Pokémon for um Pokémon do Arven, cure 100 pontos de dano dele ao invés de 30.",
		'es-mx': "Cura 30 puntos de daño a tu Pokémon Activo. Si ese Pokémon es un Pokémon de Damián, cúrale 100 puntos de daño en lugar de 30."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826035,
				tcgplayer: 632963
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826035,
				tcgplayer: 632963
			}
		},
	],
}

export default card
