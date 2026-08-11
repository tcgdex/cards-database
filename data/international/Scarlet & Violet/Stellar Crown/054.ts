import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [777],
	set: Set,

	name: {
		'en-us': "Togedemaru",
		'fr-fr': "Togedemaru",
		'es-es': "Togedemaru",
		'it-it': "Togedemaru",
		'pt-br': "Togedemaru",
		'de-de': "Togedemaru"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Electrifying Chance",
			'fr-fr': "Chance Électrifiante",
			'es-es': "Oportunidad Electrizante",
			'it-it': "Occasione Elettrizzante",
			'pt-br': "Sorte Elétrica",
			'de-de': "Elektrisierende Chance"
		},

		effect: {
			'en-us': "If you have exactly 1 Prize card remaining, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "S'il vous reste exactement une carte Récompense, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Si te queda exactamente una carta de Premio, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Se hai esattamente una carta Premio rimanente, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Se você tiver exatamente 1 carta de Prêmio restante, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wenn du genau 1 verbleibende Preiskarte hast, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785908,
				tcgplayer: 567280
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785908,
				tcgplayer: 567280
			}
		},
	],

	illustrator: "Rianti Hidayat",

}

export default card
