import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [566],
	set: Set,

	name: {
		'en-us': "Archen",
		'fr-fr': "Arkéapti",
		'es-es': "Archen",
		'it-it': "Archen",
		'pt-br': "Archen",
		'de-de': "Flapteryx"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Unidentified Fossil",
		'fr-fr': "Fossile Inconnu",
		'es-es': "Fósil Desconocido",
		'it-it': "Fossile Sconosciuto",
		'pt-br': "Fóssil Não Identificado",
		'de-de': "Unbekanntes Fossil"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Flap",
			'fr-fr': "Battement",
			'es-es': "Aleteo",
			'it-it': "Alabattito",
			'pt-br': "Asa",
			'de-de': "Flattern"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Claw Slash",
			'fr-fr': "Tranch'Griffe",
			'es-es': "Cuchillada Garra",
			'it-it': "Lacerartiglio",
			'pt-br': "Golpe de Garra",
			'de-de': "Klauenschlitzer"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "This Pokémon was successfully restored from a fossil. As research suggested, Archen is unable to fly. But it's very good at jumping.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682193,
				tcgplayer: 451796
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682193,
				tcgplayer: 451796
			}
		},
	],
}

export default card
