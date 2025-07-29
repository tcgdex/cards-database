import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Memory Energy",
		fr: "Énergie Mémoire",
		es: "Energía Memoria",
		it: "Energia Memoria",
		pt: "Energia de Memória",
		de: "Gedächtnis-Energie"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		fr: "Cette carte fournit de l’Énergie Colorless.\n\nLe Pokémon auquel cette carte est attachée peut utiliser les attaques de ses précédentes Évolutions. (Vous avez toujours besoin de l’Énergie nécessaire pour utiliser chaque attaque.)",
		en: "This card provides Colorless Energy.\n\nThe Pokémon this card is attached to can use any attack from its previous Evolutions. (You still need the necessary Energy to use each attack.)",
		es: "Esta carta proporciona 1 Energía Colorless.\n\nEl Pokémon al que esté unida esta carta puede usar cualquier ataque de sus Evoluciones anteriores. (Sigues necesitando la Energía necesaria para usar cada ataque).",
		it: "Questa carta fornisce Energia Colorless.\n\nIl Pokémon a cui è assegnata questa carta può usare gli attacchi dei suoi stadi evolutivi precedenti. Devi comunque avere l’Energia necessaria per usare quegli attacchi.",
		pt: "Esta carta fornece Energia Colorless.\n\nO Pokémon ao qual esta carta está ligada pode usar qualquer ataque de suas Evoluções anteriores (você ainda precisa da Energia necessária para usar cada ataque).",
		de: "Diese Karte liefert Colorless-Energie.\n\nDas Pokémon, an das diese Karte angelegt ist, kann die Attacken aus vorangegangenen Entwicklungen einsetzen. (Du benötigst jedoch die jeweils für die Attacke notwendige Energie.)"
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 365827
	}
}

export default card
