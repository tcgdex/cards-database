import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Inteleon VMAX",
		fr: "Lézargus VMAX",
		es: "Inteleon VMAX",
		it: "Inteleon VMAX",
		pt: "Inteleon VMAX",
		de: "Intelleon VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],

	evolveFrom: {
		en: "Inteleon V",
		fr: "Lézargus-V",
		es: "Inteleon V",
		it: "Inteleon-V",
		pt: "Inteleon V",
		de: "Intelleon-V"
	},

	attacks: [{
		name: {
			en: "Hydro Snipe",
			fr: "Hydro-Frappe",
			es: "Disparo Acuático",
			it: "Idromira",
			pt: "Hidroatirador",
			de: "Hydroschütze"
		},

		effect: {
			en: "You may put an Energy attached to your opponent’s Active Pokémon into their hand.",
			fr: "Vous pouvez ajouter à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
			es: "Puedes poner 1 Energía unida al Pokémon Activo de tu rival en su mano.",
			it: "Puoi prendere un’Energia assegnata al Pokémon attivo del tuo avversario e aggiungerla alle carte che ha in mano.",
			pt: "Você pode colocar 1 Energia ligada ao Pokémon Ativo do seu oponente na mão dele(a).",
			de: "Du kannst deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand geben."
		},

		damage: 60,
		cost: ["Water"]
	}, {
		name: {
			en: "Max Bullet",
			fr: "Projectilomax",
			es: "Maxibala",
			it: "Dynadardo",
			pt: "Projétil Max",
			de: "Dyna-Kugel"
		},

		effect: {
			en: "This attack also does 60 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 60 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 60 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 60 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 60 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 160,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",
	suffix: "V"
}

export default card