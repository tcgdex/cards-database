import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Moomoo Milk",
		'fr-fr': "Lait Meumeu",
		'es-es': "Leche Mu-mu",
		'it-it': "Latte Mumu",
		'pt-br': "Leite de Moomoo",
		'de-de': "Kuhmuh-Milch"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Choisissez l’un de vos Pokémon, puis lancez 2 pièces. Pour chaque côté face, soignez 30 dégâts à ce Pokémon-là.",
		'en-us': "Choose 1 of your Pokémon, and then flip 2 coins. For each heads, heal 30 damage from that Pokémon.",
		'es-es': "Elige 1 de tus Pokémon y, después, lanza 2 monedas. Por cada cara, cura 30 puntos de daño a ese Pokémon.",
		'it-it': "Scegli uno dei tuoi Pokémon, quindi lancia due volte una moneta. Ogni volta che esce testa, cura quel Pokémon da 30 danni.",
		'pt-br': "Escolha 1 dos seus Pokémon e então jogue 2 moedas. Para cada cara, cure 30 pontos de dano daquele Pokémon.",
		'de-de': "Wähle 1 deiner Pokémon und wirf anschließend 2 Münzen. Heile pro Kopf 30 Schadenspunkte bei jenem Pokémon."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 365819,
		tcgplayer: 179018
	}
}

export default card
