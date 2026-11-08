import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Team Star Grunt",
		'fr-fr': "Sbire de la Team Star",
		'es-es': "Recluta del Team Star",
		'it-it': "Recluta del Team Star",
		'pt-br': "Recruta da Equipe Star",
		'de-de': "Rüpel von Team Star"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Put an Energy attached to your opponent's Active Pokémon on top of their deck.",
		'fr-fr': "Placez une Énergie attachée au Pokémon Actif de votre adversaire sur le dessus de son deck.",
		'es-es': "Pon 1 Energía unida al Pokémon Activo de tu rival en la parte superior de su baraja.",
		'it-it': "Prendi un'Energia assegnata al Pokémon attivo del tuo avversario e mettila in cima al suo mazzo.",
		'pt-br': "Coloque uma Energia ligada ao Pokémon Ativo do seu oponente como a carta de cima do baralho dele.",
		'de-de': "Lege 1 an das Aktive Pokémon deines Gegners angelegte Energie auf sein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		}
	],

	illustrator: "nagimiso",

	thirdParty: {
        cardmarket: 702538,
        tcgplayer: 487149
    }
}

export default card