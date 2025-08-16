import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Charon's Choice",
		fr: "Le choix de Pluton",
		de: "Charons Wahl"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. Lorsque votre tour est terminé, placez cette carte dans votre main au lieu de la défausser.",
		de: "Durchsuche dein Deck nach einer beliebigen Rotom-Karte und tausche sie gegen 1 deiner Rotom im Spiel aus. Alle an Rotom angelegten Karten und Schadensmarken werden auf das neue Pokémon übertragen. (Entferne alle Speziellen Zustände und anderen Effekte von Rotom.) Lege Rotom auf dein Deck. Mische dein Deck danach."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278574
	}
}

export default card
