import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Pokémon Breeder",
		fr: "Éleveur de Pokémon",
		de: "Pokémon-Züchter"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Placez une carte Évolution de Niveau 2 de votre main sur le Pokémon de base correspondant. Vous ne pouvez jouer cette carte que quand il vous serait possible de faire évoluer ce Pokémon de toute façon.",
		de: "Lege eine Evolutionskarte der Phase 2 aus Deiner Hand auf das entsprechende Basis-Pokémon. Du kannst diese Karte jedoch nur spielen, wenn Du dieses Pokémon ohnehin weiterentwickeln darfst."
	},

	thirdParty: {
		cardmarket: 273771
	}
}

export default card
