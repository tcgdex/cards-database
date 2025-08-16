import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Nidoking",
		fr: "Nidoking",
		es: "Nidoking",
		it: "Nidoking",
		pt: "Nidoking",
		de: "Nidoking"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		34,
	],

	hp: 160,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Nidorino",
		fr: "Nidorino",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drag Off",
				fr: "Traîne",
				es: "Jalón",
				it: "Trascinato Via",
				pt: "Arrastar para Fora",
				de: "Wegzerren"
			},
			effect: {
				en: "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon. This attack does 50 damage to the new Active Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Cette attaque inflige 50 dégâts au nouveau Pokémon Actif.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. Este ataque hace 50 puntos de daño al nuevo Pokémon Activo.",
				it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Questo attacco infligge 50 danni al nuovo Pokémon attivo.",
				pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). Este ataque causa 50 pontos de dano ao novo Pokémon Ativo.",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Diese Attacke fügt dem neuen Aktiven Pokémon 50 Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "King’s Drum",
				fr: "Tambour du Souverain",
				es: "Redoble del Rey",
				it: "Nidotamburo",
				pt: "Pancada do Rei",
				de: "Trommeln des Königs"
			},
			effect: {
				en: "If Nidoqueen is on your Bench, this attack does 100 more damage.",
				fr: "Si Nidoqueen est sur votre Banc, cette attaque inflige 100 dégâts supplémentaires.",
				es: "Si Nidoqueen está en tu Banca, este ataque hace 100 puntos de daño más.",
				it: "Se Nidoqueen è nella tua panchina, questo attacco infligge 100 danni in più.",
				pt: "Se Nidoqueen estiver no seu Banco, este ataque causará 100 pontos de dano a mais.",
				de: "Wenn sich Nidoqueen auf deiner Bank befindet, fügt diese Attacke 100 Schadenspunkte mehr zu."
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 368989,
		tcgplayer: 183837
	}
}

export default card
