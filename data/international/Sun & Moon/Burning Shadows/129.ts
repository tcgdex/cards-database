import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Golisopod GX",
		'fr-fr': "Sarmuraï GX",
		'es-es': "Golisopod GX",
		'it-it': "Golisopod GX",
		'pt-br': "Golisopod GX",
		'de-de': "Tectass GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		768,
	],

	hp: 210,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Wimpod",
		'fr-fr': "Sovkipou",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "First Impression",
				'fr-fr': "Escarmouche",
				'es-es': "Escaramuza",
				'it-it': "Schermaglia",
				'pt-br': "Primeira Impressão",
				'de-de': "Überrumpler"
			},
			effect: {
				'en-us': "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 90 more damage.",
				'fr-fr': "Si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si este Pokémon estaba en la Banca y se ha convertido en tu Pokémon Activo en este turno, este ataque hace 90 puntos de daño más.",
				'it-it': "Se questo Pokémon era in panchina ed è diventato il tuo Pokémon attivo in questo turno, questo attacco infligge 90 danni in più.",
				'pt-br': "Se este Pokémon estava no Banco e se tornou o seu Pokémon Ativo nesta rodada, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn dieses Pokémon auf der Bank war und in diesem Zug zu deinem Aktiven Pokémon wurde, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Armor Press",
				'fr-fr': "Pression Cuirassée",
				'es-es': "Presión Armadura",
				'it-it': "Pressarmatura",
				'pt-br': "Compressão de Armadura",
				'de-de': "Panzerpresse"
			},
			effect: {
				'en-us': "During your opponent’s next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, este Pokémon receberá 20 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 100,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crossing Cut GX",
				'fr-fr': "Coupe Croisée GX",
				'es-es': "Corte Transversal GX",
				'it-it': "Sferzata Incrociata-GX",
				'pt-br': "Corte Transversal GX",
				'de-de': "Quertreiber GX"
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Scambia questo Pokémon con uno della tua panchina. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 299529,
		tcgplayer: 138295
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
