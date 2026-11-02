import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Rillaboom",
		fr: "Gorythmic"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [812],
	hp: 150,
	types: ["Grass"],

	evolveFrom: {
		en: "Thwackey",
		fr: "Badabouin"
	},

	description: {
		en: "The one with the best drumming techniques\nbecomes the boss of the troop. It has a gentle\ndisposition and values harmony among its group."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Captivating Rhythm",
			fr: "Rythme Envoûtant"
		},

		effect: {
			en: "Once during your turn, you may flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			fr: "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c'est face, échangez un des Pokémon de Banc de base de votre adversaire contre son Pokémon Actif."
		}
	}],

	attacks: [{
		name: {
			en: "Drum Rush",
			fr: "Charge Tambour"
		},

		damage: 120,
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-altaria"]
}

export default card