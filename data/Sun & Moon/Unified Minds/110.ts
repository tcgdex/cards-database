import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Medicham",
		fr: "Charmina",
		es: "Medicham",
		it: "Medicham",
		pt: "Medicham",
		de: "Meditalis"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		308,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Meditite",
		fr: "Méditikka",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Pure Power",
				fr: "Force Pure",
				es: "Energía Pura",
				it: "Forzapura",
				pt: "Poder Puro",
				de: "Mentalkraft"
			},
			effect: {
				en: "Put 4 damage counters on your opponent’s Pokémon in any way you like.",
				fr: "Placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				es: "Pon 4 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				it: "Distribuisci a piacimento quattro segnalini danno sui Pokémon del tuo avversario.",
				pt: "Coloque 4 contadores de dano nos Pokémon do seu oponente como desejar.",
				de: "Lege 4 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Master Strike",
				fr: "Coup de Maître",
				es: "Golpe Maestro",
				it: "Colpo Magistrale",
				pt: "Golpe de Mestre",
				de: "Meisterschlag"
			},
			effect: {
				en: "If this Pokémon has a Karate Belt card attached to it, this attack does 60 more damage.",
				fr: "Si une carte Ceinture de Karaté est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si este Pokémon tiene 1 carta de Cinturón Negro unida a él, este ataque hace 60 puntos de daño más.",
				it: "Se questo Pokémon ha una carta Cintura da Karate assegnata, questo attacco infligge 60 danni in più.",
				pt: "Se este Pokémon tiver uma carta de Faixa de Caratê ligada a ele, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn an dieses Pokémon eine Karategürtel-Karte angelegt ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 388352
	}
}

export default card
