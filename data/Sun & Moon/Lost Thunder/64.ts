import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Popplio",
		fr: "Otaquin",
		es: "Popplio",
		it: "Popplio",
		pt: "Popplio",
		de: "Robball"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		728,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Disarming Voice",
				fr: "Voix Enjôleuse",
				es: "Voz Cautivadora",
				it: "Incantavoce",
				pt: "Voz Desarmante",
				de: "Säuselstimme"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Confundido.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verwirrt."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
