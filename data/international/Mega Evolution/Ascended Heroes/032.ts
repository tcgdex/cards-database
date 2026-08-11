import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "N's Darumaka",
		'fr-fr': "Darumarond de N",
		'es-es': "Darumaka de N",
		'es-mx': "Darumaka de N",
		'de-de': "Ns Flampion",
		'it-it': "Darumaka di N",
		'pt-br': "Darumaka do N"
	},

	illustrator: "Gemi",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rolling Tackle",
			'fr-fr': "Roulé-Boulé",
			'es-es': "Placaje Giro",
			'es-mx': "Tacleada Rodante",
			'de-de': "Rolltackle",
			'it-it': "Rollazione",
			'pt-br': "Golpe de Colisão Rolante"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement",
			'es-es': "Llama",
			'es-mx': "Llama",
			'de-de': "Flackern",
			'it-it': "Fiammata",
			'pt-br': "Chama"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "This popular symbol of good fortune will never fall over in its sleep, no matter how it’s pushed or pulled.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869643,
			tcgplayer: 675844
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870188,
			tcgplayer: 676878
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870187,
			tcgplayer: 677018
		}
	},
],
}

export default card
