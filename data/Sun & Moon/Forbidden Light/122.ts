import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Lucario GX",
		fr: "Lucario GX",
		es: "Lucario GX",
		it: "Lucario GX",
		pt: "Lucario GX",
		de: "Lucario GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
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
		en: "Riolu",
		fr: "Riolu",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Aura Strike",
				fr: "Aura Frappante",
				es: "Impacto Aura",
				it: "Colpo d’Aura",
				pt: "Golpe de Aura",
				de: "Aura-Schlag"
			},
			effect: {
				en: "If this Pokémon evolved from Riolu during this turn, this attack does 90 more damage.",
				fr: "Si ce Pokémon a évolué de Riolu pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si este Pokémon ha evolucionado de Riolu durante este turno, este ataque hace 90 puntos de daño más.",
				it: "Se questo Pokémon si è evoluto da Riolu durante questo turno, questo attacco infligge 90 danni in più.",
				pt: "Se este Pokémon evoluiu de Riolu durante esta vez de jogar, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn sich dieses Pokémon während dieses Zuges aus Riolu entwickelt hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
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
				en: "Cyclone Kick",
				fr: "Pied Cyclone",
				es: "Patada Ciclón",
				it: "Calciovento",
				pt: "Chute Ciclone",
				de: "Wirbeltritt"
			},

			damage: 130,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cantankerous Beatdown GX",
				fr: "Dérouillée Revêche GX",
				es: "Derribo Iracundo GX",
				it: "Batosta Litigiosa-GX",
				pt: "Surra Intratável GX",
				de: "Zorniger Niederprügler GX"
			},
			effect: {
				en: "This attack does 30 damage for each damage counter on this Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 355633
	}
}

export default card
