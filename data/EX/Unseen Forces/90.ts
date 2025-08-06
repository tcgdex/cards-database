import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Protective Orb",
		fr: "Sphère Protectrice",
		de: "Schützende Kugel"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Sphère Protectrice à 1 de vos Pokémon Évolués (Pokémon-ex exclus) qui ne possède pas déjà d'Outil Pokémon. Si le Pokémon auquel Sphère Protectrice est attachée est un Pokémon de base ou un Pokémon-ex, défaussez Sphère Protectrice.\n\nTant que Sphère Protectrice est attachée à un Pokémon, ce Pokémon n'a pas de Faiblesse.",
		de: "As long as Protective Orb is attached to a Pokémon, that Pokémon has no Weakness."
	},

	thirdParty: {
		cardmarket: 276736,
		tcgplayer: 88411
	}
}

export default card
