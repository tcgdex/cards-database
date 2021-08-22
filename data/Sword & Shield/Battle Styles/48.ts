import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Luxray",
		fr: "Luxray",
		es: "Luxray",
		it: "Luxray",
		pt: "Luxray",
		de: "Luxtra"
	},

	illustrator: "Kazuma Koda",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	evolveFrom: {
		en: "Luxio",
		fr: "Luxio"
	},

	attacks: [{
		name: {
			en: "Electrostep",
			fr: "Électro-Pas",
			es: "Electropaso",
			it: "Elettropasso",
			pt: "Passo Elétrico",
			de: "Elektroschritt"
		},

		effect: {
			en: "This attack does 40 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.) Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Cette attaque inflige 40 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) Échangez ce Pokémon contre l’un de vos Pokémon de Banc.",
			es: "Este ataque hace 40 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			it: "Questo attacco infligge 40 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina. Scambia questo Pokémon con uno della tua panchina.",
			pt: "Este ataque causa 40 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		cost: ["Lightning"]
	}, {
		name: {
			en: "Scar Strikes",
			fr: "Acharnement",
			es: "Golpes en la Cicatriz",
			it: "Sfregiocolpi",
			pt: "Golpe na Ferida",
			de: "Narbenschläge"
		},

		effect: {
			en: "If your opponent’s Active Pokémon already has any damage counters on it, this attack does 100 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 100 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 100 pontos de dano a mais.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "100+",
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "Luxray’s ability to see through objects comes in handy when it’s scouting for danger."
	}
}

export default card