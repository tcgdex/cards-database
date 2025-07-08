import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Arven's Sandwich",
		fr: "Sandwich de Pepper",
		de: "Peppers Sandwich",
		it: "Panino di Pepe",
		es: "Bocadillo de Damián",
		pt: "Sanduíche do Arven",
		'es-mx': "Sándwich de Damián"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Heal 30 damage from your Active Pokémon. If that Pokémon is an Arven's Pokémon, heal 100 damage from it instead.",
		fr: "Soignez 30 dégâts de votre Pokémon Actif. Si ce Pokémon est un Pokémon de Pepper, soignez-le de 100 dégâts à la place.",
		de: "Heile 30 Schadenspunkte bei deinem Aktiven Pokémon. Wenn jenes Pokémon ein Peppers Pokémon ist, heile bei ihm stattdessen 100 Schadenspunkte.",
		it: "Cura il tuo Pokémon attivo da 30 danni. Se quel Pokémon è un Pokémon di Pepe, invece curalo da 100 danni.",
		es: "Cura 30 puntos de daño a tu Pokémon Activo. Si ese Pokémon es un Pokémon de Damián, cúrale 100 puntos de daño en vez de 30.",
		pt: "Cure 30 pontos de dano do seu Pokémon Ativo. Se aquele Pokémon for um Pokémon do Arven, cure 100 pontos de dano dele ao invés de 30.",
		'es-mx': "Cura 30 puntos de daño a tu Pokémon Activo. Si ese Pokémon es un Pokémon de Damián, cúrale 100 puntos de daño en lugar de 30."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
