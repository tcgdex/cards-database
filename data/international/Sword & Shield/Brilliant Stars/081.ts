import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [539],
	set: Set,

	name: {
		'en-us': "Sawk",
		'fr-fr': "Karaclée",
		'es-es': "Sawk",
		'it-it': "Sawk",
		'pt-br': "Sawk",
		'de-de': "Karadonis"
	},

	illustrator: "Shinji Kanda",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Sweep the Leg",
			'fr-fr': "Balayage Jambier",
			'es-es': "Poner la Zancadilla",
			'it-it': "Spazzata",
			'pt-br': "Pernada",
			'de-de': "Fußfeger"
		},

		effect: {
			'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue 1 moeda. Se sair cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "If you see a Sawk training in the mountains in its single-minded pursuit of strength, it's best to quietly pass by.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608531,
				tcgplayer: 263797
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608531,
				tcgplayer: 263797
			}
		},
	],
}

export default card
