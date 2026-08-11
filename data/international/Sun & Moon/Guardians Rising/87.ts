import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Solgaleo",
		'fr-fr': "Solgaleo",
		'es-es': "Solgaleo",
		'it-it': "Solgaleo",
		'pt-br': "Solgaleo",
		'de-de': "Solgaleo"
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
		'en-us': "Cosmoem",
		'fr-fr': "Cosmovum",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Shining Arrow",
				'fr-fr': "Flèche Brillante",
				'es-es': "Flecha Radiante",
				'it-it': "Freccia Lucente",
				'pt-br': "Flecha Brilhante",
				'de-de': "Strahlender Pfeil"
			},
			effect: {
				'en-us': "This attack does 50 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Fangs of the Sunne",
				'fr-fr': "Crocs du Halo Solaire",
				'es-es': "Colmillos del Sol",
				'it-it': "Zanne Solari",
				'pt-br': "Caninos Solares",
				'de-de': "Sonnenkreis-Fänge"
			},
			effect: {
				'en-us': "This Pokémon can’t use Fangs of the Sunne during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Crocs du Halo Solaire pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Colmillos del Sol durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Zanne Solari.",
				'pt-br': "Este Pokémon não poderá usar Caninos Solares durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Sonnenkreis-Fänge während deines nächsten Zuges nicht einsetzen."
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

	description: {
		'en-us': "It is said to live in another world. The intense light it radiates from the surface of its body can make the darkest of nights light up like midday.",
	},

	thirdParty: {
		cardmarket: 297543,
		tcgplayer: 131001
	}
}

export default card
