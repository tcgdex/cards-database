import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Froslass",
		fr: "Momartik",
		es: "Froslass",
		it: "Froslass",
		pt: "Froslass",
		de: "Frosdedje"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",
	illustrator: "Studio Bora Inc.",
	dexId: [478],

	evolveFrom: {
		en: "Snorunt",
		fr: "Stalgamin",
		es: "Snorunt",
		it: "Snorunt",
		pt: "Snorunt",
		de: "Schneppke"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Frost Over"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may attach a Water Energy card from your discard pile to 1 of your Pokémon."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Crystal Breath"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack."
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574284
	}
}

export default card
