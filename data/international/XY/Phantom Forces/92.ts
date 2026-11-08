import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Battle Compressor Team Flare Gear",
		'fr-fr': "Réducteur de Combat Matos Team Flare",
		'es-es': "Compresor de Combates Equipo del Team Flare",
		'it-it': "Compressore Lotta [Dotazione del Team Flare]",
		'pt-br': "Compressor de Batalha – Equipamento da Equipe Flare",
		'de-de': "Kampfverdichter Team Flare-Zubehör"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cherchez jusqu'à 3 cartes dans votre deck et défaussez-les. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for up to 3 cards and discard them. Shuffle your deck afterward.",
		'es-es': "Busca en tu baraja hasta 3 cartas y descártalas. Baraja las cartas de tu baraja después.",
		'it-it': "Cerca nel tuo mazzo fino a tre carte e scartale. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure até 3 cards em seu baralho e descarte-os. Em seguida, embaralhe seus cards.",
		'de-de': "Durchsuche dein Deck nach bis zu 3 Karten und lege sie auf deinen Ablagestapel. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281898
	}
}

export default card
