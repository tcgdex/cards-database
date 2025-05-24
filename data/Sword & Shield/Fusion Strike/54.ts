import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [131],
	set: Set,

	name: {
		en: "Lapras",
		fr: "Lokhlass",
		es: "Lapras",
		it: "Lapras",
		pt: "Lapras",
		de: "Lapras"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Naoki Saito",

	description: {
		en: "Crossing icy seas is no issue for this cold-resistant Pokémon. Its smooth skin is a little cool to the touch."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Icy Wind",
			fr: "Vent Glace",
			de: "Eissturm",
			es: "Viento Hielo",
			pt: "Vento Congelante",
			it: "Ventogelato"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Splash Arch",
			fr: "Éclaboussure Arquée",
			de: "Platschbogen",
			es: "Salpicadura en Arco",
			pt: "Arco Borrifador",
			it: "Arcosplash"
		},

		effect: {
			en: "Put all Energy attached to this Pokémon into your hand. This attack does 100 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Ajoutez à votre main toutes les Énergies attachées à ce Pokémon. Cette attaque inflige 100 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Nimm alle an dieses Pokémon angelegten Energien auf deine Hand. Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 100 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Pon todas las Energías unidas a este Pokémon en tu mano. Este ataque hace 100 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Coloque todas as Energias ligadas a este Pokémon na sua mão. Este ataque causa 100 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			it: "Prendi tutte le Energie assegnate a questo Pokémon e aggiungile alle carte che hai in mano. Questo attacco infligge 100 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card