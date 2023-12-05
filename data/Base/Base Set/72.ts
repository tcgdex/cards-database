import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Devolution Spray",
		fr: "Vaporisateur rétrograde",
		de: "Rückentwicklungs-Spray"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez 1 de vos propres Pokémon en jeu et un Niveau d'évolution. Défaussez toutes les cartes Évolution de ce stade ou supérieur attachée(s) à ce Pokémon. Ce Pokémon n'est plus Endormi, Confus, Paralysé, Empoisonné ou tout autre effet résultant d'une attaque (comme si vous veniez juste de le faire évoluer).",
		de: "Wähle eines Deiner eigenen Pokémon im Spiel und eine Evolutionsphase. Entferne alle Evolutionskarten dieser oder höherer Phasen, die auf diesem Pokémon abgelegt sind. Dieses Pokémon ist nicht mher schlafend, verwirrt, gelähmt, vergiftet oder in sonst einem Zustand, der das Ergebnis eines Angriffs ist (genauso als ob Du es weiterentwickelt hättest)."
	}
}

export default card
