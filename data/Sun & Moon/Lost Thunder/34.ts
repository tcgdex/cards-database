import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Virizion GX",
		fr: "Viridium GX",
		es: "Virizion GX",
		it: "Virizion GX",
		pt: "Virizion GX",
		de: "Viridium GX"
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
				en: "Double Draw",
				fr: "Double Pioche",
				es: "Roba Doble",
				it: "Pescata Doppia",
				pt: "Compra Dupla",
				de: "Zweifachzug"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
				es: "Roba 2 cartas.",
				it: "Pesca due carte.",
				pt: "Compre 2 cartas.",
				de: "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Sensitive Blade",
				fr: "Lame Sensible",
				es: "Cuchilla Sensible",
				it: "Lamasensibile",
				pt: "Lâmina Sensível",
				de: "Feinfühlige Klinge"
			},
			effect: {
				en: "If you played a Supporter card from your hand during this turn, this attack does 80 more damage.",
				fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si has jugado 1 carta de Partidario de tu mano durante este turno, este ataque hace 80 puntos de daño más.",
				it: "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 80 danni in più.",
				pt: "Se você jogou 1 carta de Apoiador da sua mão durante esta vez de jogar, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn du eine Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Breeze Away GX",
				fr: "Brise Opportune GX",
				es: "Irse Alegremente GX",
				it: "Folata Rapida-GX",
				pt: "Mover da Brisa GX",
				de: "Fortwehen GX"
			},
			effect: {
				en: "Put any number of your Pokémon in play and all cards attached to them into your hand. (You can’t use more than 1 GX attack in a game.)",
				fr: "Placez autant de vos Pokémon en jeu que vous voulez, ainsi que toutes les cartes qui leur sont attachées, dans votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Pon cualquier cantidad de tus Pokémon en juego y todas las cartas unidas a ellos en tu mano. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Prendi un numero qualsiasi di Pokémon che hai in gioco e tutte le carte loro assegnate e aggiungili alle carte che hai in mano. Non puoi usare più di un attacco GX a partita.",
				pt: "Coloque qualquer número dos seus Pokémon em jogo e todas as cartas ligadas a eles na sua mão (você não pode usar mais de 1 ataque GX por partida).",
				de: "Nimm beliebig viele deiner Pokémon im Spiel und alle an sie angelegten Karten auf deine Hand. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
