import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [669],
	set: Set,

	name: {
		en: "Flabébé",
		fr: "Flabébé",
		es: "Flabébé",
		it: "Flabébé",
		pt: "Flabébé",
		de: "Flabébé"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Pollen Shot",
			fr: "Tir Pollen",
			es: "Lanzamiento de Polen",
			it: "Colpo Pollinare",
			pt: "Arremesso de Pólen",
			de: "Pollenschuss"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Mizue",

	description: {
		en: "This Flabébé rides a red flower. Immediately after birth, this Pokémon begins flying around in search of a flower it likes.",
	},

	thirdParty: {
        cardmarket: 702387,
        tcgplayer: 487958
    }
}

export default card