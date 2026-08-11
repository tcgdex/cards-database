import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Greedy Dice",
		'fr-fr': "Dés Avides",
		'es-es': "Dado Codicioso",
		'it-it': "Dado Ingordo",
		'pt-br': "Dado Ganancioso",
		'de-de': "Gierige Würfel"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Vous ne pouvez jouer cette carte que si vous l'avez récupérée en tant que carte Récompense face cachée, avant de l'ajouter à votre main.\n\nLancez une pièce. Si c'est face, récupérez 1 carte Récompense supplémentaire.",
		'en-us': "You can play this card only if you took it as a face-down Prize card, before you put it into your hand.\n\nFlip a coin. If heads, take 1 more Prize card.",
		'es-es': "Puedes jugar esta carta solo si la has cogido de entre las cartas de Premio que están boca abajo, antes de ponerla en tu mano.Lanza 1 moneda. Si sale cara, coge 1 carta de Premio más.",
		'it-it': "Puoi giocare questa carta solo se l'hai presa come carta Premio ed era a faccia in giù prima di aggiungerla alla tua mano.Lancia una moneta. Se esce testa, prendi un'altra carta Premio.",
		'pt-br': "Você pode jogar este card somente se o pegou dos seus cards de Prêmio virados para baixo, antes de colocá-lo na sua mão.Jogue uma moeda. Se sair cara, pegue mais 1 card de Prêmio.",
		'de-de': "Du kannst diese Karte nur spielen, wenn du sie als verdeckte Preiskarte auf deine Hand genommen hast.Wirf 1 Münze. Nimm bei \"Kopf\" 1 zusätzliche Preiskarte."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 291482,
		tcgplayer: 121226
	}
}

export default card
