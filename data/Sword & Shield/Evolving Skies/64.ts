import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Espeon V",
		fr: "Mentali V",
		es: "Espeon V",
		it: "Espeon V",
		pt: "Espeon V",
		de: "Psiana V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "5ban Graphics",

	attacks: [{
		name: {
			en: "Zen Shot",
			fr: "Tir Zen",
			es: "Disparo Zen",
			it: "Colpo Zen",
			pt: "Zen Shot",
			de: "Zen-Schuss"
		},

		effect: {
			en: "This attack does 60 damage to 1 of your opponent's Pokémon V. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 60 dégâts à l'un des Pokémon-V de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 60 puntos de daño a 1 de los Pokémon V de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 60 danni a uno dei Pokémon-V del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "This attack does 60 damage to 1 of your opponent's Pokémon V. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			de: "Diese Attacke fügt 1 Pokémon-V deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Psychic"]
	}, {
		name: {
			en: "Super Psy Bolt",
			fr: "Super Psy",
			es: "Superrayo Psi",
			it: "Superpsico",
			pt: "Super Psy Bolt",
			de: "Super-Psischlag"
		},

		damage: 120,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	dexId: [196],
	regulationMark: "E",
	suffix: "V",

	thirdParty: {
		cardmarket: 574112,
		tcgplayer: 246684
	}
}

export default card
