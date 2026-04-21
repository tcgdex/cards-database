import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Boost Energy",
		fr: "Énergie super",
		de: "Boost Energy*"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Boost Energy can be attached only to an Evolved Pokémon. Discard Boost Energy at the end of the turn it was attached.\nBoost Energy provides  Energy. The Pokémon Boost Energy is attached to can't retreat.\nWhen the Pokémon Boost Energy is attached to is no longer an Evolved Pokémon, discard Boost Energy.",
		fr: "Énergie super ne peut être attachée qu'à une Évolution de Pokémon. Défaussez -vous d'Énergie super à la fin du tour auquel elle a été attachée. Énergie super fournit Incolore Incolore Incolore. Le Pokémon auquel Énergie super est attachée ne peut pas battre en retraite. Quand le Pokémon auquel Énergie super est attachée n'est plus une Évolution, défaussez-vous d'Énergie super.",
	},

	thirdParty: {
		cardmarket: 275221,
		tcgplayer: 83937
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"]
		}
	]
}

export default card
