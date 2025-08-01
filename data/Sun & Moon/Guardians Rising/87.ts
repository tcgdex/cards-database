import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Solgaleo",
		fr: "Solgaleo",
		es: "Solgaleo",
		it: "Solgaleo",
		pt: "Solgaleo",
		de: "Solgaleo"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		791,
	],

	hp: 160,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Shining Arrow",
				fr: "Flèche Brillante",
				es: "Flecha Radiante",
				it: "Freccia Lucente",
				pt: "Flecha Brilhante",
				de: "Strahlender Pfeil"
			},
			effect: {
				en: "This attack does 50 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Fangs of the Sunne",
				fr: "Crocs du Halo Solaire",
				es: "Colmillos del Sol",
				it: "Zanne Solari",
				pt: "Caninos Solares",
				de: "Sonnenkreis-Fänge"
			},
			effect: {
				en: "This Pokémon can’t use Fangs of the Sunne during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Crocs du Halo Solaire pendant votre prochain tour.",
				es: "Este Pokémon no puede usar Colmillos del Sol durante tu próximo turno.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Zanne Solari.",
				pt: "Este Pokémon não poderá usar Caninos Solares durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann Sonnenkreis-Fänge während deines nächsten Zuges nicht einsetzen."
			},
			damage: 170,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 297543
	}
}

export default card
