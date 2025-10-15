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
		de: "Holon-Energie PE spendet -Energie.\nWenn an dem Pokémon, an dem Holon-Energie PE angelegt ist, auch eine -Basis-Energiekarte angelegt ist, kann dieses Pokémon nicht von Speziellen Zuständen betroffen werden. Wenn an dem Pokémon, an dem Holon-Energie PE angelegt ist, auch eine -Basis-Energiekarte angelegt ist, werden die Schadenspunkte, die diesem Pokémon durch Angriffe gegnerischer Pokémon zugefügt werden, um 10 Schadenspunkte reduziert. Ignoriere diese Effekte, wenn Holon-Energie PE an ein Pokémon-ex angelegt ist."
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
