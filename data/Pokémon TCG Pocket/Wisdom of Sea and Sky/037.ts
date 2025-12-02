import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Heatmor",
		fr: "Aflamanoir"
	},

	illustrator: "match",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [631],
	hp: 90,
	types: ["Fire"],

	description: {
		en: "There's a hole in its tail that allows it to draw in\nthe air it needs to keep its fire burning. If the\nhole gets blocked, this Pokémon will fall ill.",
		fr: "Il aspire de l'air par le bout de sa queue et produit ainsi sa fameuse langue de feu. Si on lui bouche la queue, il se sent mal."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Roasting Heat",
			fr: "Rôtissoire"
		},

		damage: 30,
		cost: ["Fire", "Fire"],

		effect: {
			en: "If your opponent's Active Pokémon is Burned, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Brûlé, cette attaque inflige 60 dégâts de plus."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh", "lugia"]
}

export default card