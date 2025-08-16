import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Flareon",
		fr: "Pyroli",
		es: "Flareon",
		it: "Flareon",
		pt: "Flareon",
		de: "Flamara"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Power Cheer",
				fr: "Bravos Puissants",
				es: "Ovación Poderosa",
				it: "Incitamento Potente",
				pt: "Torcida Poderosa",
				de: "Powerjubel"
			},
			effect: {
				en: "The attacks of your Pokémon-GX in play that evolve from Eevee do 30 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance). You can’t apply more than 1 Power Cheer Ability at a time.",
				fr: "Les attaques de vos Pokémon-GX en jeu qui évoluent d’Évoli infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance). Vous ne pouvez pas utiliser plus d’un talent Bravos Puissants à la fois.",
				es: "Los ataques de tus Pokémon-GX en juego que evolucionen de Eevee hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia). No puedes aplicar más de 1 habilidad Ovación Poderosa a la vez.",
				it: "Gli attacchi dei tuoi Pokémon-GX in gioco che si evolvono da Eevee infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza. Può essere applicata solo un’abilità Incitamento Potente alla volta.",
				pt: "Os ataques dos seus Pokémon-GX em jogo que evoluam de Eevee causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência). Você não pode usar mais de 1 Habilidade Torcida Poderosa por vez.",
				de: "Die Attacken deiner Pokémon-GX im Spiel, die sich aus Evoli entwickeln, fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden). Du kannst immer nur jeweils 1 Fähigkeit Powerjubel einsetzen."
			},
		},
	],

	attacks: [
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
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
				es: "Descarta 1 Energía de este Pokémon.",
				it: "Scarta un’Energia assegnata a questo Pokémon.",
				pt: "Descarte 1 Energia deste Pokémon.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
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

	retreat: 2,

	thirdParty: {
		cardmarket: 407774,
		tcgplayer: 201197
	}
}

export default card
