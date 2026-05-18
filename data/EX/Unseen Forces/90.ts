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
		en: "Attach Protective Orb to 1 of your Evolved Pokémon (excluding Pokémon-ex) that doesn't already have a Pokémon Tool attached to it. If the Pokémon Protective Orb is attached to is a Basic Pokémon or Pokémon-ex, discard Protective Orb. As long as Protective Orb is attached to a Pokémon, that Pokémon has no Weakness.",
		fr: "Attachez Sphère Protectrice à 1 de vos Pokémon Évolués (Pokémon-ex exclus) qui ne possède pas déjà d'Outil Pokémon. Si le Pokémon auquel Sphère Protectrice est attachée est un Pokémon de base ou un Pokémon-ex, défaussez Sphère Protectrice.\n\nTant que Sphère Protectrice est attachée à un Pokémon, ce Pokémon n'a pas de Faiblesse.",
		de: "As long as Protective Orb is attached to a Pokémon, that Pokémon has no Weakness."
	},

	thirdParty: {
		cardmarket: 276736,
		tcgplayer: 88411
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
