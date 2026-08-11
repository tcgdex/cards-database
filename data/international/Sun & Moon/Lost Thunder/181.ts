import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Lost Blender",
		'fr-fr': "Mixeur Perdu",
		'es-es': "Batidora Perdida",
		'it-it': "Mixer Perduto",
		'pt-br': "Liquidificador Perdido",
		'de-de': "Nirgendwo-Mixer"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Placez 2 cartes de votre main dans la Zone Perdue. Dans ce cas, piochez une carte.",
		'en-us': "Put 2 cards from your hand in the Lost Zone. If you do, draw a card.",
		'es-es': "Pon 2 cartas de tu mano en la Zona Perdida. Si lo haces, roba 1 carta.",
		'it-it': "Prendi due delle carte che hai in mano e mettile nell’area perduta. Se lo fai, pesca una carta.",
		'pt-br': "Coloque 2 cartas da sua mão na Zona Perdida. Se fizer isto, compre 1 carta.",
		'de-de': "Lege 2 Karten aus deiner Hand ins Nirgendwo. Wenn du das machst, ziehe 1 Karte."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 365866,
		tcgplayer: 179012
	}
}

export default card
