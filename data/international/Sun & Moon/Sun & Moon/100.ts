import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Tauros GX",
		'fr-fr': "Tauros GX",
		'es-es': "Tauros GX",
		'it-it': "Tauros GX",
		'pt-br': "Tauros GX",
		'de-de': "Tauros GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		128,
	],

	hp: 180,

	types: [
		"Colorless",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rage",
				'fr-fr': "Frénésie",
				'es-es': "Furia",
				'it-it': "Ira",
				'pt-br': "Ira",
				'de-de': "Raserei"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
				'de-de': "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Horn Attack",
				'fr-fr': "Koud’Korne",
				'es-es': "Cornada",
				'it-it': "Incornata",
				'pt-br': "Ataque de Chifre",
				'de-de': "Hornattacke"
			},

			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mad Bull GX",
				'fr-fr': "Taureau Enragé GX",
				'es-es': "Toro Loco GX",
				'it-it': "Impazzatoro-GX",
				'pt-br': "Touro Furioso GX",
				'de-de': "Wütender Stier GX"
			},
			effect: {
				'en-us': "This attack does 30 damage for each damage counter on this Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Este ataque hace 30 puntos de daño por cada contador de daño en este Pokémon. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Questo attacco infligge 30 danni per ogni segnalino danno presente su questo Pokémon. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Este ataque causa 30 pontos de dano para cada contador de dano neste Pokémon (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der Schadensmarken auf diesem Pokémon zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 295412,
		tcgplayer: 126972
	}
}

export default card
