import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Shadowy Darkness Energy",
		fr: "Énergie Obscur Sombre",
		es: "Energía Sombría",
		'es-mx': "Energía Sombría",
		de: "Schattige Finsternis-Energie"
	},

	rarity: "Rare",
	category: "Energy",
	energyType: "Special",
	regulationMark: "J",

	effect: {
		en: "As long as the Darkness Pokémon this card is attached to is on your Bench, prevent all damage done to it by attacks from your opponent's Pokémon",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie {D}-Energie.\n\nSolange das {D}-Pokémon, an das diese Karte angelegt ist, auf deiner Bank ist, verhindere allen Schaden, der ihm durch Attacken von Pokémon deines Gegners zugefügt wird."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895867,
				tcgplayer: 704840
			}
		},
	],
}

export default card
