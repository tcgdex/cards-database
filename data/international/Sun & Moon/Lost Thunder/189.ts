import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Sightseer",
		'fr-fr': "Vacancière",
		'es-es': "Veraneante",
		'it-it': "Vacanziera",
		'pt-br': "Excursionista",
		'de-de': "Urlauberin"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Vous pouvez défausser autant de cartes que vous voulez de votre main. Ensuite, piochez des cartes jusqu’à ce que vous ayez 5 cartes en main. Si vous ne pouvez pas piocher de carte de cette façon, vous ne pouvez pas jouer cette carte.",
		'en-us': "You may discard any number of cards from your hand. Then, draw cards until you have 5 cards in your hand. If you can’t draw any cards in this way, you can’t play this card.",
		'es-es': "Puedes descartar cualquier cantidad de cartas de tu mano. Después, roba cartas hasta que tengas 5 cartas en tu mano. Si no puedes robar ninguna carta de esta manera, no puedes jugar esta carta.",
		'it-it': "Puoi scartare un numero qualsiasi di carte che hai in mano. Poi pesca fino ad avere cinque carte in mano. Se non puoi pescare carte in questo modo, non puoi giocare questa carta.",
		'pt-br': "Você pode descartar qualquer número de cartas da sua mão. Em seguida, compre cartas até ter 5 cartas na sua mão. Se não puder comprar nenhuma carta desta forma, não poderá jogar esta carta.",
		'de-de': "Du kannst beliebig viele Karten aus deiner Hand auf deinen Ablagestapel legen. Ziehe anschließend so lang Karten, bis du 5 Karten auf deiner Hand hast. Wenn du auf diese Weise keine Karten ziehen kannst, kannst du diese Karte nicht spielen."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 365823,
		tcgplayer: 179025
	}
}

export default card
