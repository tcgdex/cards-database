import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Electivire",
		fr: "Élekable",
		es: "Electivire",
		it: "Electivire",
		pt: "Electivire",
		de: "Elevoltek"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		466,
	],

	hp: 140,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Electabuzz",
		fr: "Élektek",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunder Punch",
				fr: "Poing-Éclair",
				es: "Puño Trueno",
				it: "Tuonopugno",
				pt: "Soco Trovoada",
				de: "Donnerschlag"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 60 more damage. If tails, this Pokémon does 20 damage to itself.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 60 dégâts supplémentaires. Si c’est pile, ce Pokémon s’inflige 20 dégâts.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más. Si sale cruz, este Pokémon se hace 20 puntos de daño a sí mismo.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più. Se esce croce, questo Pokémon infligge 20 danni a se stesso.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 60 pontos de dano a mais. Se sair coroa, este Pokémon causará 20 pontos de dano a si mesmo.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu. Bei Zahl fügt dieses Pokémon sich selbst 20 Schadenspunkte zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giga Impact",
				fr: "Giga Impact",
				es: "Giga Impacto",
				it: "Gigaimpatto",
				pt: "Gigaimpacto",
				de: "Gigastoß"
			},
			effect: {
				en: "This Pokémon can’t attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				es: "Este Pokémon no puede atacar durante tu próximo turno.",
				it: "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				pt: "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 170,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 299447
	}
}

export default card
