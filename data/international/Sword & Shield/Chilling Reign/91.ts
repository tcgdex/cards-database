import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [852],
	set: Set,

	name: {
		en: "Clobbopus",
		fr: "Poulpaf",
		es: "Clobbopus",
		it: "Clobbopus",
		pt: "Clobbopus",
		de: "Klopptopus"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Beat",
			fr: "Bataille",
			es: "Toque",
			it: "Battuta",
			pt: "Pulso",
			de: "Verprügler"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		en: "Its tentacles tear off easily, but it isn't alarmed when that happens—it knows they'll grow back. It's about as smart as a three-year-old."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567199,
				tcgplayer: 241760
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567199,
				tcgplayer: 241760
			}
		},
	],
}

export default card
