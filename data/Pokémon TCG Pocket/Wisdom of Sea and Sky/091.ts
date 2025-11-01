import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Musharna",
		fr: "Mushana"
	},

	illustrator: "MAHOU",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Munna"
	},

	description: {
		en: "When dark mists emanate from its body, don't\nget too near. If you do, your nightmares will\nbecome reality.",
		fr: "Il est recommandé de ne pas l'approcher quand la fumée qui sort de son front a une teinte noire, sinon son cauchemar risque de se matérialiser."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Dream Dance",
			fr: "Danse-Rêve"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"],

		effect: {
			en: "Both Active Pokémon are now Asleep.",
			fr: "Les deux Pokémon Actifs sont maintenant Endormi."
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