import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Lucario GX",
		'fr-fr': "Lucario GX",
		'es-es': "Lucario GX",
		'it-it': "Lucario GX",
		'pt-br': "Lucario GX",
		'de-de': "Lucario GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 210,
	types: [
		"Fighting",
	],
	evolveFrom: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Aura Strike",
				'fr-fr': "Aura Frappante",
				'es-es': "Impacto Aura",
				'it-it': "Colpo d’Aura",
				'pt-br': "Golpe de Aura",
				'de-de': "Aura-Schlag"
			},
			effect: {
				'en-us': "If this Pokémon evolved from Riolu during this turn, this attack does 90 more damage.",
				'fr-fr': "Si ce Pokémon a évolué de Riolu pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si este Pokémon ha evolucionado de Riolu durante este turno, este ataque hace 90 puntos de daño más.",
				'it-it': "Se questo Pokémon si è evoluto da Riolu durante questo turno, questo attacco infligge 90 danni in più.",
				'pt-br': "Se este Pokémon evoluiu de Riolu durante esta vez de jogar, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn sich dieses Pokémon während dieses Zuges aus Riolu entwickelt hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Cyclone Kick",
				'fr-fr': "Pied Cyclone",
				'es-es': "Patada Ciclón",
				'it-it': "Calciovento",
				'pt-br': "Chute Ciclone",
				'de-de': "Wirbeltritt"
			},

			damage: 130,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cantankerous Beatdown GX",
				'fr-fr': "Dérouillée Revêche GX",
				'es-es': "Derribo Iracundo GX",
				'it-it': "Batosta Litigiosa GX",
				'pt-br': "Surra Intratável GX",
				'de-de': "Zorniger Niederprügler GX"
			},
			effect: {
				'en-us': "This attack does 30 damage for each damage counter on this Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
