import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [263],
	set: Set,

	name: {
		'en-us': "Galarian Zigzagoon",
		'fr-fr': "Zigzaton de Galar",
		'es-es': "Zigzagoon de Galar",
		'it-it': "Zigzagoon di Galar",
		'pt-br': "Zigzagoon de Galar",
		'de-de': "Galar-Zigzachs"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Eri Yamaki",

	description: {
		'en-us': "Thought to be the oldest form of Zigzagoon, it moves in zigzags and wreaks havoc upon its surroundings."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Lick",
			'fr-fr': "Léchouille",
			'de-de': "Schlecker",
			'es-es': "Lengüetazo",
			'pt-br': "Lambida",
			'it-it': "Leccata"
		},

		damage: 10,

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582787,
				tcgplayer: 253373
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582787,
				tcgplayer: 253373
			}
		},
	],
}

export default card
