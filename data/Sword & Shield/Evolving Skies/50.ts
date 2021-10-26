import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Raichu",
		fr: "Raichu",
		es: "Raichu",
		it: "Raichu",
		pt: "Raichu",
		de: "Raichu"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Stage1",
	illustrator: "Mitsuhiro Arita",

	attacks: [{
		name: {
			en: "Big Sparking",
			fr: "Étincelle Géante",
			es: "Gran Chispazo",
			it: "Granscintilla",
			pt: "Big Sparking",
			de: "Großer Funke"
		},

		effect: {
			en: "This attack does 50 damage to each Pokémon V and Pokémon-GX (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à chacun des Pokémon-V et Pokémon-GX (les vôtres et ceux de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 50 puntos de daño a cada Pokémon V y Pokémon-GX (tanto tuyos como de tu rival). (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 50 danni a ciascun Pokémon-V e Pokémon-GX, sia tuo che del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "This attack does 50 damage to each Pokémon V and Pokémon-GX (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			de: "Diese Attacke fügt jedem Pokémon-V und Pokémon-GX (deinen und denen deines Gegners) 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Lightning"]
	}, {
		name: {
			en: "Thunderbolt",
			fr: "Tonnerre",
			es: "Rayo",
			it: "Fulmine",
			pt: "Thunderbolt",
			de: "Donnerblitz"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toute l'Énergie de ce Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			pt: "Discard all Energy from this Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 180,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	description: {
		en: "If its electric pouches run empty, it raises its tail to gather electricity from the atmosphere."
	},

	dexId: [26],
	regulationMark: "E"
}

export default card
