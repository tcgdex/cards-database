import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Stunfisk",
		'fr-fr': "Limonde",
		'es-es': "Stunfisk",
		'it-it': "Stunfisk",
		'pt-br': "Stunfisk",
		'de-de': "Flunschlik"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		618,
	],

	hp: 110,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Revenge",
				'fr-fr': "Vendetta",
				'es-es': "Desquite",
				'it-it': "Vendetta",
				'pt-br': "Vingança",
				'de-de': "Vergeltung"
			},
			effect: {
				'en-us': "If any of your Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, this attack does 80 more damage.",
				'fr-fr': "Si l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque de votre adversaire pendant son dernier tour, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque de tu rival durante su último turno, este ataque hace 80 puntos de daño más.",
				'it-it': "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco del tuo avversario durante il suo ultimo turno, questo attacco infligge 80 danni in più.",
				'pt-br': "Se qualquer um dos seus Pokémon tiver sido Nocauteado por danos causados pelo ataque de um oponente durante a última vez de jogar desse oponente, este ataque causará 80 de danos adicionais.",
				'de-de': "Falls eins deiner Pokémon während des letzten Zuges deines Gegners durch Schaden eines gegnerischen Angriffs kampfunfähig gemacht wurde, fügt dieser Angriff 80 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Blast",
				'fr-fr': "Grondement de Tonnerre",
				'es-es': "Estallido Trueno",
				'it-it': "Tuonobomba",
				'pt-br': "Explosão de Trovões",
				'de-de': "Donnerkeil"
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía unida a este Pokémon.",
				'it-it': "Scarta un'Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It conceals itself in the mud of the seashore. Then it waits. When prey touch it, it delivers a jolt of electricity.",
	},

	thirdParty: {
		cardmarket: 286302,
		tcgplayer: 107175
	}
}

export default card
