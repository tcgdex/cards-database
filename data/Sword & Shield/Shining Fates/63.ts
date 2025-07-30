import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Bannière de la Team Yell",
		en: "Team Yell Towel",
		es: "Toalla del Team Yell",
		it: "Asciugamano del Team Yell",
		pt: "Toalha da Equipe Yell",
		de: "Tuch von Team Yell"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		fr: "Soignez 50 dégâts des deux Pokémon Actifs.",
		en: "Heal 50 damage from both Active Pokémon.",
		es: "Cura 50 puntos de daño a ambos Pokémon Activos.",
		it: "Cura entrambi i Pokémon attivi da 50 danni.",
		pt: "Cure 50 pontos de dano de ambos os Pokémon Ativos.",
		de: "Heile 50 Schadenspunkte bei beiden Aktiven Pokémon."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 539338
	}
}

export default card