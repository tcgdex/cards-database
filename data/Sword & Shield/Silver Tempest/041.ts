import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [361],
	set: Set,

	name: {
		en: "Snorunt",
		fr: "Stalgamin",
		es: "Snorunt",
		it: "Snorunt",
		pt: "Snorunt",
		de: "Schneppke"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Collect",
			fr: "Collecte",
			es: "Coleccionar",
			it: "Tassa",
			pt: "Coleta",
			de: "Sammeln"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			pt: "Compre 1 carta.",
			de: "Ziehe 1 Karte."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Icy Snow",
			fr: "Verglas",
			es: "Nieve Helada",
			it: "Geloneve",
			pt: "Neve Congelada",
			de: "Eisiger Schnee"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "It's said that if they are seen at midnight, they'll cause heavy snow. They eat snow and ice to survive.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682086,
				tcgplayer: 451677
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682086,
				tcgplayer: 451677
			}
		},
	],
}

export default card
