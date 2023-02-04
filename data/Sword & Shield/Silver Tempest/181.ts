import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Skuntank V",
		fr: "Moufflair V",
		es: "Skuntank V",
		it: "Skuntank V",
		pt: "Skuntank V",
		de: "Skuntank V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Pursuit Blast",
			fr: "Poursuite Explosive",
			es: "Persecución Explosiva",
			it: "Inseguimento Esplosivo",
			pt: "Perseguição Explosiva",
			de: "Verfolgungsstoß"
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. If that Pokémon retreated from the Active Spot during your opponent's last turn, this attack does 120 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. Si ce Pokémon-là a battu en retraite depuis le Poste Actif pendant le dernier tour de votre adversaire, cette attaque inflige 120 dégâts à la place. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. Si ese Pokémon se retiró del Puesto Activo durante el último turno de tu rival, este ataque hace 120 puntos de daño en vez de 30. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Se quel Pokémon si è ritirato dalla posizione attiva durante l'ultimo turno del tuo avversario, questo attacco infligge invece 120 danni. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. Se aquele Pokémon recuou do Campo Ativo durante o último turno do seu oponente, este ataque causará 120 pontos de dano ao invés de 30 (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. Wenn sich jenes Pokémon während des letzten Zuges deines Gegners aus der Aktiven Position zurückgezogen hat, fügt diese Attacke stattdessen 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Shrieking Poison",
			fr: "Poison Hurleur",
			es: "Veneno Chillón",
			it: "Velenostrido",
			pt: "Veneno Gritante",
			de: "Kreischendes Gift"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card