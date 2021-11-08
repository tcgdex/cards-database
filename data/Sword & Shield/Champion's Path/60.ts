import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Pokémon Center Lady",
		fr: "Dame du Centre Pokémon",
		es: "Chica del Centro Pokémon",
		it: "Addetta del Centro Pokémon",
		pt: "Dama do Centro Pokémon",
		de: "Pokémon-Center-Dame"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Heal 60 damage from 1 of your Pokémon, and it recovers from all Special Conditions.",
		fr: "Soignez 60 dégâts de l'un de vos Pokémon, et il guérit de tous les États Spéciaux.",
		es: "Cura 60 puntos de daño a 1 de tus Pokémon, y este se recupera de todas las Condiciones Especiales.",
		it: "Cura uno dei tuoi Pokémon da 60 danni. Quel Pokémon guarisce da tutte le condizioni speciali.",
		pt: "Cure 60 pontos de dano de 1 dos seus Pokémon e aquele Pokémon se recupera de quaisquer Condições Especiais.",
		de: "Heile 60 Schadenspunkte bei 1 deiner Pokémon, und es erholt sich von allen Speziellen Zuständen."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
