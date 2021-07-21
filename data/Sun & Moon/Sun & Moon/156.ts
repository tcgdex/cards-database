import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Tauros-GX",
		fr: "Tauros-GX",
		es: "Tauros-GX",
		it: "Tauros-GX",
		pt: "Tauros-GX",
		de: "Tauros-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
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
				en: "Rage",
				fr: "Frénésie",
				es: "Furia",
				it: "Ira",
				pt: "Ira",
				de: "Raserei"
			},
			effect: {
				en: "This attack does 10 more damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
				es: "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
				de: "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Attack",
				fr: "Koud’Korne",
				es: "Cornada",
				it: "Incornata",
				pt: "Ataque de Chifre",
				de: "Hornattacke"
			},

			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mad Bull GX",
				fr: "Taureau Enragé GX",
				es: "Toro Loco GX",
				it: "Impazzatoro-GX",
				pt: "Touro Furioso GX",
				de: "Wütender Stier GX"
			},
			effect: {
				en: "This attack does 30 damage for each damage counter on this Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 30 puntos de daño por cada contador de daño en este Pokémon. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 30 danni per ogni segnalino danno presente su questo Pokémon. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 30 pontos de dano para cada contador de dano neste Pokémon (você não pode usar mais de 1 ataque GX por partida).",
				de: "Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der Schadensmarken auf diesem Pokémon zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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



}

export default card
