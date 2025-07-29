import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Minior",
		fr: "Météno",
		es: "Minior",
		it: "Minior",
		pt: "Minior",
		de: "Meteno"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		774,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Swift",
				fr: "Météores",
				es: "Rapidez",
				it: "Comete",
				pt: "Ataque Veloz",
				de: "Sternschauer"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Weakness, Resistance, or any other effects on your opponent’s Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
				es: "El daño de este ataque no se ve afectado por Debilidad, Resistencia o cualquier otro efecto en el Pokémon Activo de tu rival.",
				it: "I danni di questo attacco non sono influenzati dalla debolezza, dalla resistenza o da qualsiasi altro effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "O dano deste ataque não é afetado por Fraqueza, Resistência ou quaisquer outros efeitos no Pokémon Ativo do seu oponente.",
				de: "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder alle anderen Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Cosmicsplosion",
				fr: "Explosion Cosmique",
				es: "Explosión Cósmica",
				it: "Esplodicosmo",
				pt: "Explósmica",
				de: "Kosmiksplosion"
			},
			effect: {
				en: "This Pokémon is Knocked Out.",
				fr: "Ce Pokémon est K.O.",
				es: "Este Pokémon queda Fuera de Combate.",
				it: "Questo Pokémon viene messo KO.",
				pt: "Este Pokémon é Nocauteado.",
				de: "Dieses Pokémon ist kampfunfähig."
			},
			damage: 190,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 297692
	}
}

export default card
