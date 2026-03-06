import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [981],
	set: Set,

	name: {
		en: "Farigiraf ex",
		fr: "Farigiraf-ex",
		es: "Farigiraf ex",
		it: "Farigiraf-ex",
		pt: "Farigiraf ex",
		de: "Farigiraf-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Darkness"],
	evolveFrom: {
		en: "Girafarig",
		fr: "Girafarig",
		es: "Girafarig",
		it: "Girafarig",
		pt: "Girafarig",
		de: "Girafarig"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Armor Tail",
			fr: "Armure Caudale",
			es: "Cola Armadura",
			it: "Codarmatura",
			pt: "Cauda de Armadura",
			de: "Schweifrüstung"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Basic Pokémon ex.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-ex de base de votre adversaire.",
			es: "Se evita todo el daño infligido a este Pokémon por ataques de los Pokémon ex Básicos de tu rival.",
			it: "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-ex Base del tuo avversario.",
			pt: "Previna todo o dano causado a este Pokémon por ataques dos Pokémon ex Básicos do seu oponente.",
			de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Basis-Pokémon-ex deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Dirty Beam",
			fr: "Rayon Abject",
			es: "Rayo Sucio",
			it: "Raggio Sleale",
			pt: "Feixe Traiçoeiro",
			de: "Fieser Strahl"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo"
		}
	],

	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 760824
	}
}

export default card