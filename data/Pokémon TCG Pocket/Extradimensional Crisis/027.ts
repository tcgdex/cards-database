import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Shiinotic",
		fr: "Lampignon"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Morelull"
	},

	description: {
		en: "Its flickering spores lure in prey and put them to\nsleep. Once this Pokémon has its prey snoozing,\nit drains their vitality with its fingertips.",
		fr: "Il attire ses proies et les endort grâce au clignotement de ses spores. Il aspire ensuite leur énergie vitale du bout de ses doigts."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Illuminate",
			fr: "Luminescence"
		},

		effect: {
			en: "Once during your turn, you may put a random Pokémon from your deck into your hand.",
			fr: "Une fois pendant votre tour, vous pouvez ajouter au hasard un Pokémon de votre deck à votre main."
		}
	}],

	attacks: [{
		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card