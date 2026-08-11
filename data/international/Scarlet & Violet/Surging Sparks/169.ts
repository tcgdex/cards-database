import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Counter Gain",
		'fr-fr': "Rattrape-Riposte",
		'es-es': "Alcance Contraataque",
		'it-it': "Contrappeso",
		'pt-br': "Contra-ataque de Alcance",
		'de-de': "Kontergewinn"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "If you have more Prize cards remaining than your opponent, attacks used by the Pokémon this card is attached to cost {C} less.",
		'fr-fr': "S'il vous reste plus de cartes Récompense qu'à votre adversaire, les attaques utilisées par le Pokémon auquel cette carte est attachée coûtent {C} de moins.",
		'es-es': "Si te quedan más cartas de Premio que a tu rival, los ataques usados por el Pokémon al que esté unida esta carta cuestan {C} menos.",
		'it-it': "Se hai più carte Premio rimanenti del tuo avversario, il costo degli attacchi usati dal Pokémon a cui è assegnata questa carta è ridotto di {C}.",
		'pt-br': "Se você tiver mais cartas de Prêmio restantes do que seu oponente, os ataques usados pelo Pokémon ao qual esta carta está ligada custarão {C} a menos.",
		'de-de': "Wenn du mehr verbleibende Preiskarten hast als dein Gegner, verringern sich die Kosten der eingesetzten Attacken von dem Pokémon, an das diese Karte angelegt ist, um {C}."
	},

	trainerType: "Tool",
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794542,
				tcgplayer: 589907
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794542,
				tcgplayer: 589907
			}
		},
		{
			type: "normal",
			stamp: ["gym-challenge"]
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"]
		}
	],

	illustrator: "Toyste Beach",

}

export default card
