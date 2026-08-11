import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [318],
	set: Set,

	name: {
		'en-us': "Carvanha",
		'fr-fr': "Carvanha",
		'es-es': "Carvanha",
		'it-it': "Carvanha",
		'pt-br': "Carvanha",
		'de-de': "Kanivanha"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague",
			'es-es': "Chapoteo Ondulante",
			'it-it': "Schizzi d'Onda",
			'pt-br': "Onda Borrifante",
			'de-de': "Wellenplatscher"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It won't attack while it's alone—not even if it spots prey. Instead, it waits for other Carvanha to join it, and then the Pokémon attack as a group.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760672,
				tcgplayer: 542786
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760672,
				tcgplayer: 542786
			}
		},
	],

	illustrator: "Souichirou Gunjima",

}

export default card