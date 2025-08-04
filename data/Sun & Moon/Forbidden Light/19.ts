import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Pyroar",
		fr: "Némélios",
		es: "Pyroar",
		it: "Pyroar",
		pt: "Pyroar",
		de: "Pyroleo"
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
		en: "Litleo",
		fr: "Hélionceau",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Unnerve",
				fr: "Tension",
				es: "Nerviosismo",
				it: "Agitazione",
				pt: "Enervar",
				de: "Anspannung"
			},
			effect: {
				en: "Whenever your opponent plays an Item or Supporter card from their hand, prevent all effects of that card done to this Pokémon.",
				fr: "Chaque fois que votre adversaire joue une carte Objet ou Supporter de sa main, évitez tous les effets de cette carte sur ce Pokémon.",
				es: "Cada vez que tu rival juegue 1 carta de Objeto o de Partidario de su mano, evita todos los efectos de esa carta infligidos a este Pokémon.",
				it: "Ogni volta che il tuo avversario gioca una carta Strumento o Aiuto che ha in mano, previeni tutti gli effetti di quella carta su questo Pokémon.",
				pt: "Sempre que seu oponente jogar 1 carta de Item ou de Apoiador da própria mão, prevenirá todos os efeitos daquela carta causados a este Pokémon.",
				de: "Verhindere jedes Mal, wenn dein Gegner eine Item- oder Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die diesem Pokémon zugefügt werden."
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
				en: "Dominating Fangs",
				fr: "Crocs Imposants",
				es: "Colmillos Dominantes",
				it: "Zanne Dominatrici",
				pt: "Caninos Dominantes",
				de: "Dominante Reißer"
			},
			effect: {
				en: "If Lysandre Labs is in play, this attack does 60 more damage.",
				fr: "Si Labos Lysandre est en jeu, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si Laboratorios Lysson está en juego, este ataque hace 60 puntos de daño más.",
				it: "Se c’è in gioco Laboratori Elisio, questo attacco infligge 60 danni in più.",
				pt: "Se Laboratórios Lysandre estiver em jogo, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn Labor von Flordelis im Spiel ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
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

	thirdParty: {
		cardmarket: 355539,
		tcgplayer: 165666
	}
}

export default card
