import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Whiscash",
		fr: "Barbicha",
		es: "Whiscash",
		it: "Whiscash",
		pt: "Whiscash",
		de: "Welsar"
	},

	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		340,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Barboach",
		fr: "Barloche",
		es: "Barboach",
		it: "Barboach",
		pt: "Barboach",
		de: "Schmerbe"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Croissance α",
				en: "α Growth",
				es: "{title}:",
				it: "{title}:",
				pt: "{title}:",
				de: "{title}:"
			},
			effect: {
				fr: "Lorsque vous attachez une carte Énergie de votre main à ce Pokémon (excepté à la suite d'une attaque, d'un talent ou d'une carte Dresseur), vous pouvez attacher 2 cartes Énergie au lieu d'une.",
				en: "When you attach an Energy card from your hand to this Pokémon (except with an attack, Ability, or Trainer card), you may attach 2 Energy cards.",
				es: "{title}: Cuando unas 1 carta de Energía de tu mano a este Pokémon (excepto con un ataque, habilidad o carta de Entrenador), puedes unir 2 cartas de Energía en vez de 1.",
				it: "{title}: Quando assegni una carta Energia a questo Pokémon dalla tua mano (a meno che non sia in conseguenza di un attacco, un'abilità o una carta Allenatore), puoi assegnare due carte Energia.",
				pt: "{title}: Quando você liga um card de Energia de sua mão neste Pokémon (exceto com um ataque, Habilidade ou card de Treinador), você pode ligar 2 cards de Energia.",
				de: "{title}: Wenn du 1 Energiekarte von deiner Hand an dieses Pokémon anlegst (außer auf Anweisung einer Attacke, Fähigkeit oder Trainerkarte), kannst du bis zu 2 Energiekarten anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				es: "Pistola Agua",
				it: "Pistolacqua",
				pt: "Revolver d'Água",
				de: "Aquaknarre"
			},

			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Earthquake",
				fr: "Séisme",
				es: "Terremoto",
				it: "Terremoto",
				pt: "Terremoto",
				de: "Erdbeben"
			},
			effect: {
				en: "This attack does 20 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 20 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 20 danni a ciascuno dei tuoi Pokémon in panchina. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Esse ataque causa 20 de danos a cada um dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Dieser Angriff fügt jedem Pokémon auf deiner Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 273571
	}
}

export default card
