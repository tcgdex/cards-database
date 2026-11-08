import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Virizion GX",
		'fr-fr': "Viridium GX",
		'es-es': "Virizion GX",
		'it-it': "Virizion GX",
		'pt-br': "Virizion GX",
		'de-de': "Viridium GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		640,
	],

	hp: 170,

	types: [
		"Grass",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Double Draw",
				'fr-fr': "Double Pioche",
				'es-es': "Roba Doble",
				'it-it': "Pescata Doppia",
				'pt-br': "Compra Dupla",
				'de-de': "Zweifachzug"
			},
			effect: {
				'en-us': "Draw 2 cards.",
				'fr-fr': "Piochez 2 cartes.",
				'es-es': "Roba 2 cartas.",
				'it-it': "Pesca due carte.",
				'pt-br': "Compre 2 cartas.",
				'de-de': "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Sensitive Blade",
				'fr-fr': "Lame Sensible",
				'es-es': "Cuchilla Sensible",
				'it-it': "Lamasensibile",
				'pt-br': "Lâmina Sensível",
				'de-de': "Feinfühlige Klinge"
			},
			effect: {
				'en-us': "If you played a Supporter card from your hand during this turn, this attack does 80 more damage.",
				'fr-fr': "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si has jugado 1 carta de Partidario de tu mano durante este turno, este ataque hace 80 puntos de daño más.",
				'it-it': "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 80 danni in più.",
				'pt-br': "Se você jogou 1 carta de Apoiador da sua mão durante esta vez de jogar, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn du eine Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Breeze Away GX",
				'fr-fr': "Brise Opportune GX",
				'es-es': "Irse Alegremente GX",
				'it-it': "Folata Rapida-GX",
				'pt-br': "Mover da Brisa GX",
				'de-de': "Fortwehen GX"
			},
			effect: {
				'en-us': "Put any number of your Pokémon in play and all cards attached to them into your hand. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Placez autant de vos Pokémon en jeu que vous voulez, ainsi que toutes les cartes qui leur sont attachées, dans votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Pon cualquier cantidad de tus Pokémon en juego y todas las cartas unidas a ellos en tu mano. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Prendi un numero qualsiasi di Pokémon che hai in gioco e tutte le carte loro assegnate e aggiungili alle carte che hai in mano. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Coloque qualquer número dos seus Pokémon em jogo e todas as cartas ligadas a eles na sua mão (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Nimm beliebig viele deiner Pokémon im Spiel und alle an sie angelegten Karten auf deine Hand. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365674,
		tcgplayer: 178835
	}
}

export default card
