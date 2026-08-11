import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [852],
	set: Set,

	name: {
		'en-us': "Clobbopus",
		'fr-fr': "Poulpaf",
		'es-es': "Clobbopus",
		'it-it': "Clobbopus",
		'pt-br': "Clobbopus",
		'de-de': "Klopptopus"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Mizue",

	description: {
		'en-us': "Its tentacles tear off easily, but it isn't alarmed when that happens—it knows they'll grow back. It's about as smart as a three-year-old."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Beat",
			'fr-fr': "Bataille",
			'de-de': "Verprügler",
			'es-es': "Toque",
			'pt-br': "Pulso",
			'it-it': "Battuta"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Knuckle Punch",
			'fr-fr': "Coud'Phalange",
			'de-de': "Knöchelhieb",
			'es-es': "Puño con Nudillos",
			'pt-br': "Soco com Punho",
			'it-it': "Noccapugno"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582780,
				tcgplayer: 253366
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582780,
				tcgplayer: 253366
			}
		},
	],
}

export default card
