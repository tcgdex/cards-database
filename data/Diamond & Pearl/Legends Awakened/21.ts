import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Cradily",
		fr: "Vacilys",
		de: "Wielie"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		346,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Lileep",
		fr: "Liliep",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Drain Down",
				fr: "Assécher",
				de: "Aussaugen"
			},
			effect: {
				en: "Before doing damage, you may switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. If you do, this attack does 30 damage to the new Defending Pokémon. If the Defending Pokémon would be Knocked Out by this attack, you may remove all damage counters from Cradily.",
				fr: "Avant d'infliger des dégâts, vous pouvez échanger 1 des Pokémon Défenseurs avec 1 des Pokémon de Banc de votre adversaire. Cette attaque inflige alors 30 dégâts au nouveau Pokémon Défenseur. Si le Pokémon Défenseur est mis K.O par cette attaque, vous pouvez retirer à Vacilys tous ses marqueurs de dégât.",
				de: "Bevor der Schaden zugefügt wird, kannst du 1 Verteidigendes Pokémon gegen 1 Pokémon auf der Bank deines Gegners austauschen. Wenn du das machst, fügt dieser Angriff dem neuen Verteidigenden Pokémon 30 Schadenspunkte zu. Wenn das Verteidigende Pokémon durch diesen Angriff kampfunfähig würde, kannst du alle Schadensmarken von Wielie entfernen."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Acid",
				fr: "Acide",
				de: "Säure"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	retreat: 3,

	description: {
		fr: "Il vit dans les hauts-fonds des mers chaudes. Il déterre sa proie du sable quand la marée se retire."
	},

	thirdParty: {
		cardmarket: 278170,
		tcgplayer: 84454
	}
}

export default card
