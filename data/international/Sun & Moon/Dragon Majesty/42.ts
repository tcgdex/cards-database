import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Bagon",
		'fr-fr': "Draby",
		'es-es': "Bagon",
		'it-it': "Bagon",
		'pt-br': "Bagon",
		'de-de': "Kindwurm"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		371,
	],

	hp: 60,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Risky Kick",
				'fr-fr': "Coup de Pied Risqué",
				'es-es': "Patada Arriesgada",
				'it-it': "Calcio Rischioso",
				'pt-br': "Chute Arriscado",
				'de-de': "Risikokick"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Water",
			],
			name: {
				'en-us': "Dragon Eye",
				'fr-fr': "Œil de Dragon",
				'es-es': "Ojo de Dragón",
				'it-it': "Occhio di Drago",
				'pt-br': "Olho de Dragão",
				'de-de': "Drachenauge"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "With its steel-hard stone head, it headbutts indiscriminately. This is because of the stress it feels at being unable to fly.",
	},

	thirdParty: {
		cardmarket: 363513,
		tcgplayer: 175468
	}
}

export default card
