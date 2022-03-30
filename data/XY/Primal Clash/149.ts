import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Primal Kyogre EX",
		fr: "PrimoKyogre EX",
		es: "Kyogre Primigenio EX",
		it: "Archeo Kyogre EX",
		pt: "Kyogre PrimitivoEX",
		de: "ProtoKyogre EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		382,
	],

	hp: 240,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Kyogre-EX",
		fr: "Kyogre-EX",
		es: "Kyogre-EX",
		it: "Kyogre-EX",
		pt: "Kyogre-EX",
		de: "Kyogre-EX"
	},

	stage: "MEGA",

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
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Tidal Storm",
				fr: "Tempête Océanique",
				es: "Mareas de Tormenta",
				it: "Tempesta Marina",
				pt: "Tempestade Tidal",
				de: "Gezeitensturm"
			},
			effect: {
				en: "Move 2 Energy from this Pokémon to 1 of your Benched Pokémon. This attack does 30 damage to each of your opponent's Benched Pokémon-EX. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Déplacez 2 Énergies de ce Pokémon vers l'un de vos Pokémon de Banc. Cette attaque inflige 30 dégâts à chacun des Pokémon-EX de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Mueve 2 Energías de este Pokémon a 1 de tus Pokémon en Banca. Este ataque hace 30 puntos de daño a cada uno de los Pokémon-EX en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Sposta due Energie da questo Pokémon a uno di quelli nella tua panchina. Questo attacco infligge 30 danni a ciascun Pokémon-EX nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Mova 2 Energias deste Pokémon para 1 dos seus Pokémon no Banco. Este ataque causa 30 de danos a cada Pokémon-EX de seu oponente no Banco. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Verschiebe 2 an dieses Pokémon angelegte Energien auf 1 Pokémon auf deiner Bank. Dieser Angriff fügt jedem Pokémon-EX auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 150,

		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	suffix: "EX"
}

export default card
