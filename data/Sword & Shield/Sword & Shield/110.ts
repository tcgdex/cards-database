import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Sandaconda",
		fr: "Dunaconda",
		es: "Sandaconda",
		it: "Sandaconda",
		pt: "Sandaconda",
		de: "Sanaconda"
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
		en: "Silicobra",
		fr: "Dunaja",
		es: "Silicobra",
		it: "Silicobra",
		pt: "Silicobra",
		de: "Salanga"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sand Sac",
				fr: "Poche de Sable",
				es: "Bolsa de Arena",
				it: "Sacca Silicea",
				pt: "Bolsa de Areia",
				de: "Sandbeutel"
			},
			effect: {
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
				de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
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
				en: "Power Press",
				fr: "Étau Puissant",
				es: "Constricción Poderosa",
				it: "Vigorstretta",
				pt: "Compressão Poderosa",
				de: "Powerdruck"
			},
			effect: {
				en: "If this Pokémon has at least 1 extra Fighting Energy attached (in addition to this attack's cost), this attack does 70 more damage.",
				fr: "Si au moins une Énergie Fighting supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si este Pokémon tiene por lo menos 1 Energía Fighting adicional unida a él (además de las del coste de este ataque), este ataque hace 70 puntos de daño más.",
				it: "Se questo Pokémon ha almeno un'Energia Fighting extra assegnata, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 70 danni in più.",
				pt: "Se este Pokémon tiver pelo menos 1 Energia Fighting adicional ligada a ele (além do custo deste ataque), este ataque causará 70 pontos de dano a mais.",
				de: "Wenn an dieses Pokémon mindestens 1 extra Fighting-Energie angelegt ist (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 70 Schadenspunkte mehr zu."
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
		en: "When it contracts its body, over 220 pounds of sand sprays from its nose. If it ever runs out of sand, it becomes disheartened."
	},

	dexId: [844],

	thirdParty: {
		cardmarket: 436664,
		tcgplayer: 208419
	}
}

export default card
