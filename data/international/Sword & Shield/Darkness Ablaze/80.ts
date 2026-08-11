import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [756],

	name: {
		'en-us': "Shiinotic",
		'fr-fr': "Lampignon",
		'es-es': "Shiinotic",
		'it-it': "Shiinotic",
		'pt-br': "Shiinotic",
		'de-de': "Lamellux"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Morelull",
		'fr-fr': "Spododo",
		'es-es': "Morelull",
		'it-it': "Morelull",
		'pt-br': "Morelull",
		'de-de': "Bubungus"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flickering Light",
				'fr-fr': "Lueur Vacillante",
				'es-es': "Luz Titilante",
				'it-it': "Luce Tremula",
				'pt-br': "Luz Tremeluzente",
				'de-de': "Flackerndes Licht"
			},
			effect: {
				'en-us': "Flip a coin. If heads, during your opponent's next turn, the Defending Pokémon can't attack.",
				'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
				'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
				'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
				'pt-br': "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
				'de-de': "Wirf 1 Münze. Bei Kopf kann das Verteidigende Pokémon während des nächsten Zuges deines Gegners nicht angreifen."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Fear the Forest",
				'fr-fr': "Peur Sylvestre",
				'es-es': "Temor Forestal",
				'it-it': "Bosco Inquietante",
				'pt-br': "Medo da Floresta",
				'de-de': "Waldfurcht"
			},
			effect: {
				'en-us': "If Glimwood Tangle is in play, this attack does 60 more damage.",
				'fr-fr': "Si Forêt de Lumirinth est en jeu, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si Bosque Lumirinto está en juego, este ataque hace 60 puntos de daño más.",
				'it-it': "Se c'è in gioco Bosco Brillabirinto, questo attacco infligge 60 danni in più.",
				'pt-br': "Se Bosque Glimwood estiver em jogo, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn Wirrschein-Wald im Spiel ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Its flickering spores lure in prey and put them to sleep. Once this Pokémon has its prey snoozing, it drains their vitality with its fingertips."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483279,
				tcgplayer: 219465
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483279,
				tcgplayer: 219465
			}
		},
	],
}

export default card
