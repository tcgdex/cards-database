import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [879],
	name: {
		en: "Copperajah",
		fr: "Pachyradjah",
		es: "Copperajah",
		it: "Copperajah",
		pt: "Copperajah",
		de: "Patinaraja"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 190,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Cufant",
		fr: "Charibari",
		es: "Cufant",
		it: "Cufant",
		pt: "Cufant",
		de: "Kupfanti"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Antibacterial Skin",
				fr: "Peau Stérilisante",
				es: "Piel Antibacteriana",
				it: "Pelle Battericida",
				pt: "Pele Antibacteriana",
				de: "Antibakterielle Haut"
			},
			effect: {
				en: "This Pokémon can't be affected by any Special Conditions.",
				fr: "Ce Pokémon ne peut être affecté par aucun État Spécial.",
				es: "Este Pokémon no puede verse afectado por ninguna Condición Especial.",
				it: "Questo Pokémon non può essere influenzato da condizioni speciali.",
				pt: "Este Pokémon não pode ser afetado por quaisquer Condições Especiais.",
				de: "Dieses Pokémon kann nicht von Speziellen Zuständen betroffen werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vengeful Stomp",
				fr: "Écrasement Vengeur",
				es: "Pisotón Vengativo",
				it: "Pestone Livoroso",
				pt: "Pisoteada Vingativa",
				de: "Rächender Stampfer"
			},
			effect: {
				en: "If your Benched Pokémon have any damage counters on them, this attack does 120 more damage.",
				fr: "Si des marqueurs de dégâts sont placés sur vos Pokémon de Banc, cette attaque inflige 120 dégâts supplémentaires.",
				es: "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 120 puntos de daño más.",
				it: "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 120 danni in più.",
				pt: "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 120 pontos de dano a mais.",
				de: "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 120 Schadenspunkte mehr zu."
			},
			damage: "120+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "They came over from another region long ago and worked together with humans. Their green skin is resistant to water."
	}
}

export default card
