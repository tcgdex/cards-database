import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Holon Energy GL",
		fr: "Énergie Holon GL",
		de: "Holon-Energie PE"
	},

	illustrator: "Takumi Akabane",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Holon Energy GL provides  Energy. If the Pokémon that Holon Energy GL is attached to also has a basic  Energy card attached to it, that Pokémon can't be affected by any Special Conditions. If the Pokémon that Holon Energy GL is attached to also has a basic  Energy card attached to it, damage done by your opponent's Pokémon-ex is reduced by 10. Ignore these effects if Holon Energy GL is attached to Pokémon-ex.",
		fr: "Si le Pokémon auquel Énergie Holon GL est attachée possède également une carte Énergie de base Plante, il ne peut pas être affecté par des États Spéciaux. Si le Pokémon auquel Énergie Holon GL est attachée possède également une carte Énergie de base Électrique, les dégâts infligés par l'attaque du Pokémon-ex de votre adversaire sont réduits de 10. Ignorez ces effets si Énergie Holon GL est attachée à un Pokémon-ex.",
	},

	thirdParty: {
		cardmarket: 276868,
		tcgplayer: 86138
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

