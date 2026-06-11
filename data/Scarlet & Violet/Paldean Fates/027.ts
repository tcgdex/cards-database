import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [280],
	set: Set,

	name: {
		en: "Ralts",
		fr: "Tarsal",
		es: "Ralts",
		it: "Ralts",
		pt: "Ralts",
		de: "Trasla"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Psyshot",
			fr: "Piqûre Psy",
			es: "Disparo Psi",
			it: "Psicosparo",
			pt: "Tiro Psíquico",
			de: "Psychoschuss"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751560,
				tcgplayer: 534173,
				cardtrader: 274211
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751560,
				tcgplayer: 534173,
				cardtrader: 274211
			}
		},
	],

	illustrator: "Tika Matsuno",

	description: {
		en: "The horns on its head provide a strong power that enables it to sense people's emotions.",
	},

}

export default card
