import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Metal Energy",
		de: "Dark Metal Energy*"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Lege die Dunkle Metall Energie an eins deiner Pokémon an. Die Dunkle Metall Energie liefert 1 Energie und 1 Energie, solange sie im Spiel ist, liefert aber nur eine Energie auf einmal. (Zählt nicht als Basisenergiekarte und hat außerhalb des Spiels keinen anderen Effekt, als Energie zu liefern.)"
	},

	thirdParty: {
		cardmarket: 276386,
		tcgplayer: 84628
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card

