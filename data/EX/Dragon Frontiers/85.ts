import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

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
		de: "Holon-Energie PE spendet -Energie.\nWenn an dem Pokémon, an dem Holon-Energie PE angelegt ist, auch eine -Basis-Energiekarte angelegt ist, kann dieses Pokémon nicht von Speziellen Zuständen betroffen werden. Wenn an dem Pokémon, an dem Holon-Energie PE angelegt ist, auch eine -Basis-Energiekarte angelegt ist, werden die Schadenspunkte, die diesem Pokémon durch Angriffe gegnerischer Pokémon zugefügt werden, um 10 Schadenspunkte reduziert. Ignoriere diese Effekte, wenn Holon-Energie PE an ein Pokémon-ex angelegt ist.",
		fr: "Si le Pokémon auquel Énergie Holon GL est attachée possède également une carte Énergie de base Plante, il ne peut pas être affecté par des États Spéciaux. Si le Pokémon auquel Énergie Holon GL est attachée possède également une carte Énergie de base Électrique, les dégâts infligés par l'attaque du Pokémon-ex de votre adversaire sont réduits de 10. Ignorez ces effets si Énergie Holon GL est attachée à un Pokémon-ex.",
	},

	thirdParty: {
		cardmarket: 277290,
		tcgplayer: 86139
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
