import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Fusion Strike Energy",
		fr: "Énergie Poing de Fusion",
		es: "Energía Golpe Fusión",
		it: "Energia Colpo Fusione",
		pt: "Energia Golpe Fusão",
		de: "Fusionsangriff-Energie"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		en: "This card can only be attached to a Fusion Strike Pokémon. If this card is attached to anything other than a Fusion Strike Pokémon, discard this card.\n\nAs long as this card is attached to a Pokémon, it provides every type of Energy but provides only 1 Energy at a time. Prevent all effects of your opponent's Pokémon's Abilities done to the Pokémon this card is attached to.",
		fr: "Cette carte ne peut être attachée qu'à un Pokémon Poing de Fusion. Si cette carte est attachée à autre chose qu'un Pokémon Poing de Fusion, défaussez-la.\nTant que cette carte est attachée à un Pokémon, elle fournit tout type d'Énergie mais seulement une Énergie à la fois. Évitez tous les effets des talents des Pokémon de votre adversaire infligés au Pokémon auquel cette carte est attachée.",
		de: "Diese Karte kann nur an ein Fusionsangriff-Pokémon angelegt sein. Wenn diese Karte an etwas anderes als ein Fusionsangriff-Pokémon angelegt ist, lege diese Karte auf deinen Ablagestapel.\nSolange diese Karte an ein Pokémon angelegt ist, liefert sie jeden Energietyp, aber immer nur 1 Energie. Verhindere alle Effekte von Fähigkeiten der Pokémon deines Gegners, die dem Pokémon, an das diese Karte angelegt ist, zugefügt werden.",
		es: "Esta carta solo puede unirse a Pokémon Golpe Fusión. Si esta carta está unida a cualquier otra carta que no sea un Pokémon Golpe Fusión, descarta esta carta.\nMientras esta carta esté unida a 1 Pokémon, proporciona cualquier tipo de Energía, pero proporciona solo 1 Energía a la vez. Evita todos los efectos de las habilidades de los Pokémon de tu rival infligidos al Pokémon al que esté unida esta carta.",
		pt: "Esta carta só pode ser ligada a um Pokémon Golpe Fusão. Se esta carta estiver ligada a qualquer coisa além de um Pokémon Golpe Fusão, descarte esta carta.\nEnquanto esta carta estiver ligada a um Pokémon, ela fornecerá todo tipo de Energia, mas fornecerá 1 Energia por vez. Previna todos os efeitos de Habilidades dos Pokémon do seu oponente causados ao Pokémon ao qual esta carta está ligada.",
		it: "Questa carta può essere assegnata solo a Pokémon Colpo Fusione. Scarta questa carta se è assegnata a un Pokémon che non è un Pokémon Colpo Fusione.\nFintanto che questa carta è assegnata a un Pokémon, fornisce un'Energia di qualsiasi tipo, ma solo una alla volta. Previeni tutti gli effetti delle abilità dei Pokémon del tuo avversario inflitti al Pokémon a cui è assegnata questa carta."
	},

	energyType: "Special",
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582980
	}
}

export default card
