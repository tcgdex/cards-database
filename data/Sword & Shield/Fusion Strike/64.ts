import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [260],
	set: Set,

	name: {
		en: "Swampert",
		fr: "Laggron",
		es: "Swampert",
		it: "Swampert",
		pt: "Swampert",
		de: "Sumpex"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	evolveFrom: {
		en: "Marshtomp",
		fr: "Flobio",
		es: "Marshtomp",
		it: "Marshtomp",
		pt: "Marshtomp",
		de: "Moorabbel"
	},

	stage: "Stage2",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Masakazu Fukuda",

	description: {
		en: "It can swim while towing a large ship. It bashes down foes with a swing of its thick arms."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Muddy Maker",
			fr: "Faiseur de Boue",
			de: "Lehmmacher",
			es: "Creador de Lodo",
			pt: "Criador Lamacento",
			it: "Creafango"
		},

		effect: {
			en: "Once during your turn, you may attach a {W} Energy card or a {F} Energy card from your hand to 1 of your Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie {W} ou une carte Énergie {F} de votre main à l'un de vos Pokémon.",
			de: "Einmal während deines Zuges kannst du 1 {W}-Energiekarte oder 1 {F}-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía {W} o 1 carta de Energía {F} de tu mano a 1 de tus Pokémon.",
			pt: "Uma vez durante o seu turno, você poderá ligar 1 carta de Energia {W} ou 1 carta de Energia {F} da sua mão a 1 dos seus Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia {W} o una carta Energia {F} dalla tua mano."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Earthquake",
			fr: "Séisme",
			de: "Erdbeben",
			es: "Terremoto",
			pt: "Terremoto",
			it: "Terremoto"
		},

		damage: 180,

		effect: {
			en: "This attack also does 20 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 20 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Este ataque también hace 20 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque também causa 20 pontos de dano a cada um dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			it: "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
