import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	dexId: [301],
	set: Set,

	name: {
		en: "Delcatty",
		fr: "Delcatty"
	},

	illustrator: "Midori Harada",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",
	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Skitty",
		fr: "Skitty"
	},

	attacks: [{
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Scratch",
			fr: "Griffe"
		},
		damage: 30
	}, {
		cost: [
			"Colorless",
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Ultra Energy Source",
			fr: "Source d'énergie ultra"
		},
		effect: {
			en: "Does 10 damage times the number of basic Energy cards attached to all of the Active Pokémon (both yours and your opponent’s).",
			fr: "Inflige 10 dégâts multipliés par le nombre de cartes Énergie attachées aux Pokémon Actifs (les vôtres et ceux de votre adversaire)."
		},
		damage: "10×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "2x"
		},
	],

	retreat: 1,

	thirdParty: {
		tcgplayer: 84737
	}
}

export default card
