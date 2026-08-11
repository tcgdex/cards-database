import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [123],
	set: Set,

	name: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
		'es-es': "Scyther",
		'it-it': "Scyther",
		'pt-br': "Scyther",
		'de-de': "Sichlor"
	},

	illustrator: "GIDORA",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Blinding Scythe",
			'fr-fr': "Pulvérisation Aveuglante",
			'es-es': "Guadaña Cegadora",
			'it-it': "Falceaccecante",
			'pt-br': "Foice Ofuscante",
			'de-de': "Blendende Sense"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "The large, wickedly sharp scythes on its forearms are truly fearsome weapons. Prey's attempts to flee are unfailingly thwarted by this Pokémon's nimble motions.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658491,
				tcgplayer: 272204
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658491,
				tcgplayer: 272204
			}
		},
	],
}

export default card
