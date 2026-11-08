import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [86],
	set: Set,

	name: {
		'en-us': "Seel",
		'fr-fr': "Otaria",
		'es-es': "Seel",
		'it-it': "Seel",
		'pt-br': "Seel",
		'de-de': "Jurob"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'de-de': "Kopfnuss"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Rain Splash",
			'fr-fr': "Pluie Éclaboussante",
			'es-es': "Golpe de Lluvia",
			'it-it': "Spruzzapioggia",
			'pt-br': "Chuva Borrifante",
			'de-de': "Regenplatscher"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Thanks to its thick fat, cold seas don't bother it at all, but it gets tired pretty easily in warm waters.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691746,
				tcgplayer: 478128
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691746,
				tcgplayer: 478128
			}
		},
	],
}

export default card
