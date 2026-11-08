import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Roxie",
		'fr-fr': "Strykna",
		'es-es': "Hiedra",
		'it-it': "Velia",
		'pt-br': "Roxie",
		'de-de': "Mica"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Défaussez jusqu’à 2 Pokémon qui ne sont pas des Pokémon-GX ou des Pokémon-EX de votre main. Piochez 3 cartes pour chaque carte défaussée de cette façon.",
		'en-us': "Discard up to 2 Pokémon that aren’t Pokémon-GX or Pokémon-EX from your hand. Draw 3 cards for each card you discarded in this way.",
		'es-es': "Descarta hasta 2 Pokémon que no sean Pokémon-GX o Pokémon-EX de tu mano. Roba 3 cartas por cada carta que hayas descartado de esta manera.",
		'it-it': "Scarta fino a due Pokémon che hai in mano e che non siano Pokémon-GX o Pokémon-EX. Pesca tre carte per ogni carta che hai scartato in questo modo.",
		'pt-br': "Descarte até 2 Pokémon que não sejam Pokémon-GX ou Pokémon-EX da sua mão. Compre 3 cartas para cada carta descartada desta forma.",
		'de-de': "Lege bis zu 2 Pokémon, die keine Pokémon-GX oder Pokémon-EX sind, aus deiner Hand auf deinen Ablagestapel. Ziehe 3 Karten für jede auf diese Weise auf deinen Ablagestapel gelegte Karte."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 408619,
		tcgplayer: 201325
	}
}

export default card
