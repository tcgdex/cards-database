import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [194],
	set: Set,

	name: {
		fr: "Axoloto de Paldea",
		en: "Paldean Wooper",
		es: "Wooper de Paldea",
		it: "Wooper di Paldea",
		pt: "Wooper de Paldea",
		de: "Paldea-Felino"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Ruée",
			en: "Stampede",
			es: "Estampida",
			it: "Fuggi Fuggi",
			pt: "Estouro",
			de: "Zertrampeln"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			fr: "Coup de Pied de Garnement",
			en: "Playful Kick",
			es: "Patada Juguetona",
			it: "Calcio Briccone",
			pt: "Chute Brincalhão",
			de: "Verspielter Kick"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715604,
				tcgplayer: 497586,
				cardtrader: 248778
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715604,
				tcgplayer: 497586,
				cardtrader: 248778
			}
		},
	],

	illustrator: "Saya Tsuruta",

	description: {
		en: "After losing a territorial struggle, Wooper began living on land. The Pokémon changed over time, developing a poisonous film to protect its body.",
	},
}

export default card
