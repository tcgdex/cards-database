import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Cram-o-matic",
		fr: "NigoMix 3000",
		es: "Cramobot",
		it: "CramoBot",
		pt: "Cramorizador",
		de: "Urglmator"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "You can use this card only if you discard another Item card from your hand.\nFlip a coin. If heads, search your deck for a card and put it into your hand. Then, shuffle your deck.",
		fr: "Vous ne pouvez utiliser cette carte que si vous défaussez une autre carte Objet de votre main.\nLancez une pièce. Si c'est face, cherchez dans votre deck une carte, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		es: "Puedes usar esta carta solo si descartas otra carta de Objeto de tu mano.\nLanza 1 moneda. Si sale cara, busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
		it: "Puoi usare questa carta solo se scarti un'altra carta Strumento che hai in mano.\nLancia una moneta. Se esce testa, cerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Você só pode usar esta carta se descartar outra carta de Item da sua mão.\nJogue 1 moeda. Se sair cara, procure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
		de: "Du kannst diese Karte nur verwenden, wenn du 1 andere Itemkarte aus deiner Hand auf deinen Ablagestapel legst.\nWirf 1 Münze. Durchsuche bei Kopf dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "E",
	illustrator: "Ryo Ueda",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card