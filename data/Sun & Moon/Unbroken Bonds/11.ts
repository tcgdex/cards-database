import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Venomoth",
		fr: "Aéromite",
		es: "Venomoth",
		it: "Venomoth",
		pt: "Venomoth",
		de: "Omot"
	},

	illustrator: "Mina Nakai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		49,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Venonat",
		fr: "Mimitoss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Assassin Flight",
				fr: "Vol Assassin",
				es: "Vuelo Asesino",
				it: "Svolazzata Aggressiva",
				pt: "Voo Agressivo",
				de: "Meuchelflug"
			},
			effect: {
				en: "You can use this attack only if your opponent’s Active Pokémon is affected by a Special Condition. This attack does 90 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous ne pouvez utiliser cette attaque que si le Pokémon Actif de votre adversaire est affecté par un État Spécial. Cette attaque inflige 90 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Puedes usar este ataque solo si el Pokémon Activo de tu rival se ve afectado por una Condición Especial. Este ataque hace 90 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Puoi usare questo attacco solo se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale. Questo attacco infligge 90 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Você só pode usar este ataque se o Pokémon Ativo do seu oponente estiver afetado por uma Condição Especial. Este ataque causa 90 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Du kannst diese Attacke nur einsetzen, wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist. Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 90 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Powder",
				fr: "Poudre Toxik",
				es: "Polvo Veneno",
				it: "Velenpolvere",
				pt: "Pó Venenoso",
				de: "Giftpuder"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 30,

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
