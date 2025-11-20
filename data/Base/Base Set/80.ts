import { Card } from '../../../interfaces'
import Set from '../Base Set'
import AsianCard from "../../../data-asia/PMCG/PMCG1/079.ts";

const card: Card = {
	name: {
		en: "Defender",
		fr: "Defender",
		de: "Defender"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez Defender à 1 de vos Pokémon. À la fin du prochain tour de votre adversaire, défaussez Defender. Les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		de: "Lege Defender auf einem Deiner Pokémon ab, und entferne die Karte nach dem nächsten gegenerischen Angriff wieder. Der Deinem Pokémon zugefühgte Schaden wird um 20 Schadenspunkte reduziert (nachdem Schäwche und Resistenz abgerechnet wurden)."
	},

	thirdParty: {
		cardmarket: 273775,
		tcgplayer: 42426
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],

	related: [
		{
			type: "translation",
			card: AsianCard
		}
	]
}

export default card
