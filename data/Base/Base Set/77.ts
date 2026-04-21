import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Pokémon Trader",
		fr: "Marchand de Pokémon",
		de: "Pokémon-Händler",
		it: "Scambio di Pokémon"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Échangez 1 carte Pokémon de base ou Évolution de votre main contre 1 carte Pokémon de base ou Évolution de votre deck. Montrez les deux cartes à votre adversaire. Ensuite, mélangez votre deck.",
		de: "Tausche eines der Basis-Pokémon oder eine der Evolutionskarten in Deiner Hand gegen eines der Basis-Pokémon oder eine Evoltionskarte aus Deinem Stapel. Zeige Deinem Gegner beide Karten. Mische danach Deinen Stapel.",
		it: "Scambia una carta Pokémon Base o una carta Evoluzione che hai in mano con una carta Pokémon Base o una carta Evoluzione nel tuo mazzo. Mostra entrambe le carte al tuo avversario e poi mischia il mazzo.",	
	},

	thirdParty: {
		cardmarket: 273772
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
			cardPath: "data-asia/PMCG/PMCG1/093.ts"
		}
	]
}

export default card
