import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [100],
	set: Set,

	name: {
		fr: "Voltorbe",
		en: "Voltorb",
		es: "Voltorb",
		it: "Voltorb",
		pt: "Voltorb",
		de: "Voltobal"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Boule Éclair",
			en: "Lightning Ball",
			es: "Bola Relámpago",
			it: "Fulminpalla",
			pt: "Bola de Raios",
			de: "Kugelblitz"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Roulade",
			en: "Rollout",
			es: "Rodar",
			it: "Rotolamento",
			pt: "Rolagem",
			de: "Walzer"
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
				cardmarket: 715541,
				tcgplayer: 497477,
				cardtrader: 248681
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715541,
				tcgplayer: 497477,
				cardtrader: 248681
			}
		},
	],

	illustrator: "sui",

	description: {
		en: "It rolls to move. If the ground is uneven, a sudden jolt from hitting a bump can cause it to explode.",
	},
}

export default card
