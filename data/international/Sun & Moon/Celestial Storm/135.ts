import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Last Chance Potion",
		'fr-fr': "Potion de la Dernière Chance",
		'es-es': "Poción Última Oportunidad",
		'it-it': "Pozione Ultima Chance",
		'pt-br': "Poção de Última Hora",
		'de-de': "Letzte-Chance-Trank"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Soignez 120 dégâts à l’un de vos Pokémon auquel il reste 30 PV ou moins.",
		'en-us': "Heal 120 damage from 1 of your Pokémon that has 30 HP or less remaining.",
		'es-es': "Cura 120 puntos de daño a 1 de tus Pokémon a los que le queden 30 PS o menos.",
		'it-it': "Cura da 120 danni uno dei tuoi Pokémon che ha 30 PS o meno rimanenti.",
		'pt-br': "Cure 120 pontos de dano de 1 dos seus Pokémon que tiver PS restante de 30 ou menos.",
		'de-de': "Heile 120 Schadenspunkte bei 1 deiner Pokémon, dessen verbleibende KP 30 oder weniger betragen."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 361373,
		tcgplayer: 170996
	}
}

export default card
