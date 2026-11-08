import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [114],
	set: Set,

	name: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
		'es-es': "Tangela",
		'it-it': "Tangela",
		'pt-br': "Tangela",
		'de-de': "Tangela"
	},

	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Beat",
			'fr-fr': "Bataille",
			'es-es': "Toque",
			'it-it': "Battuta",
			'pt-br': "Pulso",
			'de-de': "Verprügler"
		},

		damage: 10
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Vine Whip",
			'fr-fr': "Fouet Lianes",
			'es-es': "Látigo Cepa",
			'it-it': "Frustata",
			'pt-br': "Chicote de Vinha",
			'de-de': "Rankenhieb"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon's true appearance remains a mystery.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691721,
				tcgplayer: 478050
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691721,
				tcgplayer: 478050
			}
		},
	],
}

export default card
