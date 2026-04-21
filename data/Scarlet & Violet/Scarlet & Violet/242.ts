import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Team Star Grunt",
		fr: "Sbire de la Team Star",
		es: "Recluta del Team Star",
		it: "Recluta del Team Star",
		pt: "Recruta da Equipe Star",
		de: "Rüpel von Team Star"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Put an Energy attached to your opponent's Active Pokémon on top of their deck.",
		fr: "Placez une Énergie attachée au Pokémon Actif de votre adversaire sur le dessus de son deck.",
		es: "Pon 1 Energía unida al Pokémon Activo de tu rival en la parte superior de su baraja.",
		it: "Prendi un'Energia assegnata al Pokémon attivo del tuo avversario e mettila in cima al suo mazzo.",
		pt: "Coloque uma Energia ligada ao Pokémon Ativo do seu oponente como a carta de cima do baralho dele.",
		de: "Lege 1 an das Aktive Pokémon deines Gegners angelegte Energie auf sein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "nagimiso",

	thirdParty: {
        cardmarket: 702538,
        tcgplayer: 487149
    }
}

export default card