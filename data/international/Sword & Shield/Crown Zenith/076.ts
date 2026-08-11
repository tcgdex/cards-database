import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [359],
	set: Set,

	name: {
		'en-us': "Absol",
		'fr-fr': "Absol",
		'es-es': "Absol",
		'it-it': "Absol",
		'pt-br': "Absol",
		'de-de': "Absol"
	},

	illustrator: "Shiburingaru",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'it-it': "Lacerazione",
			'pt-br': "Talho",
			'de-de': "Schlitzer"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Lost Claw",
			'fr-fr': "Griffe perdue",
			'es-es': "Garra Perdida",
			'it-it': "Artiglio Perduto",
			'pt-br': "Garra Perdida",
			'de-de': "Nirgendwo-Klaue"
		},

		effect: {
			'en-us': "Put a random card from your opponent's hand in the Lost Zone.",
			'fr-fr': "Placez une carte au hasard de la main de votre adversaire dans la Zone Perdue.",
			'es-es': "Pon 1 carta aleatoria de la mano de tu rival en la Zona Perdida.",
			'it-it': "Prendi una carta a caso dalla mano del tuo avversario e mettila nell'area perduta.",
			'pt-br': "Coloque 1 carta aleatória da mão do seu oponente na Zona Perdida.",
			'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners ins Nirgendwo."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Swift as the wind, Absol races through fields and mountains. Its curved, bow-like horn is acutely sensitive to the warning signs of natural disasters.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691794,
				tcgplayer: 478212
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691794,
				tcgplayer: 478212
			}
		},
	],
}

export default card
