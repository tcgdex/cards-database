import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Last Chance Potion",
		fr: "Potion de la Dernière Chance",
		es: "Poción Última Oportunidad",
		it: "Pozione Ultima Chance",
		pt: "Poção de Última Hora",
		de: "Letzte-Chance-Trank"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Soignez 120 dégâts à l’un de vos Pokémon auquel il reste 30 PV ou moins.",
		en: "Heal 120 damage from 1 of your Pokémon that has 30 HP or less remaining.",
		es: "Cura 120 puntos de daño a 1 de tus Pokémon a los que le queden 30 PS o menos.",
		it: "Cura da 120 danni uno dei tuoi Pokémon che ha 30 PS o meno rimanenti.",
		pt: "Cure 120 pontos de dano de 1 dos seus Pokémon que tiver PS restante de 30 ou menos.",
		de: "Heile 120 Schadenspunkte bei 1 deiner Pokémon, dessen verbleibende KP 30 oder weniger betragen."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 361373,
		tcgplayer: 170996
	}
}

export default card
