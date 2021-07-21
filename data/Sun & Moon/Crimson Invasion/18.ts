import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Gyarados-GX",
		fr: "Léviator-GX",
		es: "Gyarados-GX",
		it: "Gyarados-GX",
		pt: "Gyarados-GX",
		de: "Garados-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
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
		en: "Magikarp",
		fr: "Magicarpe",
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
				en: "Waterfall",
				fr: "Cascade",
				es: "Cascada",
				it: "Cascata",
				pt: "Cachoeira",
				de: "Kaskade"
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
				en: "Draconic Disaster",
				fr: "Désastre Draconien",
				es: "Desastre Draco",
				it: "Disastro del Dragone",
				pt: "Desastre Dragontino",
				de: "Drakonisches Desaster"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 100 more damage. Then, discard that Stadium card.",
				fr: "S’il y a une carte Stade en jeu, cette attaque inflige 100 dégâts supplémentaires. Ensuite, défaussez la carte Stade.",
				es: "Si hay alguna carta de Estadio en juego, este ataque hace 100 puntos de daño más. Después, descarta esa carta de Estadio.",
				it: "Se c’è in gioco una carta Stadio, questo attacco infligge 100 danni in più. Poi scarta quella carta Stadio.",
				pt: "Se houver alguma carta de Estádio em jogo, este ataque causará 100 pontos de dano a mais. Em seguida, descarte aquela carta de Estádio.",
				de: "Wenn mindestens 1 Stadionkarte im Spiel ist, fügt diese Attacke 100 Schadenspunkte mehr zu. Lege anschließend jene Stadionkarte auf den Ablagestapel."
			},
			damage: "100+",

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Dread Storm GX",
				fr: "Tempête d’Effroi GX",
				es: "Tormenta Temor GX",
				it: "Tempesta Malefica-GX",
				pt: "Tempestade de Temor GX",
				de: "Sturm des Schreckens GX"
			},
			effect: {
				en: "Discard an Energy from each of your opponent’s Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Défaussez une Énergie de chacun des Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Descarta 1 Energía de cada uno de los Pokémon de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Scarta un’Energia assegnata a ciascuno dei Pokémon del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Descarte 1 Energia de cada um dos Pokémon do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege 1 Energie von jedem Pokémon deines Gegners auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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



}

export default card
