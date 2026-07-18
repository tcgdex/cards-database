import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Shadowy Darkness Energy",
		fr: "Énergie Darkness Sombre",
		es: "Energía Darkness Sombría",
		de: "Schattige Darkness-Energie",
		'es-mx': "Energía Darkness Sombría",
		it: "Energia Darkness Ombrosa",
		pt: "Energia Darkness Sombria"
	},

	rarity: "Rare",
	category: "Energy",
	energyType: "Normal",
	regulationMark: "J",

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides {D} Energy.\n\nAs long as the {D} Pokémon this card is attached to is on your Bench, prevent all damage done to it by attacks from your opponent's Pokémon.",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie {D}.\n\nTant que le Pokémon {D} auquel cette carte est attachée est sur votre Banc, évitez tous les dégâts qui lui sont infligés par les attaques des Pokémon de votre adversaire.",
		es: "Mientras esta carta esté unida a un Pokémon, proporciona 1 Energía {D}.\n\nMientras el Pokémon {D} al que esté unida esta carta esté en tu Banca, se evita todo el daño infligido a este Pokémon por ataques de los Pokémon de tu rival.",
		'es-mx': "Mientras esta carta esté unida a un Pokémon, proporciona Energía {D}.\n\nMientras el Pokémon {D} al que esté unida esta carta esté en tu Banca, se evita todo el daño infligido por ataques de los Pokémon de tu rival a este Pokémon.",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie {D}-Energie.\n\nSolange das {D}-Pokémon, an das diese Karte angelegt ist, auf deiner Bank ist, verhindere allen Schaden, der ihm durch Attacken von Pokémon deines Gegners zugefügt wird.",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia {D}.\n\nFintanto che il Pokémon {D} a cui è assegnata questa carta è nella tua panchina, previeni tutti i danni a esso inflitti dagli attacchi dei Pokémon del tuo avversario.",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia {D}.\n\nEnquanto o Pokémon {D} ao qual esta carta está ligada estiver no seu Banco, previna todo o dano causado a ele por ataques dos Pokémon do seu oponente."
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
