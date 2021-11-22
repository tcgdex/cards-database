import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Hydreigon BREAK",
		fr: "Trioxhydre TURBO",
		es: "Hydreigon TURBO",
		it: "Hydreigon TURBO",
		pt: "Hydreigon TURBO",
		de: "Trikephalo-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		635,
	],

	hp: 190,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Hydreigon",
		fr: "Trioxhydre",
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Psychic",
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Calamity Blast",
				fr: "Explo-Calamité",
				es: "Explosión Calamidad",
				it: "Esplosione Disastrosa",
				pt: "Explosão de Calamidade",
				de: "Katastrophale Detonation"
			},
			effect: {
				en: "Discard 3 Energy attached to this Pokémon. This attack does 50 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 3 Énergies attachées à ce Pokémon. Cette attaque inflige 50 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Descarta 3 Energías unidas a este Pokémon. Este ataque hace 50 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Scarta tre Energie assegnate a questo Pokémon. Questo attacco infligge 50 danni a due dei Pokémon in panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Descarte 3 Energias ligadas a este Pokémon. Este ataque causa 50 de danos a 2 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Lege 3 an dieses Pokémon angelegte Energien auf deinen Ablagestapel. Dieser Angriff fügt 2 Pokémon auf deiner Bank 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 150,

		}
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
