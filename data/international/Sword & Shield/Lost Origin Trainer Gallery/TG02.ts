import { Card } from "models/database/card"
import Set from "../Lost Origin Trainer Gallery"

const card: Card = {
	dexId: [407],
	set: Set,

	name: {
		'en-us': "Roserade",
		'fr-fr': "Roserade",
		'es-es': "Roserade",
		'it-it': "Roserade",
		'pt-br': "Roserade",
		'de-de': "Roserade"
	},

	illustrator: "saino misaki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Roselia",
		'fr-fr': "Rosélia",
		'es-es': "Roselia",
		'it-it': "Roselia",
		'pt-br': "Roselia",
		'de-de': "Roselia"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Poisonous Whip",
			'fr-fr': "Fouet Empoisonné",
			'es-es': "Látigo Venenoso",
			'it-it': "Frustata Velenosa",
			'pt-br': "Chicote Venenoso",
			'de-de': "Giftpeitsche"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Assassin's Rose",
			'fr-fr': "Rose Assassine",
			'es-es': "Rosa Asesina",
			'it-it': "Rosa Aggressiva",
			'pt-br': "Rosa Facínora",
			'de-de': "Meuchelrose"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is affected by a Special Condition, this attack also does 60 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige aussi 60 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque también hace 60 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge anche 60 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver afetado por uma Condição Especial, este ataque também causará 60 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt diese Attacke auch 1 Pokémon auf der Bank deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674224,
				tcgplayer: 284254
			}
		},
	],
}

export default card
