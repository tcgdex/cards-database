import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [661],
	set: Set,

	name: {
		en: "Fletchling",
		fr: "Passerouge",
		es: "Fletchling",
		it: "Fletchling",
		pt: "Fletchling",
		de: "Dartiri"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Peck",
			fr: "Picpic",
			es: "Picotazo",
			it: "Beccata",
			pt: "Bicada",
			de: "Pikser"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "F",


	description: {
		en: "Its melodious cries are actually warnings. Fletchling will mercilessly peck at anything that enters its territory.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682197,
				tcgplayer: 451799
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682197,
				tcgplayer: 451799
			}
		},
	],
}

export default card
