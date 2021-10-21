import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Énergie Spirale",
		en: "Spiral Energy",
		es: "Energía Espiral",
		it: "Energia Spirale",
		pt: "Energia de Espiral",
		de: "Spiral-Energie"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		fr: "Cette carte ne peut être attachée qu'à un Pokémon Mille Poings. Si cette carte est attachée à autre chose qu'un Pokémon Mille Poings, défaussez-la.\nTant que cette carte est attachée à un Pokémon, elle fournit tout type d'Énergie mais seulement une Énergie à la fois. Le Pokémon auquel cette carte est attachée ne peut pas être Paralysé. Si ce Pokémon est déjà Paralysé, il guérit de cet État Spécial.",
		en: "This card can only be attached to a Rapid Strike Pokémon. If this card is attached to anything other than a Rapid Strike Pokémon, discard this card.\n\nAs long as this card is attached to a Pokémon, it provides every type of Energy but provides only 1 Energy at a time. The Pokémon this card is attached to can't be Paralyzed, and if it is already Paralyzed, it recovers from that Special Condition.",
		es: "Esta carta solo puede unirse a Pokémon Golpe Fluido. Si esta carta está unida a cualquier otra carta que no sea un Pokémon Golpe Fluido, descarta esta carta.\nMientras esta carta esté unida a 1 Pokémon, proporciona cualquier tipo de Energía, pero proporciona solo 1 Energía a la vez. El Pokémon al que esté unida esta carta no puede pasar a estar Paralizado\ny, si ya está Paralizado, se recupera de esa Condición Especial.",
		it: "Questa carta può essere assegnata solo a Pokémon Colpo Rapido. Scarta questa carta se è assegnata a un Pokémon che non è un Pokémon Colpo Rapido.\nFintanto che questa carta è assegnata a un Pokémon, fornisce un'Energia di qualsiasi tipo, ma solo una alla volta. Il Pokémon a cui è assegnata questa carta non può venire paralizzato, e se è già paralizzato, guarisce da quella condizione speciale.",
		pt: "Esta carta só pode ser ligada a um Pokémon Golpe Fluido. Se esta carta estiver ligada a qualquer coisa além de um Pokémon Golpe Fluido, descarte esta carta.\nEnquanto esta carta estiver ligada a um Pokémon, ela fornecerá todo tipo de Energia, mas fornecerá 1 Energia por vez. O Pokémon ao qual esta carta está ligada não pode ser Paralisado, e se ele já estiver\nParalisado, ele se recuperará daquela Condição Especial.",
		de: "Diese Karte kann nur an ein Fließender-Angriff-Pokémon angelegt sein. Wenn diese Karte an etwas anderes als ein Fließender-Angriff-Pokémon angelegt ist, lege diese Karte auf deinen Ablagestapel.\nSolange diese Karte an ein Pokémon angelegt ist, liefert sie jeden Energietyp, aber immer nur 1 Energie. Das Pokémon, an das diese Karte angelegt ist, kann nicht paralysiert werden, und wenn es bereits paralysiert ist, erholt es sich von jenem Speziellen Zustand."
	},

	energyType: "Special",
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
