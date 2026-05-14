import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Crystal Shard",
		de: "Kristallscherbe"
	},

	illustrator: "Jungo Suzuki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach Crystal Shard to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. As long as this card is attached to a Pokémon, that Pokémon's type (color) is Colorless. If that Pokémon attacks, discard this card at the end of the turn.",
		de: "So lange diese Karte an ein Pokémon angelegt ist, ist der Typ (Farbe) dieses Pokémon . Greift das Pokémon an, lege diese Karte am Ende des Zuges auf deinen Ablagestapel."
	},

	thirdParty: {
		cardmarket: 275380,
		tcgplayer: 84519
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
