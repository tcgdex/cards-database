import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Beedrill",
		fr: "Dardargnan",
		es: "Beedrill",
		it: "Beedrill",
		pt: "Beedrill",
		de: "Bibor"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sudden Sting",
				fr: "Piqûre Inattendue",
				es: "Picotazo Repentino",
				it: "Rapidospina",
				pt: "Estocada Súbita",
				de: "Plötzlicher Stich"
			},
			effect: {
				en: "If this Pokémon evolved from Kakuna during this turn, your opponent’s Active Pokémon is now Paralyzed and Poisoned.",
				fr: "Si ce Pokémon a évolué de Coconfort pendant ce tour, le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
				es: "Si este Pokémon ha evolucionado de Kakuna durante este turno, el Pokémon Activo de tu rival pasa a estar Paralizado y Envenenado.",
				it: "Se questo Pokémon si è evoluto da Kakuna durante questo turno, il Pokémon attivo del tuo avversario viene paralizzato e avvelenato.",
				pt: "Se este Pokémon evoluiu de Kakuna durante esta vez de jogar, o Pokémon Ativo do seu oponente será Paralisado e Envenenado.",
				de: "Wenn sich dieses Pokémon während dieses Zuges aus Kokuna entwickelt hat, ist das Aktive Pokémon deines Gegners jetzt paralysiert und vergiftet."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sharp Sting",
				fr: "Piqûre Pointue",
				es: "Aguijón Afilado",
				it: "Tagliospina",
				pt: "Ferroada Afiada",
				de: "Scharfer Stich"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
