import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Pikachu & Zekrom GX",
		'fr-fr': "Pikachu et Zekrom GX",
		'es-es': "Pikachu y Zekrom GX",
		'it-it': "Pikachu e Zekrom GX",
		'pt-br': "Pikachu e Zekrom GX",
		'de-de': "Pikachu & Zekrom GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
		644
	],

	hp: 240,

	types: [
		"Lightning",
	],

	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Full Blitz",
				'fr-fr': "Attaque Absolue",
				'es-es': "Envite Total",
				'it-it': "Carica Totale",
				'pt-br': "Bombardeio Geral",
				'de-de': "Mächtiger Blitz"
			},
			effect: {
				'en-us': "Search your deck for up to 3 Lightning Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 3 cartes Énergie Lightning dans votre deck et attachez-les à l’un de vos Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 3 cartas de Energía Lightning y únelas a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a tre carte Energia Lightning e assegnale a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 3 cartas de Energia Lightning no seu baralho e ligue-as a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 3 Lightning-Energiekarten und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck."
			},
			damage: 150,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],

			name: {
				'en-us': "Tag Bolt GX",
				'fr-fr': "Escouade Foudroyante GX",
				'es-es': "Rayo Relevo GX",
				'it-it': "Bolide Alleato GX",
				'pt-br': "Relâmpago de Aliados GX",
				'de-de': "Doppel-Blitzschlag GX"
			},

			effect: {
				'en-us': "If this Pokémon has at least 3 extra Lightning Energy attached to it (in addition to this attack’s cost), this attack does 170 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.) (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Si au moins 3 Énergies Lightning supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 170 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Si este Pokémon tiene por lo menos 3 Energías Lightning adicionales unidas a él (además de las del coste de este ataque), este ataque hace 170 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Se questo Pokémon ha almeno tre Energie Lightning extra assegnate, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 170 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Se este Pokémon tiver pelo menos 3 Energias Lightning adicionais ligadas a ele (além do custo deste ataque), este ataque causará 170 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). (Você não pode usar mais de 1 ataque GX por partida.)",
				'de-de': "Wenn an dieses Pokémon mindestens 3 extra Lightning-Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 1 Pokémon auf der Bank deines Gegners 170 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

			damage: 200
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

	retreat: 3,

	thirdParty: {
		cardmarket: 369087,
		tcgplayer: 183805
	}
}

export default card
