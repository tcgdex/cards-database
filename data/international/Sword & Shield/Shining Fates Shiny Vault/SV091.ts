import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [879],
	set: Set,

	name: {
		'fr-fr': "Pachyradjah",
		'en-us': "Copperajah",
		'es-es': "Copperajah",
		'it-it': "Copperajah",
		'pt-br': "Copperajah",
		'de-de': "Patinaraja"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	evolveFrom: {
		'fr-fr': "Charibari",
		'en-us': "Cufant"
	},

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Peau Stérilisante",
			'en-us': "Antibacterial Skin",
			'es-es': "Piel Antibacteriana",
			'it-it': "Pelle Battericida",
			'pt-br': "Pele Antibacteriana",
			'de-de': "Antibakterielle Haut"
		},

		effect: {
			'fr-fr': "Ce Pokémon ne peut être affecté par aucun État Spécial.",
			'en-us': "This Pokémon can't be affected by any Special Conditions.",
			'es-es': "Este Pokémon no puede verse afectado por ninguna Condición Especial.",
			'it-it': "Questo Pokémon non può essere influenzato da condizioni speciali.",
			'pt-br': "Este Pokémon não pode ser afetado por quaisquer Condições Especiais.",
			'de-de': "Dieses Pokémon kann nicht von Speziellen Zuständen betroffen werden."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Écrasement Vengeur",
			'en-us': "Vengeful Stomp",
			'es-es': "Pisotón Vengativo",
			'it-it': "Pestone Livoroso",
			'pt-br': "Pisoteada Vingativa",
			'de-de': "Rächender Stampfer"
		},

		effect: {
			'fr-fr': "Si des marqueurs de dégâts sont placés sur vos Pokémon de Banc, cette attaque inflige 120 dégâts supplémentaires.",
			'en-us': "If your Benched Pokémon have any damage counters on them, this attack does 120 more damage.",
			'es-es': "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 120 puntos de daño más.",
			'it-it': "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 120 danni in più.",
			'pt-br': "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 120 Schadenspunkte mehr zu."
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
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "They came over from another region long ago and worked together with humans. Their green skin is resistant to water."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539843,
				tcgplayer: 232476
			}
		},
	],
}

export default card
