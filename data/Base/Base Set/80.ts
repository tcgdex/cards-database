import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Defender",
		fr: "Defender",
		de: "Defender",
		it: "Difensore"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez Defender à 1 de vos Pokémon. À la fin du prochain tour de votre adversaire, défaussez Defender. Les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		de: "Lege Defender auf einem Deiner Pokémon ab, und entferne die Karte nach dem nächsten gegenerischen Angriff wieder. Der Deinem Pokémon zugefühgte Schaden wird um 20 Schadenspunkte reduziert (nachdem Schäwche und Resistenz abgerechnet wurden).",
		it: "Assegna il Difensore a uno dei tuoi Pokémon. Alla fine del prossimo turno del tuo avversario, scarta il Difensore. I danni inflitti a quel Pokémon dagli attacchi vengono ridotti di 20 (dopo aver applicato Debolezza e Resistenza)."
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
}

export default card
