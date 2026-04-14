import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Holon Energy WP",
		fr: "Énergie Holon WP",
		de: "Holon-Energie WP"
	},

	illustrator: "Takumi Akabane",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Holon-Energie WP spendet -Energie.\nWenn an dem Pokémon, an dem Holon-Energie WP angelegt ist, auch eine -Basis-Energiekarte angelegt ist, verhindere alle Effekte, mit der Ausnahme von Schadenspunkten, die diesem Pokémon durch Angriffe von gegnerischen Pokémon zugefügt werden. Wenn an dem Pokémon, an dem Holon-Energie WP angelegt ist, auch eine -Basis-Energiekarte angelegt ist, hat das Pokémon Rückzugskosten 0. Ignoriere diese Effekte, wenn Holon-Energie WP an ein Pokémon-ex angelegt ist.",
		fr: "Si le Pokémon auquel Énergie Holon WP est attachée possède également une carte Énergie de base Eau, prévenez tous les effets, dégâts exclus, qui lui sont infligés par le Pokémon de votre adversaire. Si le Pokémon auquel Énergie Holon WP est attachée possède également une carte Énergie de base Psy, son Coût de retraite est de 0. Ignorez ces effets si Énergie Holon WP est attachée à un Pokémon-ex.",
	},

	thirdParty: {
		cardmarket: 277291,
		tcgplayer: 86141
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
