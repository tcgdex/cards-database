import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [598],
	set: Set,

	name: {
		'en-us': "Ferrothorn",
		'fr-fr': "Noacier",
		'es-es': "Ferrothorn",
		'it-it': "Ferrothorn",
		'pt-br': "Ferrothorn",
		'de-de': "Tentantel"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Ferroseed",
		'fr-fr': "Grindur",
		'es-es': "Ferroseed",
		'it-it': "Ferroseed",
		'pt-br': "Ferroseed",
		'de-de': "Kastadur"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante",
			'es-es': "Ataque Giratorio",
			'it-it': "Attacco Rotante",
			'pt-br': "Ataque Giratório",
			'de-de': "Rundumangriff"
		},

		damage: 50
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Whip Smash",
			'fr-fr': "Frappe Fouet",
			'es-es': "Golpe Látigo",
			'it-it': "Frustata Devastante",
			'pt-br': "Chicote Esmagador",
			'de-de': "Peitschenschlag"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "This Pokémon scrapes its spikes across rocks, and then uses the tips of its feelers to absorb the nutrients it finds within the stone.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682169,
				tcgplayer: 451775
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682169,
				tcgplayer: 451775
			}
		},
	],
}

export default card
