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
		en: "Attach Defender to 1 of your Pokémon. At the end of your opponent's next turn, discard Defender. Damage done to that Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
		fr: "Attachez Defender à 1 de vos Pokémon. À la fin du prochain tour de votre adversaire, défaussez Defender. Les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		de: "Lege Defender auf einem Deiner Pokémon ab, und entferne die Karte nach dem nächsten gegenerischen Angriff wieder. Der Deinem Pokémon zugefühgte Schaden wird um 20 Schadenspunkte reduziert (nachdem Schäwche und Resistenz abgerechnet wurden).",
		it: "Assegna il Difensore a uno dei tuoi Pokémon. Alla fine del prossimo turno del tuo avversario, scarta il Difensore. I danni inflitti a quel Pokémon dagli attacchi vengono ridotti di 20 (dopo aver applicato Debolezza e Resistenza)."
	},

	variants: [
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		},
		{
			type: "normal",
			subtype: "unlimited"
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273775,
				tcgplayer: 42426
			}
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				cardmarket: 660135
			}
		}
	],
}

export default card
