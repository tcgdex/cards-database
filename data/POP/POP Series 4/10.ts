import { Card } from '../../../interfaces'
import Set from '../POP Series 4'

const card: Card = {
	name: {
		en: "Scramble Energy",
		fr: "Énergie codée"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "Scramble Energy can be attached only to an Evolved Pokémon (excluding Pokémon-ex). Scramble Energy provides Colorless Energy. While in play, if you have more Prize cards left than your opponent, Scramble Energy provides every type of Energy but provides only 3 in any combination at a time. If the Pokémon Scramble Energy is attached to isn’t an Evolved Pokémon (or evolves into Pokémon-ex), discard Scramble Energy.",
		fr: "Énergie codée ne peut être attachée qu'à un Pokémon Évolué (Pokémon-ex exclus). Énergie codée fournit une Énergie . Lorsqu'elle est en jeu, s'il vous reste plus de cartes Récompense que votre adversaire, Énergie codée fournit tous les types d'Énergie mais seulement 3 de n'importe quelle combinaison à la fois. Si le Pokémon auquel Énergie codée est attachée n'est pas un Pokémon Évolué (ou un Pokémon qui évolue en Pokémon-ex), défaussez-la."
	},

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277475,
		tcgplayer: 88988
	}
}

export default card
