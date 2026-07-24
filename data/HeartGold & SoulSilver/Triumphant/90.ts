import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Rescue Energy",
		fr: "Énergie Rescousse",
		de: "Berge-Energie"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		fr: "Énergie Rescousse fournit de l’Énergie Colorless. Si le Pokémon auquel est attachée cette carte est mis K.O. par une attaque, récupérez ce Pokémon dans votre main. (Défaussez toutes les cartes attachées à ce Pokémon.)",
		en: "Rescue Energy provides Colorless Energy. If the Pokémon this card is attached to is Knocked Out by damage from an attack, put that Pokémon back into your hand. (Discard all cards attached to that Pokémon.)",
		de: "Berge-Energie liefert -Energie. Wenn das Pokémon, an das diese Karte angelegt ist, durch einen Angriff deines Gegners kampfunfähig gemacht wurde, nimm dieses Pokémon zurück auf deine Hand. (Lege alle an dieses Pokémon angelegten Karten auf deinen Ablagestapel.)"
	},

	energyType: "Special",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0,

	thirdParty: {
		cardmarket: 279620,
		tcgplayer: 88701
	}
}

export default card
