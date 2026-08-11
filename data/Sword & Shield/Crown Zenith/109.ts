import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [143],
	set: Set,

	name: {
		en: "Snorlax",
		fr: "Ronflex",
		es: "Snorlax",
		it: "Snorlax",
		pt: "Snorlax",
		de: "Relaxo"
	},

	illustrator: "Asako Ito",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
			es: "Impacto Pesado",
			it: "Impatto Pesante",
			pt: "Impacto Pesado",
			de: "Schwerer Einschlag"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "E",


	description: {
		en: "This Pokémon's stomach is so strong, even eating moldy or rotten food will not affect it.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691828,
				tcgplayer: 478136
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691828,
				tcgplayer: 478136
			}
		},
	],
}

export default card
