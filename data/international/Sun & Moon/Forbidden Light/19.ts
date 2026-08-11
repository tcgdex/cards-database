import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Pyroar",
		'fr-fr': "Némélios",
		'es-es': "Pyroar",
		'it-it': "Pyroar",
		'pt-br': "Pyroar",
		'de-de': "Pyroleo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		668,
	],

	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Litleo",
		'fr-fr': "Hélionceau",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Unnerve",
				'fr-fr': "Tension",
				'es-es': "Nerviosismo",
				'it-it': "Agitazione",
				'pt-br': "Enervar",
				'de-de': "Anspannung"
			},
			effect: {
				'en-us': "Whenever your opponent plays an Item or Supporter card from their hand, prevent all effects of that card done to this Pokémon.",
				'fr-fr': "Chaque fois que votre adversaire joue une carte Objet ou Supporter de sa main, évitez tous les effets de cette carte sur ce Pokémon.",
				'es-es': "Cada vez que tu rival juegue 1 carta de Objeto o de Partidario de su mano, evita todos los efectos de esa carta infligidos a este Pokémon.",
				'it-it': "Ogni volta che il tuo avversario gioca una carta Strumento o Aiuto che ha in mano, previeni tutti gli effetti di quella carta su questo Pokémon.",
				'pt-br': "Sempre que seu oponente jogar 1 carta de Item ou de Apoiador da própria mão, prevenirá todos os efeitos daquela carta causados a este Pokémon.",
				'de-de': "Verhindere jedes Mal, wenn dein Gegner eine Item- oder Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die diesem Pokémon zugefügt werden."
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
				'en-us': "Dominating Fangs",
				'fr-fr': "Crocs Imposants",
				'es-es': "Colmillos Dominantes",
				'it-it': "Zanne Dominatrici",
				'pt-br': "Caninos Dominantes",
				'de-de': "Dominante Reißer"
			},
			effect: {
				'en-us': "If Lysandre Labs is in play, this attack does 60 more damage.",
				'fr-fr': "Si Labos Lysandre est en jeu, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si Laboratorios Lysson está en juego, este ataque hace 60 puntos de daño más.",
				'it-it': "Se c’è in gioco Laboratori Elisio, questo attacco infligge 60 danni in più.",
				'pt-br': "Se Laboratórios Lysandre estiver em jogo, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn Labor von Flordelis im Spiel ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "80+",

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
		'en-us': "With fiery breath of more than 10,000 degrees Fahrenheit, they viciously threaten any challenger. The females protect the pride's cubs.",
	},

	thirdParty: {
		cardmarket: 355539,
		tcgplayer: 165666
	}
}

export default card
