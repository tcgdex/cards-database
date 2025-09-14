import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Sprout Tower",
		fr: "Tour Chétiflor",
		de: "Sprösslings-Turm"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez cette carte si une autre carte Stade arrive en jeu. Tous les dégâts infligés par des attaques de Pokémon () sont réduits de 30 (après application de la Faiblesse et de la Résistance.)",
		de: "Diese Karte bleibt im Spiel, wenn du sie spielst. Lege diese Karte ab, sobald eine weitere Stadion-karte ins Spiel kommt. Alle Schadenspunkte, die von Angriffen von  Pokémon zugefügt werden, werdenum 30 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
	},

	thirdParty: {
		cardmarket: 274497,
		tcgplayer: 89482
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card
