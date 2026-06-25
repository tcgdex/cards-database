import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Crystal Shard",
		fr: "Écharde de cristal",
		de: "Kristallscherbe"
	},

	illustrator: "Jungo Suzuki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		en: "Attach Crystal Shard to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. As long as this card is attached to a Pokémon, that Pokémon's type is Colorless. If that Pokémon attacks, discard this card at the end of the turn.",
		fr: "Attachez Écharde de cristal à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O., défaussez-la.\n\nTant que cette carte est attachée à un Pokémon, ce Pokémon est de type . S'il attaque, défaussez cette carte à la fin du tour.",
		de: "So lange diese Karte an ein Pokémon angelegt ist, ist der Typ (Farbe) dieses Pokémon . Greift das Pokémon an, lege diese Karte am Ende des Zuges auf deinen Ablagestapel."
	},

	thirdParty: {
		tcgplayer: 84520,
		cardmarket: 276488
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"]
		}
	]
}

export default card
