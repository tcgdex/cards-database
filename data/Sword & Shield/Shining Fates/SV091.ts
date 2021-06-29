import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Pachyradjah",
		en: "Copperajah",
		es: "Copperajah",
		it: "Copperajah",
		pt: "Copperajah",
		de: "Patinaraja"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	evolveFrom: {
		fr: "Charibari",
		en: "Cufant"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Peau Stérilisante",
			en: "Antibacterial Skin",
			es: "Piel Antibacteriana",
			it: "Pelle Battericida",
			pt: "Pele Antibacteriana",
			de: "Antibakterielle Haut"
		},

		effect: {
			fr: "Ce Pokémon ne peut être affecté par aucun État Spécial.",
			en: "This Pokémon can’t be affected by any Special Conditions.",
			es: "Este Pokémon no puede verse afectado por ninguna Condición Especial.",
			it: "Questo Pokémon non può essere influenzato da condizioni speciali.",
			pt: "Este Pokémon não pode ser afetado por quaisquer Condições Especiais.",
			de: "Dieses Pokémon kann nicht von Speziellen Zuständen betroffen werden."
		}
	}],

	attacks: [{
		name: {
			fr: "Écrasement Vengeur",
			en: "Vengeful Stomp",
			es: "Pisotón Vengativo",
			it: "Pestone Livoroso",
			pt: "Pisoteada Vingativa",
			de: "Rächender Stampfer"
		},

		effect: {
			fr: "Si des marqueurs de dégâts sont placés sur vos Pokémon de Banc, cette attaque inflige 120 dégâts supplémentaires.",
			en: "If your Benched Pokémon have any damage counters on them, this attack does 120 more damage.",
			es: "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 120 puntos de daño más.",
			it: "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 120 danni in più.",
			pt: "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "120+",
		cost: ["Metal", "Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card