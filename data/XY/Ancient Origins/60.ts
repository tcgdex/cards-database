import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Goodra",
		fr: "Muplodocus",
		es: "Goodra",
		it: "Goodra",
		pt: "Goodra",
		de: "Viscogon"
	},
	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		706,
	],
	hp: 150,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Sliggoo",
		fr: "Colimucus",
		es: "Sliggoo",
		it: "Sliggoo",
		pt: "Sliggoo",
		de: "Viscargot"
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Liquid Blow",
				fr: "Coup Liquide",
				es: "Golpe Líquido",
				it: "Colpofluido",
				pt: "Sopro Líquido",
				de: "Flüssiger Hieb"
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent's Pokémon for each Colorless in its Retreat Cost. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire pour chaque Colorless dans son Coût de Retraite. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 20 puntos de daño a 1 de los Pokémon de tu rival por cada Colorless en su Coste de Retirada. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario per ogni Colorless nel suo costo di ritirata. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 20 de danos a um dos Pokémon do seu oponente para cada Colorless no seu Custo para Recuar. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Dieser Angriff fügt 1 Pokémon deines Gegners 20 Schadenspunkte für jedes Colorless-Symbol in dessen Rückzugskosten zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shining Breath",
				fr: "Souffle Étincelant",
				es: "Aliento Brillante",
				it: "Spirolucente",
				pt: "Hálito Brilhante",
				de: "Leuchtender Atem"
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon can't be affected by any Special Conditions.",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon ne peut être affecté par aucun État Spécial.",
				es: "Durante el próximo turno de tu rival, este Pokémon no se puede ver afectado por ninguna Condición Especial.",
				it: "Durante il prossimo turno del tuo avversario, questo Pokémon non può essere influenzato da condizioni speciali.",
				pt: "Durante a próxima vez do seu oponente, este Pokémon não será afetado por quaisquer Condições Especiais.",
				de: "Während des nächsten Zuges deines Gegners kann dieses Pokémon nicht von Speziellen Zuständen betroffen werden."
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
