import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Defender",
		fr: "Défenseur",
		de: "Defender"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez Défenseur à l’un de vos Pokémon. Défaussez cette carte une fois le prochain tour de votre adversaire terminé. \nTous les dégâts d’attaque infligés par votre adversaire au Pokémon auquel Défenseur est attachée sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		en: "Attach Defender to 1 of your Pokémon. Discard this card at the end of your opponent’s next turn. Any damage done to the Pokémon Defender is attached to by an opponent’s attack is reduced by 20 (after applying Weakness and Resistance).",
		de: "Lege Defender an 1 deiner Pokémon an, Lege diese Karte am Ende des nächsten Zuges deines Gegners auf deinen Ablagestapel. Schaden, der dem Pokémon, an dem Defender angelegt ist, durch einen gegnerischen Angriff zugefügt wird, wird um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz abgerechnet wurden)."
	},

	trainerType: "Item",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0,

	thirdParty: {
		cardmarket: 279325
	}
}

export default card
