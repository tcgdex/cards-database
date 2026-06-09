import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Holon Energy FF",
		fr: "Énergie Holon FF",
		de: "Holon-Energie FK"
	},

	illustrator: "Takumi Akabane",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "Holon Energy FF provides Colorless Energy. If the Pokémon that Holon Energy FF is attached to also has a basic Fire Energy card attached to it, that Pokémon has no Weakness. If the Pokémon that Holon Energy FF is attached to also has a basic Fighting Energy card attached to it, damage done by that Pokémon's attack isn't affected by Resistance. Ignore these effects if Holon Energy FF is attached to Pokémon-ex.",
		de: "Holon-Energie FK spendet -Energie.\nWenn an dem Pokémon, an dem Holon-Energie FK angelegt ist, auch eine -Basis-Energiekarte angelegt ist, hat dieses Pokémon keine Schwächen. Wenn an dem Pokémon, an dem Holon-Energie FK angelegt ist, auch eine -Basis-Energiekarte angelegt ist, werden die Schadenspunkte, die dieses Pokémon zufügt, nicht von Resistenzen betroffen. Ignoriere diese Effekte, wenn Holon-Energie FK an ein Pokémon-ex angelegt ist.",
		fr: "Si le Pokémon auquel Énergie Holon FF est attachée possède également une carte Énergie de base Feu, il ne possède pas de Faiblesse. Si le Pokémon auquel Énergie Holon FF est attachée possède également une carte Énergie de base Combat, les dégâts infligés par son attaque ne sont pas affectés par la Résistance. Ignorez ces effets si Énergie Holon FF est attachée à un Pokémon-ex.",
	},

	thirdParty: {
		cardmarket: 277289,
		tcgplayer: 86137
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["paul-atanassov"]
		}
	]
}

export default card
