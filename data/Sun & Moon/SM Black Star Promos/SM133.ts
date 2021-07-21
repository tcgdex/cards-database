import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Thundurus-GX",
		fr: "Fulguris-GX",
		es: "Thundurus-GX",
		it: "Thundurus-GX",
		pt: "Thundurus-GX",
		de: "Voltolos-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
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
				en: "Charge",
				fr: "Chargeur",
				es: "Carga",
				it: "Sottocarica",
				pt: "Carga",
				de: "Ladevorgang"
			},
			effect: {
				en: "Search your deck for a Lightning Energy card and attach it to this Pokémon. Then, shuffle your deck.",
				fr: "Cherchez une carte Énergie Lightning dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Energía Lightning y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo una carta Energia Lightning e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 carta de Energia Lightning no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Lightning-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Electric Ball",
				fr: "Boule de Foudre",
				es: "Bola Eléctrica",
				it: "Lamposfera",
				pt: "Bola de Eletricidade",
				de: "Stromball"
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
				en: "Thundering Hurricane GX",
				fr: "Rafale d’Éclairs GX",
				es: "Huracán Atronador GX",
				it: "Tuonuragano GX",
				pt: "Furacão Trovejante GX",
				de: "Donnernder Orkan GX"
			},
			effect: {
				en: "Flip 4 coins. This attack does 100 damage for each heads. (You can’t use more than 1 GX attack in a game.)",
				fr: "Lancez 4 pièces. Cette attaque inflige 100 dégâts multipliés par le nombre de côtés face. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Lanza 4 monedas. Este ataque hace 100 puntos de daño por cada cara. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Lancia quattro volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa. Non puoi usare più di un attacco GX a partita.",
				pt: "Jogue 4 moedas. Este ataque causa 100 pontos de dano para cada cara (você não pode usar mais de 1 ataque GX por partida).",
				de: "Wirf 4 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
