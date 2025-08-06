import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Cross Switcher",
		fr: "Échange Croisé",
		es: "Cambiador Cruzado",
		it: "Scambiatore Incrociato",
		pt: "Substituidor Cruzado",
		de: "Cross-Tauscher"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "You must play 2 Cross Switcher cards at once. (This effect works one time for 2 cards.)\n\nSwitch 1 of your opponent's Benched Pokémon with their Active Pokémon. If you do, switch your Active Pokémon with 1 of your Benched Pokémon.",
		fr: "Vous devez jouer 2 cartes Échange Croisé à la fois. (Cet effet agit une fois pour 2 cartes.)\nÉchangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif. Dans ce cas, échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc.",
		es: "Debes jugar 2 cartas de Cambiador Cruzado de una vez. (Este efecto funciona una vez por 2 cartas).\nCambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. Si lo haces, cambia tu Pokémon Activo por 1 de tus Pokémon en Banca.",
		it: "Devi giocare due Scambiatore Incrociato alla volta. Questo effetto si applica una volta ogni due carte.\nScambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Se lo fai, scambia il tuo Pokémon attivo con uno della tua panchina.",
		pt: "Você deve jogar 2 cartas Substituidor Cruzado de uma vez (este efeito funciona uma vez para 2 cartas).\nTroque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). Se fizer isto, troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco.",
		de: "Du musst 2 Cross-Tauscher-Karten gleichzeitig spielen. (Dieser Effekt funktioniert einmal für 2 Karten.)\nTausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Wenn du das machst, tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	trainerType: "Item",
	regulationMark: "E",
	illustrator: "inose yukie",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582966,
		tcgplayer: 253101
	}
}

export default card