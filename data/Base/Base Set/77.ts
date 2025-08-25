import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Pokémon Trader",
		fr: "Marchand de Pokémon",
		de: "Pokémon-Händler"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Échangez 1 carte Pokémon de base ou Évolution de votre main contre 1 carte Pokémon de base ou Évolution de votre deck. Montrez les deux cartes à votre adversaire. Ensuite, mélangez votre deck.",
		de: "Tausche eines der Basis-Pokémon oder eine der Evolutionskarten in Deiner Hand gegen eines der Basis-Pokémon oder eine Evoltionskarte aus Deinem Stapel. Zeige Deinem Gegner beide Karten. Mische danach Deinen Stapel."
	},

	thirdParty: {
		cardmarket: 273772
	}
}

export default card
