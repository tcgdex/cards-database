import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Musharna",
		'fr-fr': "Mushana"
	},

	illustrator: "MAHOU",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [518],
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Munna"
	},

	description: {
		'en-us': "When dark mists emanate from its body, don't\nget too near. If you do, your nightmares will\nbecome reality.",
		'fr-fr': "Il est recommandé de ne pas l'approcher quand la fumée qui sort de son front a une teinte noire, sinon son cauchemar risque de se matérialiser."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Dream Dance",
			'fr-fr': "Danse-Rêve"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"],

		effect: {
			'en-us': "Both Active Pokémon are now Asleep.",
			'fr-fr': "Les deux Pokémon Actifs sont maintenant Endormi."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["ho-oh", "lugia"]
}

export default card