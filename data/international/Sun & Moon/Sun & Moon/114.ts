import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Big Malasada",
		'fr-fr': "Malasada Maxi",
		'es-es': "Malasada Maxi",
		'it-it': "Malasada maxi",
		'pt-br': "Sonho Recheado Grande",
		'de-de': "Maxi-Malasada"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Soignez 20 dégâts et retirez un État Spécial de votre Pokémon Actif.",
		'en-us': "Heal 20 damage and remove a Special Condition from your Active Pokémon.",
		'es-es': "Cura 20 puntos de daño y elimina 1 Condición Especial de tu Pokémon Activo.",
		'it-it': "Cura il tuo Pokémon attivo da 20 danni e rimuovi una condizione speciale che lo influenza.",
		'pt-br': "Cure 20 pontos de dano e remova 1 Condição Especial do seu Pokémon Ativo.",
		'de-de': "Heile 20 Schadenspunkte und entferne 1 Speziellen Zustand von deinem Aktiven Pokémon."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 295427,
		tcgplayer: 126986
	}
}

export default card
