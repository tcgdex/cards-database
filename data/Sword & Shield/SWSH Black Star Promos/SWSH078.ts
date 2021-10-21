import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Orbeetle V",
		fr: "Astronelle V",
		es: "Orbeetle V",
		it: "Orbeetle V",
		pt: "Orbeetle V",
		de: "Maritellit V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Strafe",
			fr: "Bombarder",
			es: "Pasada de Ataque",
			it: "Mitragliare",
			pt: "Strafe",
			de: "Beharken"
		},

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
			it: "Puoi scambiare questo Pokémon con uno della tua panchina.",
			pt: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			en: "Mysterious Wave",
			fr: "Onde Mystérieuse",
			es: "Onda Misteriosa",
			it: "Onda Enigmatica",
			pt: "Mysterious Wave",
			de: "Geheimnisvolle Welle"
		},

		effect: {
			en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu."
		},

		damage: "50+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	stage: "Basic",
	dexId: [826],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V"
}

export default card
