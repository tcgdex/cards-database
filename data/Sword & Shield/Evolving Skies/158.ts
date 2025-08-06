import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Single Strike Scroll of the Fanged Dragon",
		fr: "Rouleau du Dragon à Crocs Poing Final",
		es: "Pergamino Dragón Colmilludo Golpe Brusco",
		it: "Rotolo del Drago Dentuto Colpo Singolo",
		pt: "Pergaminho do Dragão Feroz Golpe Decisivo",
		de: "Fokussierter-Angriff-Bissdrachenrolle"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "The Single Strike Pokémon this card is attached to can use the attack on this card. (You still need the necessary Energy to use this attack.)",
		fr: "Le Pokémon Poing Final auquel cette carte est attachée peut utiliser l'attaque sur cette carte. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser cette attaque.)",
		es: "El Pokémon Golpe Brusco al que esté unida esta carta puede usar el ataque de esta carta. (Sigues necesitando las Energías necesarias para usar este ataque).",
		it: "Il Pokémon Colpo Singolo a cui è assegnata questa carta può usare l'attacco di questa carta. Devi comunque avere l'Energia necessaria per usare questo attacco.",
		pt: "O Pokémon Golpe Decisivo ao qual esta carta está ligada pode usar o ataque desta carta (você ainda precisa da Energia necessária para usar este ataque).",
		de: "Das Fokussierter-Angriff-Pokémon, an das diese Karte angelegt ist, kann die Attacke auf dieser Karte einsetzen. (Du benötigst jedoch die für diese Attacke notwendige Energie.)"
	},

	trainerType: "Tool",
	illustrator: "5ban Graphics",
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574216,
		tcgplayer: 246779
	}
}

export default card
