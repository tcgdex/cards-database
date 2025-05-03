import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Technical Machine: Fluorite",
		fr: "Capsule Technique : Fluorine",
		es: "Máquina Técnica: Fluorita",
		it: "Macchinario Tecnico: Fluorite",
		pt: "Máquina Técnica: Fluorita",
		de: "Technische Maschine: Fluorit"
	},

	rarity: "Uncommon",
	category: "Trainer",

	attacks: [{
		cost: ["Grass", "Water", "Psychic"],

		name: {
			en: "Fluorite",
			fr: "Fluorine",
			es: "Fluorita",
			it: "Fluorite",
			pt: "Fluorita",
			de: "Fluorit"
		},

		effect: {
			en: "Discard all Energy from this Pokémon, and heal all damage from each of your Tera Pokémon.",
			fr: "Défaussez toutes les Énergies attachées à ce Pokémon, puis soignez tous les dégâts de chacun de vos Pokémon Téracristal.",
			es: "Descarta todas las Energías de este Pokémon y cura todos los puntos de daño a cada uno de tus Pokémon Teracristal.",
			it: "Scarta tutte le Energie da questo Pokémon e cura ciascuno dei tuoi Pokémon Teracristal da tutti i danni.",
			pt: "Descarte todas as Energias deste Pokémon e cure todo o dano de cada um dos seus Pokémon Tera.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel und heile allen Schaden bei jedem deiner Terakristall-Pokémon."
		}
	}],

	effect: {
		en: "The Pokémon this card is attached to can use the attack on this card. (You still need the necessary Energy to use this attack.) If this card is attached to 1 of your Pokémon, discard it at the end of your turn.",
		fr: "Le Pokémon auquel cette carte est attachée peut utiliser l'attaque sur cette carte. (Vous avez toujours besoin des Énergies nécessaires pour utiliser cette attaque.) Si cette carte est attachée à l'un de vos Pokémon, défaussez-la à la fin de votre tour.",
		es: "El Pokémon al que esté unida esta carta puede usar el ataque de esta carta. (Sigues necesitando las Energías necesarias para usar este ataque). Si esta carta está unida a uno de tus Pokémon, descártala al final de tu turno.",
		it: "Il Pokémon a cui è assegnata questa carta può usare l'attacco di questa carta. Devi comunque avere l'Energia necessaria per usare questo attacco. Se questa carta è assegnata a uno dei tuoi Pokémon, scartala alla fine del tuo turno.",
		pt: "O Pokémon ao qual esta carta está ligada pode usar o ataque desta carta. (Você ainda precisa da Energia necessária para usar este ataque.) Se esta carta estiver ligada a 1 dos seus Pokémon, descarte-a no final do seu turno.",
		de: "Das Pokémon, an das diese Karte angelegt ist, kann die Attacke auf dieser Karte einsetzen. (Du benötigst jedoch die für diese Attacke notwendige Energie.) Wenn diese Karte an 1 deiner Pokémon angelegt ist, lege sie am Ende deines Zuges auf deinen Ablagestapel."
	},

	trainerType: "Tool",
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card
