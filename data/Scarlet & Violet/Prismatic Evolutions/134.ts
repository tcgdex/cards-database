import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Atticus",
		fr: "Erio",
		es: "Henzo",
		pt: "Érico",
		it: "Henzo",
		de: "Shugi"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "You can use this card only if your opponent's Active Pokémon is Poisoned.\n\nShuffle your hand into your deck. Then, draw 7 cards.",
		fr: "Vous ne pouvez utiliser cette carte que si le Pokémon Actif de votre adversaire est Empoisonné.\n\nMélangez votre main avec votre deck. Ensuite, piochez 7 cartes.",
		es: "Puedes usar esta carta solo si el Pokémon Activo de tu rival está Envenenado.\n\nPon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 7 cartas.",
		pt: "Você só pode usar esta carta se o Pokémon Ativo do seu oponente estiver Envenenado.\n\nEmbaralhe a sua mão no seu baralho. Em seguida, compre 7 cartas.",
		it: "Puoi usare questa carta solo se il Pokémon attivo del tuo avversario è avvelenato.\n\nRimischia le carte che hai in mano nel tuo mazzo. Poi pesca sette carte.",
		de: "Du kannst diese Karte nur einsetzen, wenn das Aktive Pokémon deines Gegners vergiftet ist.\n\nMische deine Handkarten in dein Deck. Ziehe anschließend 7 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "GIDORA",

	thirdParty: {
		cardmarket: 805528
	}
}

export default card