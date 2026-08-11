import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Phione",
		'fr-fr': "Phione",
		'es-es': "Phione",
		'it-it': "Phione",
		'pt-br': "Phione",
		'de-de': "Phione"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		489,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Murmurs of the Sea",
				'fr-fr': "Murmures Marins",
				'es-es': "Murmullo del Mar",
				'it-it': "Richiamo del Mare",
				'pt-br': "Murmúrios Marinhos",
				'de-de': "Murmeln des Meeres"
			},
			effect: {
				'en-us': "Your Water Pokémon can’t be Confused. If those Pokémon are already Confused, remove that Special Condition.",
				'fr-fr': "Vos Pokémon Water ne peuvent pas être Confus. Si ces Pokémon sont déjà Confus, retirez cet État Spécial.",
				'es-es': "Tus Pokémon Water no pueden pasar a estar Confundidos. Si esos Pokémon ya están Confundidos, elimina esa Condición Especial.",
				'it-it': "I tuoi Pokémon Water non possono venire confusi. Se tali Pokémon sono già confusi, rimuovine la condizione speciale.",
				'pt-br': "Seus Pokémon Water não podem ser Confundidos. Se aqueles Pokémon já estiverem Confusos, remova aquela Condição Especial.",
				'de-de': "Deine Water-Pokémon können nicht verwirrt werden. Wenn jene Pokémon bereits verwirrt sind, verliert jener Spezielle Zustand seine Wirkung."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Water Pulse",
				'fr-fr': "Vibraqua",
				'es-es': "Hidropulso",
				'it-it': "Idropulsar",
				'pt-br': "Pulso d’Água",
				'de-de': "Aquawelle"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It drifts in warm seas. It always returns to where it was born, no matter how far it may have drifted.",
	},

	thirdParty: {
		cardmarket: 363502,
		tcgplayer: 175416
	}
}

export default card
