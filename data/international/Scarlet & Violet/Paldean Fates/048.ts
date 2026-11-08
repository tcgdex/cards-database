import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [231],
	set: Set,

	name: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy",
		'es-es': "Phanpy",
		'it-it': "Phanpy",
		'pt-br': "Phanpy",
		'de-de': "Phanpy"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Strength",
			'fr-fr': "Force",
			'es-es': "Fuerza",
			'it-it': "Forza",
			'pt-br': "Força",
			'de-de': "Stärke"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Rolling Tackle",
			'fr-fr': "Roulé-Boulé",
			'es-es': "Placaje Giro",
			'it-it': "Rollazione",
			'pt-br': "Golpe de Colisão Rolante",
			'de-de': "Rolltackle"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751585,
				tcgplayer: 534198,
				cardtrader: 274232
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751585,
				tcgplayer: 534198,
				cardtrader: 274232
			}
		},
	],

	illustrator: "Atsuko Nishida",

	description: {
		'en-us': "This Pokémon lives and nests on a riverbank. After playing in the mud, it won't be able to settle down unless it washes its body.",
	},

}

export default card
