import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [579],
	set: Set,

	name: {
		en: "Reuniclus",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	evolveFrom: {
		en: "Duosion",
		fr: "Méios",
		es: "Duosion",
		it: "Duosion",
		pt: "Duosion",
		de: "Mitodos"
	},
	stage: "Stage2",
	illustrator: "satoma",

	attacks: [
		{
			cost: ["Colorless"],

			name: {
				en: "Cellular Ascension",
			},

			effect: {
				en: "For each of your Benched Pokémon, search your deck for a card that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
			},
		},
		{
			cost: ["Colorless"],

			name: {
				en: "Evo-Lariat",
			},

			effect: {
				en: "This attack foes 40 more damage for each of your Evolution Pokémon in play.",
			},

			damage: "40+"
		}
	],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],

	variants: [
		{
			type: "holo"
		}
	],

	thirdParty: {
		cardmarket: 836658,
		tcgplayer: 647309,
	}
}

export default card
