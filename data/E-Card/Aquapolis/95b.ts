import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "M.Mime",
		de: "Pantimos"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [{
		name: {
			fr: "Barrière d'énergie",
			de: "Energiebarriere"
		},

		effect: {
			fr: "Si M. Mime devait subir les dégâts d'une attaque, réduisez ces dégâts de 10 pour chaque carte Énergie de base attachée à M. Mime. La quantité maximum de dégâts pouvant être réduits par la Barrière d'énergie est 20.",
			de: "Wenn Pantimos durch einen Angriff Schaden zugefügt würde, reduziere diesen Schaden für jede an Pantimos angelegte Basis-Energiekarte um 10. Die höchste Anzahl an Schaden, die durch die Energiebarriere verhindert werden kann, beträgt 20."
		},

		type: "Poke-BODY"
	}],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Mind Shock",
				fr: "Choc mémoriel",
				de: "Verstandesschock"
			},
			effect: {
				en: "Don't apply Weakness and Resistance.",
				fr: "N'appliquez ni la Faiblesse, ni la Résistance.",
				de: "Wende Schwäche und Resistenz nicht an."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275169,
		tcgplayer: 87591
	}
}

export default card
