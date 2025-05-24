import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Counter Gain",
		fr: "Rattrape-Riposte",
		es: "Alcance Contraataque",
		it: "Contrappeso",
		pt: "Contra-ataque de Alcance",
		de: "Kontergewinn"
	},

	rarity: "Hyper rare",
	category: "Trainer",

	effect: {
		en: "If you have more Prize cards remaining than your opponent, attacks used by the Pokémon this card is attached to cost {C} less.",
		fr: "S'il vous reste plus de cartes Récompense qu'à votre adversaire, les attaques utilisées par le Pokémon auquel cette carte est attachée coûtent {C} de moins.",
		es: "Si te quedan más cartas de Premio que a tu rival, los ataques usados por el Pokémon al que esté unida esta carta cuestan {C} menos.",
		it: "Se hai più carte Premio rimanenti del tuo avversario, il costo degli attacchi usati dal Pokémon a cui è assegnata questa carta è ridotto di {C}.",
		pt: "Se você tiver mais cartas de Prêmio restantes do que seu oponente, os ataques usados pelo Pokémon ao qual esta carta está ligada custarão {C} a menos.",
		de: "Wenn du mehr verbleibende Preiskarten hast als dein Gegner, verringern sich die Kosten der eingesetzten Attacken von dem Pokémon, an das diese Karte angelegt ist, um {C}."
	},

	trainerType: "Tool",
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Toyste Beach"
}

export default card
