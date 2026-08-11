import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Boost Energy",
		fr: "Énergie Super",
		de: "Antriebs-Energie"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "Boost Energy can be attached only to an Evolved Pokémon. Discard Boost Energy at the end of the turn it was attached. Boost Energy provides ColorlessColorlessColorless Energy. The Pokémon Boost Energy is attached to can't retreat. If the Pokémon Boost Energy is attached to isn't an Evolved Pokémon, discard Boost Energy.",
		de: "Antriebs-Energie kann nur an ein entwickeltes Pokémon angelegt werden. Lege Antriebs-Energie am Ende des Zuges, in dem sie angelegt wurde, auf deinen Ablagestapel. Antriebs-Energie liefert   -Energie. Das Pokémon, an das Antriebs-Energie angelegt ist, kann sich nicht zurückziehen. Handelt es sich bei dem Pokémon, an das Antriebs-Energie angelegt ist, nicht mehr um ein entwickeltes Pokémon, dann lege Antriebs-Energie auf deinen Ablagestapel.",
		fr: "Énergie Super ne peut être attachée qu'à un Pokémon Évolué. Défaussez Énergie Super à la fin du tour où elle a été attachée. Énergie Super fournit de l'Énergie Incolore Incolore Incolore. Le Pokémon auquel Énergie Super est attachée ne peut pas battre en retraite. Si le Pokémon auquel Énergie Super est attachée n'est pas un Pokémon Évolué, défaussez-la.",
	},

	thirdParty: {
		cardmarket: 277292,
		tcgplayer: 83940
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
