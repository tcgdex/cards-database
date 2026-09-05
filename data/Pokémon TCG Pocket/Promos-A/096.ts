import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Houndoom",
		de: "Hundemon"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [229],
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Houndour",
		de: "Hunduster"
	},

	description: {
		en: "If you are burned by the flames it shoots from its\nmouth, the pain will never go away.",
		de: "Wird man von den Flammen getroffen, die es aus seinem Maul schießt, so erleidet man eine Brandwunde, deren Schmerz nie nachlässt."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Diving Swipe",
			de: "Sturzklau"
		},

		damage: 70,
		cost: ["Darkness", "Darkness", "Darkness"],

		effect: {
			en: "Discard a random card from your opponent's hand.",
			de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card