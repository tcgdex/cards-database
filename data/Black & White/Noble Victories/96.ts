import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Xtransceiver",
		fr: "Vokit",
		es: "Videomisor",
		it: "Interpoké",
		pt: "Tranceptor X",
		de: "Viso-Caster"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c’est face, cherchez une carte Supporter dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		en: "Flip a coin. If heads, search your deck for a Supporter card, reveal it, and put it into your hand. Shuffle your deck afterward.",
		es: "Lanza una moneda. Si sale cara, busca en tu baraja una carta de Partidario, enséñala y ponla en tu mano. Baraja las cartas de tu baraja después.",
		it: "Lancia una moneta. Se esce testa, cerca nel tuo mazzo una carta Aiuto, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Jogue uma moeda. Se sair cara, procure um card de Apoiador em seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe seus cards.",
		de: "Wirf 1 Münze. Durchsuche bei „Kopf“ dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280219,
		tcgplayer: 90674
	}
}

export default card
