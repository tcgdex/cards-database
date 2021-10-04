import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Single Strike Scroll of Scorn",
		fr: "Rouleau Acerbe Poing Final",
		es: "Pergamino Ira Golpe Brusco",
		it: "Rotolo dello Sdegno Colpo Singolo",
		pt: "Pergaminho de Desprezo Golpe Decisivo",
		de: "Fokussierter-Angriff-Spottrolle"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "The Single Strike Pokémon this card is attached to can use the attack on this card. (You still need the necessary Energy to use this attack.)",
		fr: "Le Pokémon Poing Final auquel cette carte est attachée peut utiliser l’attaque sur cette carte. (Vous avez toujours besoin de l’Énergie nécessaire pour utiliser cette attaque.)",
		es: "El Pokémon Golpe Brusco al que esté unida esta carta puede usar el ataque de esta carta. (Sigues necesitando las Energías necesarias para usar este ataque).",
		it: "Il Pokémon Colpo Singolo a cui è assegnata questa carta può usare l’attacco di questa carta. Devi comunque avere l’Energia necessaria per usare questo attacco.",
		pt: "O Pokémon Golpe Decisivo ao qual esta carta está ligada pode usar o ataque desta carta (você ainda precisa da Energia necessária para usar este ataque).",
		de: "Das Fokussierter-Angriff-Pokémon, an das diese Karte angelegt ist, kann die Attacke auf dieser Karte einsetzen. (Du benötigst jedoch die für diese Attacke notwendige Energie.)"
	},

	trainerType: "Tool",
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card