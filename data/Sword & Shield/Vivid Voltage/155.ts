import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Memory Capsule",
		fr: "Capsule Mémoire",
		es: "Cápsula de Memoria",
		it: "Capsula della Memoria",
		pt: "Cápsula de Memória",
		de: "Gedächtniskapsel"
	},

	illustrator: "sadaji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "The Pokémon this card is attached to can use any attack from its previous Evolutions. (You still need the necessary Energy to use each attack.)",
		fr: "Le Pokémon auquel cette carte est attachée peut utiliser les attaques de ses précédentes Évolutions. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser chaque attaque.)",
		es: "El Pokémon al que está unida esta carta puede usar cualquier ataque de sus Evoluciones anteriores. (Sigues necesitando la Energía necesaria para usar cada ataque).",
		it: "Il Pokémon a cui è assegnata questa carta può usare gli attacchi dei suoi stadi evolutivi precedenti. Devi comunque avere l'Energia necessaria per usare quegli attacchi.",
		pt: "O Pokémon ao qual esta carta está ligada pode usar qualquer ataque de suas Evoluções anteriores (você ainda precisa da Energia necessária para usar cada ataque).",
		de: "Das Pokémon, an das diese Karte angelegt ist, kann die Attacken aus vorangegangenen Entwicklungen einsetzen. (Du benötigst jedoch die jeweils für die Attacke notwendige Energie.)"
	},

	trainerType: "Tool",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 512485,
		tcgplayer: 226514
	}
}

export default card
