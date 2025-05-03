import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Cornerstone Mask Ogerpon ex",
		fr: "Ogerpon Masque de la Pierre-ex",
		es: "Ogerpon Máscara Cimiento ex",
		pt: "Ogerpon Máscara Alicerce ex",
		it: "Ogerpon Maschera Fondamenta-ex",
		de: "Fundamentmaske-Ogerpon-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Cornerstone Stance",
			fr: "Posture de la Pierre",
			es: "Posición Cimiento",
			pt: "Postura de Alicerce",
			it: "Posa Fondamenta",
			de: "Fundamentabwehr"
		},

		effect: {
			en: "Prevent all damage from attacks done to this Pokémon by your opponent's Pokémon that have an Ability.",
			fr: "Évitez tous les dégâts d'attaques infligés à ce Pokémon par les Pokémon de votre adversaire ayant un talent.",
			es: "Se evita todo el daño infligido a este Pokémon por ataques de los Pokémon de tu rival que tengan una habilidad.",
			pt: "Previna todo o dano de ataques causado a este Pokémon pelos Pokémon do seu oponente que têm uma Habilidade.",
			it: "Previeni tutti i danni degli attacchi inflitti a questo Pokémon dai Pokémon del tuo avversario che hanno un'abilità.",
			de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon deines Gegners, die eine Fähigkeit haben, zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Demolish",
			fr: "Démolition",
			es: "Derruir",
			pt: "Demolir",
			it: "Demolire",
			de: "Demolieren"
		},

		effect: {
			en: "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por Debilidad o Resistencia, ni por ningún efecto en el Pokémon Activo de tu rival.",
			pt: "O dano deste ataque não é afetado por Fraqueza ou Resistência, ou por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			it: "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			de: "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 140
	}],

	retreat: 1,
	regulationMark: "H",
	variants: {
		holo: true,
		normal: false
	}
}

export default card