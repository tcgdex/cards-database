import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [319],
	set: Set,

	name: {
		'en-us': "Sharpedo",
		'fr-fr': "Sharpedo",
		'es-es': "Sharpedo",
		'it-it': "Sharpedo",
		'pt-br': "Sharpedo",
		'de-de': "Tohaido"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Carvanha",
		'fr-fr': "Carvanha",
		'es-es': "Carvanha",
		'it-it': "Carvanha",
		'pt-br': "Carvanha",
		'de-de': "Kanivanha"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Hasuno",

	description: {
		'en-us': "It drinks in seawater and jets it from its rear to propel itself. It's very sensitive to the scent of blood."
	},

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Sharp Fang",
			'fr-fr': "Croc Aiguisé",
			'de-de': "Scharfe Fänge",
			'es-es': "Colmillo Afilado",
			'pt-br': "Presa Afiada",
			'it-it': "Zannaffilata"
		},

		damage: 70
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582791,
				tcgplayer: 253377
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582791,
				tcgplayer: 253377
			}
		},
	],
}

export default card
