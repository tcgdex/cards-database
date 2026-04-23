import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Scramble Energy",
		fr: "Énergie codée",
		de: "Misch-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Scramble Energy can be attached only to an Evolved Pokémon (excluding Pokémon-ex). Scramble Energy provides  Energy. While in play, if you have more Prize cards left than your opponent, Scramble Energy provides every type of Energy but provide only 3 in any combination at a time. If the Pokémon Scramble Energy is attached to isn't an Evolved Pokémon (or evolves into Pokémon-ex). discard Scramble Energy.",
		fr: "Énergie codée ne peut être attachée qu'à un Pokémon Évolué (Pokémon-ex exclus). Énergie codée fournit une Énergie Incolore. Lorsqu'elle est en jeu, s'il vous reste plus de cartes Récompenses que votre adversaire, Énergie codée fournit tous les types d'Énergie mais seulement 3 de n'importe quelle combinaison à la fois. Si le Pokémon auquel Énergie codée est attachée n'est pas un Pokémon Évolué (ou un Pokémon qui évolue en Pokémon-ex), défaussez -la.",
	},

	thirdParty: {
		tcgplayer: 88987,
		cardmarket: 276498
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"]
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"]
		},
	]
}

export default card
