import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Solid Rage",
		fr: "Fureur Compacte",
		de: "Massive Wut"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		en: "Attach Solid Rage to 1 of your Evolved Pokémon (excluding Pokémon-ex) that doesn't already have a Pokémon Tool attached to it. If the Pokémon Solid Rage is attached to is a Basic Pokémon or Pokémon-ex, discard Solid Rage. If you have more Prize cards left than your opponent, the Pokémon that Solid Rage is attached to does 20 more damage to the Active Pokémon (before applying Weakness and Resistance).",
		fr: "Attachez Fureur Compacte à 1 de vos Pokémon Évolués (Pokémon-ex exclus) qui ne possède pas déjà d'Outil Pokémon. Si le Pokémon auquel Fureur Compacte est attachée est un Pokémon de base ou un Pokémon-ex, défaussez Fureur Compacte.\n\nS'il vous reste plus de cartes Récompense que votre adversaire, le Pokémon auquel Fureur Compacte est attachée inflige 20 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
		de: "If you have more Prize Cards left than your opponent, the Pokémon that Solid Rage is attached to does 20 more damage to the Active Pokémon (before applying Weakness and Resistance)."
	},

	thirdParty: {
		cardmarket: 276738,
		tcgplayer: 89419
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
