import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [382],
	set: Set,

	name: {
		en: "Kyogre",
		fr: "Kyogre",
		es: "Kyogre",
		it: "Kyogre",
		pt: "Kyogre",
		de: "Kyogre"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Wave Summoning",
			fr: "Vague Invoquée",
			es: "Invocación de Olas",
			it: "Radunonda",
			pt: "Invocação de Onda",
			de: "Wellenbeschwörung"
		},

		effect: {
			en: "Search your deck for a Water Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie Water, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta de Energía Water y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Energia Water e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por 1 carta de Energia Water no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Water-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water", "Water", "Water", "Colorless"],

		name: {
			en: "Dynamic Wave",
			fr: "Vague Dynamique",
			es: "Ola Dinámica",
			it: "Onda Dinamica",
			pt: "Onda Dinâmica",
			de: "Wuchtige Welle"
		},

		effect: {
			en: "Put 3 Energy attached to this Pokémon into your hand. This attack does 180 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Ajoutez à votre main 3 Énergies attachées à ce Pokémon. Cette attaque inflige 180 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Pon 3 Energías unidas a este Pokémon en tu mano. Este ataque hace 180 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Prendi tre Energie assegnate a questo Pokémon e aggiungile alle carte che hai in mano. Questo attacco infligge 180 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Coloque 3 Energias ligadas a este Pokémon na sua mão. Este ataque causa 180 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Nimm 3 an dieses Pokémon angelegte Energien auf deine Hand. Diese Attacke fügt 1 Pokémon deines Gegners 180 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691753
	}
}

export default card
