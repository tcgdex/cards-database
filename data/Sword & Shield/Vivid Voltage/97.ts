import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Mudsdale",
		fr: "Bourrinos",
		es: "Mudsdale",
		it: "Mudsdale",
		pt: "Mudsdale",
		de: "Pampross"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Mudbray",
		fr: "Tiboudet",
		es: "Mudbray",
		it: "Mudbray",
		pt: "Mudbray",
		de: "Pampuli"
	},

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Mud Bomb",
				fr: "Boue-Bombe",
				es: "Bomba Fango",
				it: "Pantanobomba",
				pt: "Bomba de Lama",
				de: "Schlammbombe"
			},

			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Heavy Slam",
				fr: "Tacle Lourd",
				es: "Cuerpo Pesado",
				it: "Pesobomba",
				pt: "Golpe Pesado",
				de: "Rammboss"
			},
			effect: {
				en: "This attack does 30 less damage for each Colorless in your opponent’s Active Pokémon’s Retreat Cost.",
				fr: "Cette attaque inflige 30 dégâts de moins pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 30 puntos de daño menos por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 30 danni in meno per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 30 pontos de dano a menos para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte weniger zu."
			},
			damage: "180-",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Mud that hardens around a Mudsdale’s legs sets harder than stone. It’s so hard that it allows this Pokémon to scrap a truck with a single kick."
	}
}

export default card
