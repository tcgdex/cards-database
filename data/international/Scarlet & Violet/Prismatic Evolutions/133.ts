import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Atticus",
		'fr-fr': "Erio",
		'es-es': "Henzo",
		'pt-br': "Érico",
		'it-it': "Henzo",
		'de-de': "Shugi"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "You can use this card only if your opponent's Active Pokémon is Poisoned.\n\nShuffle your hand into your deck. Then, draw 7 cards.",
		'fr-fr': "Vous ne pouvez utiliser cette carte que si le Pokémon Actif de votre adversaire est Empoisonné.\n\nMélangez votre main avec votre deck. Ensuite, piochez 7 cartes.",
		'es-es': "Puedes usar esta carta solo si el Pokémon Activo de tu rival está Envenenado.\n\nPon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 7 cartas.",
		'pt-br': "Você só pode usar esta carta se o Pokémon Ativo do seu oponente estiver Envenenado.\n\nEmbaralhe a sua mão no seu baralho. Em seguida, compre 7 cartas.",
		'it-it': "Puoi usare questa carta solo se il Pokémon attivo del tuo avversario è avvelenato.\n\nRimischia le carte che hai in mano nel tuo mazzo. Poi pesca sette carte.",
		'de-de': "Du kannst diese Karte nur einsetzen, wenn das Aktive Pokémon deines Gegners vergiftet ist.\n\nMische deine Handkarten in dein Deck. Ziehe anschließend 7 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	illustrator: "kantaro",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805527,
				tcgplayer: 610488
			}
		},
	],
}

export default card
