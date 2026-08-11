import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Incineroar",
		'fr-fr': "Félinferno",
		'es-es': "Incineroar",
		'it-it': "Incineroar",
		'pt-br': "Incineroar",
		'de-de': "Fuegro"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		727,
	],

	hp: 160,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Torracat",
		'fr-fr': "Matoufeu",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Strong Cheer",
				'fr-fr': "Acclamation Forte",
				'es-es': "Fuerte Ovación",
				'it-it': "Incitamento Caloroso",
				'pt-br': "Torcida Animada",
				'de-de': "Starker Zuspruch"
			},
			effect: {
				'en-us': "Your Pokémon’s attacks do 30 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance). You can’t apply more than 1 Strong Cheer Ability at a time.",
				'fr-fr': "Les attaques de vos Pokémon infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance). Vous ne pouvez pas utiliser plus d’un talent Acclamation Forte à la fois.",
				'es-es': "Los ataques de tus Pokémon hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia). No puedes aplicar más de 1 habilidad Fuerte Ovación a la vez.",
				'it-it': "Gli attacchi dei tuoi Pokémon infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza. Può essere applicata solo un’abilità Incitamento Caloroso alla volta.",
				'pt-br': "Os ataques dos seus Pokémon causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência). Você não pode usar mais de 1 Habilidade Torcida Animada por vez.",
				'de-de': "Die Attacken deiner Pokémon fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden). Du kannst immer nur jeweils 1 Fähigkeit Starker Zuspruch einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
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
		'en-us': "Although it's rough mannered and egotistical, it finds beating down unworthy opponents boring. It gets motivated for stronger opponents.",
	},

	thirdParty: {
		cardmarket: 372321,
		tcgplayer: 189078
	}
}

export default card
