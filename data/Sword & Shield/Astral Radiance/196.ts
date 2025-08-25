import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [900],
	set: Set,

	name: {
		en: "Kleavor VSTAR",
		fr: "Hachécateur VSTAR",
		es: "Kleavor V-ASTRO",
		it: "Kleavor V ASTRO",
		pt: "Kleavor V-ASTRO",
		de: "Axantor VSTAR"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],

	evolveFrom: {
		en: "Kleavor V",
		fr: "Hachécateur-V",
		es: "Kleavor V",
		it: "Kleavor-V",
		pt: "Kleavor V",
		de: "Axantor-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Axe Break",
			fr: "Hache Brèche",
			es: "Golpe de Hacha",
			it: "Frangiscure",
			pt: "Machado Destruidor",
			de: "Axtbrecher"
		},

		effect: {
			en: "This attack also does 60 damage to 1 of your opponent's Benched Pokémon V. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 60 dégâts à l'un des Pokémon-V de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 60 puntos de daño a 1 de los Pokémon V en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 60 danni a uno dei Pokémon-V nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 60 pontos de dano a 1 dos Pokémon V no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt auch 1 Pokémon-V auf der Bank deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 120
	}, {
		cost: ["Fighting"],

		name: {
			en: "Rampaging Star",
			fr: "Saccage Star",
			es: "Astro Embestida",
			it: "Astro Infuriato",
			pt: "Fúria Astral",
			de: "Tobender Stern"
		},

		effect: {
			en: "This attack does 30 damage for each Pokémon in your discard pile. (You can't use more than 1 VSTAR Power in a game.)",
			fr: "Cette attaque inflige 30 dégâts pour chaque Pokémon dans votre pile de défausse. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			es: "Este ataque hace 30 puntos de daño por cada Pokémon en tu pila de descartes. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			it: "Questo attacco infligge 30 danni per ogni Pokémon nella tua pila degli scarti. Non puoi usare più di un Potere V ASTRO a partita.",
			pt: "Este ataque causa 30 pontos de dano para cada Pokémon na sua pilha de descarte (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			de: "Diese Attacke fügt für jedes Pokémon in deinem Ablagestapel 30 Schadenspunkte zu. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		},

		damage: "30×"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658857,
		tcgplayer: 272450
	}
}

export default card