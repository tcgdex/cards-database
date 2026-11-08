import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [211],
	set: Set,

	name: {
		'en-us': "Hisuian Qwilfish",
		'fr-fr': "Qwilfish de Hisui",
		'es-es': "Qwilfish de Hisui",
		'it-it': "Qwilfish di Hisui",
		'pt-br': "Qwilfish de Hisui",
		'de-de': "Hisui-Baldorfish"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Rolling Tackle",
			'fr-fr': "Roulé-Boulé",
			'es-es': "Placaje Giro",
			'it-it': "Rollazione",
			'pt-br': "Golpe de Colisão Rolante",
			'de-de': "Rolltackle"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Fishers detest this troublesome Pokémon because it sprays poison from its spines, getting it everywhere. A different form of Qwilfish lives in other regions.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658709,
				tcgplayer: 272289
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658709,
				tcgplayer: 272289
			}
		},
	],
}

export default card
