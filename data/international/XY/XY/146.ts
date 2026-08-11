import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Xerneas EX",
		'fr-fr': "Xerneas EX",
		'es-es': "Xerneas EX",
		'it-it': "Xerneas EX",
		'pt-br': "Xerneas EX",
		'de-de': "Xerneas EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		716,
	],

	hp: 170,

	types: [
		"Fairy",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Break Through",
				'fr-fr': "Percée",
				'es-es': "Abrir Paso",
				'it-it': "Irruzione",
				'pt-br': "Atravessar",
				'de-de': "Eine Bresche schlagen"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Esse ataque causa 30 de danos a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "X Blast",
				'fr-fr': "Explosion X",
				'es-es': "Estallido X",
				'it-it': "Colpo X",
				'pt-br': "Explosão X",
				'de-de': "X-Blaster"
			},
			effect: {
				'en-us': "This Pokémon can't use X Blast during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Explosion X pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Estallido X durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Colpo X.",
				'pt-br': "Este Pokémon não poderá usar Explosão X na sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann X-Blaster während deines nächsten Zuges nicht einsetzen."
			},
			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 281433,
		tcgplayer: 90672
	}
}

export default card
