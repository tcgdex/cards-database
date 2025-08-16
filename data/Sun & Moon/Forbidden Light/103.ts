import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Bonnie",
		fr: "Clem",
		es: "Clem",
		it: "Clem",
		pt: "Bonnie",
		de: "Heureka"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer cette carte que s’il y a une carte Stade en jeu.\n\nDéfaussez la carte Stade. Pendant ce tour, votre Zygarde-GX peut utiliser son attaque GX même si vous avez déjà utilisé votre attaque GX.",
		en: "You can play this card only if there is any Stadium card in play.\n\nDiscard that Stadium card. During this turn, your Zygarde-GX can use its GX attack even if you have used your GX attack.",
		es: "Puedes jugar esta carta solo si hay alguna carta de Estadio en juego.\n\nDescarta esa carta de Estadio. Durante este turno, tu Zygarde-GX puede usar su ataque GX incluso si has usado tu ataque GX.",
		it: "Puoi giocare questa carta solo se c’è in gioco una carta Stadio.\n\nScarta quella carta Stadio. Durante questo turno, il tuo Zygarde-GX può usare il suo attacco GX anche se hai già usato un attacco GX.",
		pt: "Você só pode jogar esta carta se houver alguma carta de Estádio em jogo.\n\nDescarte aquela carta de Estádio. Durante esta vez de jogar, seu Zygarde-GX pode usar seu ataque GX mesmo se você já tiver usado um ataque GX.",
		de: "Du kannst diese Karte nur spielen, wenn 1 Stadionkarte im Spiel ist.\n\nLege jene Stadionkarte auf den Ablagestapel. Während dieses Zuges kann dein Zygarde-GX seine GX-Attacke einsetzen, auch wenn du deine GX-Attacke eingesetzt hast."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 327209,
		tcgplayer: 165767
	}
}

export default card
