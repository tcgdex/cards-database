import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [853],
	set: Set,

	name: {
		'en-us': "Grapploct",
		'fr-fr': "Krakos",
		'es-es': "Grapploct",
		'it-it': "Grapploct",
		'pt-br': "Grapploct",
		'de-de': "Kaocto"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Clobbopus",
		'fr-fr': "Poulpaf",
		'es-es': "Clobbopus",
		'it-it': "Clobbopus",
		'pt-br': "Clobbopus",
		'de-de': "Klopptopus"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Souichirou Gunjima",

	description: {
		'en-us': "Searching for an opponent to test its skills against, it emerges onto land. Once the battle is over, it returns to the sea."
	},

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Lunge Out",
			'fr-fr': "Allonger",
			'de-de': "Sprungangriff",
			'es-es': "Arremeter",
			'pt-br': "Bote",
			'it-it': "Affondo Lungo"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Magnum Punch",
			'fr-fr': "Poing Magnum",
			'de-de': "Magnum-Schlag",
			'es-es': "Puño Magnum",
			'pt-br': "Soco Magnum",
			'it-it': "Superpugno"
		},

		damage: 90
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582781,
				tcgplayer: 253367
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582781,
				tcgplayer: 253367
			}
		},
	],
}

export default card
