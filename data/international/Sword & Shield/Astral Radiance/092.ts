import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [215],
	set: Set,

	name: {
		'en-us': "Hisuian Sneasel",
		'fr-fr': "Farfuret de Hisui",
		'es-es': "Sneasel de Hisui",
		'it-it': "Sneasel di Hisui",
		'pt-br': "Sneasel de Hisui",
		'de-de': "Hisui-Sniebel"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'it-it': "Graffio",
			'pt-br': "Arranhão",
			'de-de': "Kratzer"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Claw Slash",
			'fr-fr': "Tranch'Griffe",
			'es-es': "Cuchillada Garra",
			'it-it': "Lacerartiglio",
			'pt-br': "Golpe de Garra",
			'de-de': "Klauenschlitzer"
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
		'en-us': "Its sturdy, curved claws are ideal for traversing precipitous cliffs. From the tips of these claws drips a venom that infiltrates the nerves of any prey caught in Sneasel's grasp.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658720,
				tcgplayer: 272293
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658720,
				tcgplayer: 272293
			}
		},
	],
}

export default card
