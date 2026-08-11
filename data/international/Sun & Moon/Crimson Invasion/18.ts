import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Gyarados GX",
		'fr-fr': "Léviator GX",
		'es-es': "Gyarados GX",
		'it-it': "Gyarados GX",
		'pt-br': "Gyarados GX",
		'de-de': "Garados GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 240,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Waterfall",
				'fr-fr': "Cascade",
				'es-es': "Cascada",
				'it-it': "Cascata",
				'pt-br': "Cachoeira",
				'de-de': "Kaskade"
			},

			damage: 70,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Draconic Disaster",
				'fr-fr': "Désastre Draconien",
				'es-es': "Desastre Draco",
				'it-it': "Disastro del Dragone",
				'pt-br': "Desastre Dragontino",
				'de-de': "Drakonisches Desaster"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 100 more damage. Then, discard that Stadium card.",
				'fr-fr': "S’il y a une carte Stade en jeu, cette attaque inflige 100 dégâts supplémentaires. Ensuite, défaussez la carte Stade.",
				'es-es': "Si hay alguna carta de Estadio en juego, este ataque hace 100 puntos de daño más. Después, descarta esa carta de Estadio.",
				'it-it': "Se c’è in gioco una carta Stadio, questo attacco infligge 100 danni in più. Poi scarta quella carta Stadio.",
				'pt-br': "Se houver alguma carta de Estádio em jogo, este ataque causará 100 pontos de dano a mais. Em seguida, descarte aquela carta de Estádio.",
				'de-de': "Wenn mindestens 1 Stadionkarte im Spiel ist, fügt diese Attacke 100 Schadenspunkte mehr zu. Lege anschließend jene Stadionkarte auf den Ablagestapel."
			},
			damage: "100+",

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Dread Storm GX",
				'fr-fr': "Tempête d’Effroi GX",
				'es-es': "Tormenta Temor GX",
				'it-it': "Tempesta Malefica-GX",
				'pt-br': "Tempestade de Temor GX",
				'de-de': "Sturm des Schreckens GX"
			},
			effect: {
				'en-us': "Discard an Energy from each of your opponent’s Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Défaussez une Énergie de chacun des Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Descarta 1 Energía de cada uno de los Pokémon de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Scarta un’Energia assegnata a ciascuno dei Pokémon del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Descarte 1 Energia de cada um dos Pokémon do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Lege 1 Energie von jedem Pokémon deines Gegners auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 311215,
		tcgplayer: 149039
	}
}

export default card
