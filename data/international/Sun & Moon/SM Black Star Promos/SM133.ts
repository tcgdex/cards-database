import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Thundurus GX",
		'fr-fr': "Fulguris GX",
		'es-es': "Thundurus GX",
		'it-it': "Thundurus GX",
		'pt-br': "Thundurus GX",
		'de-de': "Voltolos GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		642,
	],
	hp: 180,
	types: [
		"Lightning",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Charge",
				'fr-fr': "Chargeur",
				'es-es': "Carga",
				'it-it': "Sottocarica",
				'pt-br': "Carga",
				'de-de': "Ladevorgang"
			},
			effect: {
				'en-us': "Search your deck for a Lightning Energy card and attach it to this Pokémon. Then, shuffle your deck.",
				'fr-fr': "Cherchez une carte Énergie Lightning dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta de Energía Lightning y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo una carta Energia Lightning e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 carta de Energia Lightning no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Lightning-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Electric Ball",
				'fr-fr': "Boule de Foudre",
				'es-es': "Bola Eléctrica",
				'it-it': "Lamposfera",
				'pt-br': "Bola de Eletricidade",
				'de-de': "Stromball"
			},

			damage: 140,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Thundering Hurricane GX",
				'fr-fr': "Rafale d’Éclairs GX",
				'es-es': "Huracán Atronador GX",
				'it-it': "Tuonuragano GX",
				'pt-br': "Furacão Trovejante GX",
				'de-de': "Donnernder Orkan GX"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 100 damage for each heads. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 100 dégâts multipliés par le nombre de côtés face. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Lanza 4 monedas. Este ataque hace 100 puntos de daño por cada cara. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Jogue 4 moedas. Este ataque causa 100 pontos de dano para cada cara (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Wirf 4 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "100×",

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
	retreat: 2,



}

export default card
