import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Sandaconda",
		'fr-fr': "Dunaconda",
		'es-es': "Sandaconda",
		'it-it': "Sandaconda",
		'pt-br': "Sandaconda",
		'de-de': "Sanaconda"
	},

	illustrator: "nagimiso",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Silicobra",
		'fr-fr': "Dunaja",
		'es-es': "Silicobra",
		'it-it': "Silicobra",
		'pt-br': "Silicobra",
		'de-de': "Salanga"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sand Sac",
				'fr-fr': "Poche de Sable",
				'es-es': "Bolsa de Arena",
				'it-it': "Sacca Silicea",
				'pt-br': "Bolsa de Areia",
				'de-de': "Sandbeutel"
			},
			effect: {
				'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
				'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Power Press",
				'fr-fr': "Étau Puissant",
				'es-es': "Constricción Poderosa",
				'it-it': "Vigorstretta",
				'pt-br': "Compressão Poderosa",
				'de-de': "Powerdruck"
			},
			effect: {
				'en-us': "If this Pokémon has at least 1 extra Fighting Energy attached (in addition to this attack's cost), this attack does 70 more damage.",
				'fr-fr': "Si au moins une Énergie Fighting supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene por lo menos 1 Energía Fighting adicional unida a él (además de las del coste de este ataque), este ataque hace 70 puntos de daño más.",
				'it-it': "Se questo Pokémon ha almeno un'Energia Fighting extra assegnata, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 70 danni in più.",
				'pt-br': "Se este Pokémon tiver pelo menos 1 Energia Fighting adicional ligada a ele (além do custo deste ataque), este ataque causará 70 pontos de dano a mais.",
				'de-de': "Wenn an dieses Pokémon mindestens 1 extra Fighting-Energie angelegt ist (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	description: {
		'en-us': "When it contracts its body, over 220 pounds of sand sprays from its nose. If it ever runs out of sand, it becomes disheartened."
	},

	dexId: [844],

	thirdParty: {
		cardmarket: 436664,
		tcgplayer: 208419
	}
}

export default card
