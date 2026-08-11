import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Flareon",
		'fr-fr': "Pyroli",
		'es-es': "Flareon",
		'it-it': "Flareon",
		'pt-br': "Flareon",
		'de-de': "Flamara"
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
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Power Cheer",
				'fr-fr': "Bravos Puissants",
				'es-es': "Ovación Poderosa",
				'it-it': "Incitamento Potente",
				'pt-br': "Torcida Poderosa",
				'de-de': "Powerjubel"
			},
			effect: {
				'en-us': "The attacks of your Pokémon-GX in play that evolve from Eevee do 30 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance). You can’t apply more than 1 Power Cheer Ability at a time.",
				'fr-fr': "Les attaques de vos Pokémon-GX en jeu qui évoluent d’Évoli infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance). Vous ne pouvez pas utiliser plus d’un talent Bravos Puissants à la fois.",
				'es-es': "Los ataques de tus Pokémon-GX en juego que evolucionen de Eevee hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia). No puedes aplicar más de 1 habilidad Ovación Poderosa a la vez.",
				'it-it': "Gli attacchi dei tuoi Pokémon-GX in gioco che si evolvono da Eevee infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza. Può essere applicata solo un’abilità Incitamento Potente alla volta.",
				'pt-br': "Os ataques dos seus Pokémon-GX em jogo que evoluam de Eevee causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência). Você não pode usar mais de 1 Habilidade Torcida Poderosa por vez.",
				'de-de': "Die Attacken deiner Pokémon-GX im Spiel, die sich aus Evoli entwickeln, fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden). Du kannst immer nur jeweils 1 Fähigkeit Powerjubel einsetzen."
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
				'en-us': "Flamethrower",
				'fr-fr': "Lance-Flammes",
				'es-es': "Lanzallamas",
				'it-it': "Lanciafiamme",
				'pt-br': "Lança-chamas",
				'de-de': "Flammenwurf"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon.",
				'it-it': "Scarta un’Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte 1 Energia deste Pokémon.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
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

	description: {
		'en-us': "If it inhales deeply, that's a sign it's about to attack. Prepare to be hit by flames of over 3,000 degrees Fahrenheit!",
	},

	thirdParty: {
		cardmarket: 407774,
		tcgplayer: 201197
	}
}

export default card
