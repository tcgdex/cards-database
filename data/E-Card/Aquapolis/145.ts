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
		en: "Boost Energy can be attached only to an Evolved Pokémon. Discard Boost Energy at the end of the turn it was attached. Boost Energy provides ColorlessColorlessColorless Energy. The Pokémon Boost Energy is attached to can't retreat. When the Pokémon Boost Energy is attached to is no longer an Evolved Pokémon, discard Boost Energy.",
		de: "Antriebs-Energie kann nur an ein entwickeltes Pokémon angelegt werden. Lege Antriebs-Energie am Ende des Zuges, in dem sie angelegt wurde, auf deinen Ablagestapel. Antriebs-Energie liefert {C}{C}{C}-Energie. Das Pokémon, an das Antriebs-Energie angelegt ist, kann sich nicht zurückziehen. Ist das Pokémon, an das Antriebs-Energie angelegt ist, nicht länger ein entwickeltes Pokémon, lege Antriebs-Energie auf deinen Ablagestapel.",
		fr: "Énergie super ne peut être attachée qu'à une Évolution de Pokémon. Défaussez -vous d'Énergie super à la fin du tour auquel elle a été attachée. Énergie super fournit Incolore Incolore Incolore. Le Pokémon auquel Énergie super est attachée ne peut pas battre en retraite. Quand le Pokémon auquel Énergie super est attachée n'est plus une Évolution, défaussez-vous d'Énergie super."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83937,
				cardmarket: 275221
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83937,
				cardmarket: 275221
			}
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"],
			thirdParty: {
				tcgplayer: 477369
			}
		}
	]
}

export default card
