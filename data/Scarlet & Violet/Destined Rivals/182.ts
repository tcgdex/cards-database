import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Energy",
		fr: "Énergie de la Team Rocket",
		de: "Team Rockets Energie",
		it: "Energia del Team Rocket",
		es: "Energía del Team Rocket",
		pt: "Energia da Equipe Rocket",
		'es-mx': "Energía del Equipo Rocket"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		en: "This card can only be attached to a Team Rocket's Pokémon. If this card is attached to anything other than a Team Rocket's Pokémon, discard this card.\n\nAs long as this card is attached to a Pokémon, it provides 2 in any combination of {P} Energy and {D} Energy.",
		fr: "Cette carte ne peut être attachée qu'à un Pokémon de la Team Rocket. Si cette carte est attachée à autre chose qu'un Pokémon de la Team Rocket, défaussez-la.\n\nTant que cette carte est attachée à un Pokémon, elle fournit une combinaison d'un maximum de 2 Énergies {P} et Énergies {D}.",
		de: "Diese Karte kann nur an ein Team Rockets Pokémon angelegt sein. Wenn diese Karte an etwas anderes als ein Team Rockets Pokémon angelegt ist, lege diese Karte auf deinen Ablagestapel.\n\nSolange diese Karte an ein Pokémon angelegt ist, liefert sie 2 Energien in beliebiger Kombination aus {P}-Energie und {D}-Energie.",
		it: "Questa carta può essere assegnata solo a un Pokémon del Team Rocket. Scarta questa carta se è assegnata a un Pokémon che non è un Pokémon del Team Rocket.\n\nFintanto che questa carta è assegnata a un Pokémon, fornisce due fra Energie {P} ed Energie {D} in qualsiasi combinazione.",
		es: "Esta carta solo puede unirse a un Pokémon del Team Rocket. Si esta carta está unida a cualquier otra carta que no sea un Pokémon del Team Rocket, descarta esta carta.\n\nMientras esta carta esté unida a un Pokémon, proporciona un total de 2 Energías, {P} y {D}, en cualquier combinación.",
		pt: "Esta carta só pode ser ligada a um Pokémon da Equipe Rocket. Se esta carta estiver ligada a qualquer coisa além de um Pokémon da Equipe Rocket, descarte esta carta.\n\nEnquanto esta carta estiver ligada a um Pokémon, ela fornecerá 2 Energias em qualquer combinação de Energia {P} e Energia {D}.",
		'es-mx': "Esta carta solo puede unirse a un Pokémon del Equipo Rocket. Si esta carta está unida a cualquier otra carta que no sea un Pokémon del Equipo Rocket, descarta esta carta.\n\nMientras esta carta esté unida a un Pokémon, proporciona 2 Energías en cualquier combinación de Energía {P} y {D}."
	},

	energyType: "Special",
	regulationMark: "I",

	variants: {
		holo: false
	},

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
