import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Junk Arm",
		fr: "Bras indésirable",
		de: "Müllgreifer"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez 2 cartes de votre main. Cherchez une carte Dresseur dans votre pile de défausse, montrez-la à votre adversaire et ajoutez-la à votre main. Vous ne pouvez pas associer Bras indésirable aux effets de cette carte.",
		en: "Discard 2 cards from your hand. Search your discard pile for a Trainer card, show it to your opponent, and put it into your hand. You can't choose Junk Arm with the effect of this card.",
		de: "Lege 2 Karten von deiner Hand auf deinen Ablagestapel. Durchsuche deinen Ablagestapel nach 1 Trainer-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Du kannst mit diesem Effekt keine Müllgreifer-Karte wählen."
	},

	trainerType: "Item",

	hp: 0,

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86369,
				cardmarket: 279617
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279617,
				tcgplayer: 86369
			}
		},
		{
			type: "normal",
			stamp: ['igor-costa'],
			thirdParty: {
				tcgplayer: 480570
			}
		},
		{
			type: "normal",
			stamp: ['gustavo-wada'],
			thirdParty: {
				tcgplayer: 480411
			}
		},
		{
			type: "normal",
			stamp: ['christopher-kan'],
			thirdParty: {
				tcgplayer: 480412
			}
		},
		{
			type: "normal",
			stamp: ['david-cohen'],
			thirdParty: {
				tcgplayer: 480414
			}
		},
		{
			type: "normal",
			stamp: ['shuto-itagaki'],
			thirdParty: {
				tcgplayer: 480571
			}
		},
		{
			type: "normal",
			stamp: ['chase-moloney'],
			thirdParty: {
				tcgplayer: 480569
			}
		},
		{
			type: "normal",
			stamp: ['zachary-bokhari'],
			thirdParty: {
				tcgplayer: 480568
			}
		},
		{
			type: "reverse",
			stamp: ['player-rewards-program'],
			thirdParty: {
				cardmarket: 279617,
				tcgplayer: 119012
			}
		},
	],

}

export default card
