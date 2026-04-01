import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Lumiose Galette",
		fr: "Galette Illumis",
		es: "Galette Luminalia",
		'es-mx': "Galette Luminalia",
		de: "Illumina-Galette",
		it: "Pan di Lumi",
		pt: "Crepe de Lumiose"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Heal 20 damage and remove a Special Condition from your Active Pokémon.",
		fr: "Soignez 20 dégâts et retirez un État Spécial de votre Pokémon Actif.",
		es: "Cura 20 puntos de daño y elimina una Condición Especial de tu Pokémon Activo.",
		'es-mx': "Cura 20 puntos de daño y elimina 1 Condición Especial de tu Pokémon Activo.",
		de: "Heile 20 Schadenspunkte und entferne 1 Speziellen Zustand von deinem Aktiven Pokémon.",
		it: "Cura il tuo Pokémon attivo da 20 danni e rimuovi una condizione speciale che lo influenza.",
		pt: "Cure 20 pontos de dano e remova uma Condição Especial do seu Pokémon Ativo."
	},

	trainerType: "Item",
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684389,
		cardmarket: 877495
	}
}

export default card