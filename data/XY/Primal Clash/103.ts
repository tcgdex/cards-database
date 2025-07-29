import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Azumarill",
		fr: "Azumarill",
		es: "Azumarill",
		it: "Azumarill",
		pt: "Azumarill",
		de: "Azumarill"
	},

	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		184,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Marill",
		fr: "Marill",
		es: "Marill",
		it: "Marill",
		pt: "Marill",
		de: "Marill"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bubble Beam",
				fr: "Bulles d'O",
				es: "Rayo Burbuja",
				it: "Bollaraggio",
				pt: "Jato de Bolhas",
				de: "Blubbstrahl"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Superpower",
				fr: "Surpuissance",
				es: "Fuerza Bruta",
				it: "Troppoforte",
				pt: "Superpoder",
				de: "Kraftkoloss"
			},
			effect: {
				en: "You may do 30 more damage. If you do, this Pokémon does 30 damage to itself.",
				fr: "Vous pouvez infliger 30 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 30 dégâts.",
				es: "Puedes hacer 30 puntos de daño más. Si lo haces, este Pokémon se hace 30 puntos de daño a sí mismo.",
				it: "Puoi infliggere 30 danni in più. Se lo fai, questo Pokémon infligge 30 danni a se stesso.",
				pt: "Você pode causar 30 de danos adicionais. Se você fizer isso, o Pokémon causará 30 de danos a ele mesmo.",
				de: "Du kannst mit diesem Angriff 30 weitere Schadenspunkte zufügen. Wenn du das machst, fügt dieses Pokémon sich selbst 30 Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 273634
	}
}

export default card
