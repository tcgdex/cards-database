import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Magcargo",
		fr: "Volcaropod",
		es: "Magcargo",
		it: "Magcargo",
		pt: "Magcargo",
		de: "Magcargo"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		219,
	],

	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Slugma",
		fr: "Limagma",
		es: "Slugma",
		it: "Slugma",
		pt: "Slugma",
		de: "Schneckmag"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flame Burst",
				fr: "Rebondifeu",
				es: "Pirotecnia",
				it: "Pirolancio",
				pt: "Rajada de Chamas",
				de: "Funkenflug"
			},
			effect: {
				en: "This attack does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 20 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 20 danni a due dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Esse ataque causa 20 de danos a 2 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Dieser Angriff fügt 2 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flammes",
				es: "Lanzallamas",
				it: "Lanciafiamme",
				pt: "Lança-chamas",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				es: "Descarta 1 Energía unida a este Pokémon.",
				it: "Scarta un'Energia assegnata a questo Pokémon.",
				pt: "Descarte uma Energia ligada a este Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 273554
	}
}

export default card
