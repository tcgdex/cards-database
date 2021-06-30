import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Zekrom",
		fr: "Zekrom",
		es: "Zekrom",
		it: "Zekrom",
		pt: "Zekrom",
		de: "Zekrom"
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		644,
	],
	hp: 130,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shred",
				fr: "Déchiquetage",
				es: "Hacer Trizas",
				it: "Tritatutto",
				pt: "Triturar",
				de: "Zerfetzer"
			},
			effect: {
				en: "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
				es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
				it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
				de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 70,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bolt Strike",
				fr: "Charge Foudre",
				es: "Ataque Fulgor",
				it: "Lucesiluro",
				pt: "Ataque de Raios",
				de: "Blitzschlag"
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon does 50 damage to itself.",
				fr: "Lancez une pièce. Si c’est pile, ce Pokémon s’inflige 50 dégâts.",
				es: "Lanza 1 moneda. Si sale cruz, este Pokémon se hace 50 puntos de daño a sí mismo.",
				it: "Lancia una moneta. Se esce croce, questo Pokémon infligge 50 danni a se stesso.",
				pt: "Jogue 1 moeda. Se sair coroa, este Pokémon causará 50 pontos de dano a si mesmo.",
				de: "Wirf 1 Münze. Bei Zahl fügt sich dieses Pokémon selbst 50 Schadenspunkte zu."
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
