import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Sbire de la Team Star",
		'en-us': "Team Star Grunt",
		'es-es': "Recluta del Team Star",
		'it-it': "Recluta del Team Star",
		'pt-br': "Recruta da Equipe Star",
		'de-de': "Rüpel von Team Star"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'fr-fr': "Placez une Énergie attachée au Pokémon Actif de votre adversaire sur le dessus de son deck.",
		'en-us': "Put an Energy attached to your opponent's Active Pokémon on top of their deck.",
		'es-es': "Pon 1 Energía unida al Pokémon Activo de tu rival en la parte superior de su baraja.",
		'it-it': "Prendi un'Energia assegnata al Pokémon attivo del tuo avversario e mettila in cima al suo mazzo.",
		'pt-br': "Coloque uma Energia ligada ao Pokémon Ativo do seu oponente como a carta de cima do baralho dele.",
		'de-de': "Lege 1 an das Aktive Pokémon deines Gegners angelegte Energie auf sein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725275,
				tcgplayer: 509787,
				cardtrader: 256091
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725275,
				tcgplayer: 509787,
				cardtrader: 256091
			}
		},
	],

	illustrator: "nagimiso",

	
}

export default card
