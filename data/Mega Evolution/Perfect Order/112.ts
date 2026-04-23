import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Naveen",
		fr: "Inno",
		es: "Acris",
		'es-mx': "Acris",
		de: "Kaylen",
		it: "Virgil",
		pt: "Naveen"
	},

	illustrator: "DOM",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Draw cards until you have 5 cards in your hand. Before drawing cards, you may discard any number of cards from your hand. (If you can't draw any cards in this way, you can't use this card.)",
		fr: "Piochez des cartes jusqu'à en avoir 5 en main. Avant de piocher des cartes, vous pouvez défausser le nombre voulu de cartes de votre main. (Si vous ne pouvez pas piocher de cartes de cette façon, vous ne pouvez pas utiliser cette carte.)",
		es: "Roba cartas hasta tener 5 cartas en tu mano. Antes de robar cartas, puedes descartar cualquier cantidad de cartas de tu mano. (Si no puedes robar ninguna carta de esta manera, no puedes usar esta carta).",
		'es-mx': "Roba cartas hasta que tengas 5 cartas en tu mano. Antes de robar cartas, puedes descartar cualquier cantidad de cartas de tu mano. (Si no puedes robar ninguna carta de esta manera, no puedes usar esta carta).",
		de: "Ziehe so lange Karten, bis du 5 Karten auf deiner Hand hast. Bevor du Karten ziehst, kannst du beliebig viele Karten aus deiner Hand auf deinen Ablagestapel legen. (Wenn du keine Karten auf diese Weise ziehen kannst, kannst du diese Karte nicht einsetzen.)",
		it: "Pesca fino ad avere cinque carte in mano. Prima di pescare, puoi scartare un numero qualsiasi di carte dalla tua mano. Se non puoi pescare delle carte in questo modo, non puoi usare questa carta.",
		pt: "Compre cartas até ter 5 cartas na sua mão. Antes de comprar cartas, você pode descartar qualquer número de cartas da sua mão. (Se você não puder comprar carta alguma desta forma, você não poderá usar esta carta.)"
	},

	trainerType: "Supporter",
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		}
	],

	thirdParty: {
		tcgplayer: 684347,
		cardmarket: 877529
	}
}

export default card
