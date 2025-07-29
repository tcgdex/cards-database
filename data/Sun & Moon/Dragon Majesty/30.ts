import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Phione",
		fr: "Phione",
		es: "Phione",
		it: "Phione",
		pt: "Phione",
		de: "Phione"
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
				en: "Murmurs of the Sea",
				fr: "Murmures Marins",
				es: "Murmullo del Mar",
				it: "Richiamo del Mare",
				pt: "Murmúrios Marinhos",
				de: "Murmeln des Meeres"
			},
			effect: {
				en: "Your Water Pokémon can’t be Confused. If those Pokémon are already Confused, remove that Special Condition.",
				fr: "Vos Pokémon Water ne peuvent pas être Confus. Si ces Pokémon sont déjà Confus, retirez cet État Spécial.",
				es: "Tus Pokémon Water no pueden pasar a estar Confundidos. Si esos Pokémon ya están Confundidos, elimina esa Condición Especial.",
				it: "I tuoi Pokémon Water non possono venire confusi. Se tali Pokémon sono già confusi, rimuovine la condizione speciale.",
				pt: "Seus Pokémon Water não podem ser Confundidos. Se aqueles Pokémon já estiverem Confusos, remova aquela Condição Especial.",
				de: "Deine Water-Pokémon können nicht verwirrt werden. Wenn jene Pokémon bereits verwirrt sind, verliert jener Spezielle Zustand seine Wirkung."
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
				en: "Water Pulse",
				fr: "Vibraqua",
				es: "Hidropulso",
				it: "Idropulsar",
				pt: "Pulso d’Água",
				de: "Aquawelle"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
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

	thirdParty: {
		cardmarket: 363502
	}
}

export default card
