import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Pikachu & Zekrom GX",
		fr: "Pikachu et Zekrom GX",
		es: "Pikachu y Zekrom GX",
		it: "Pikachu e Zekrom GX",
		pt: "Pikachu e Zekrom GX",
		de: "Pikachu & Zekrom GX"
	},

	illustrator: "Mitsuhiro Arita",
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
				en: "Full Blitz",
				fr: "Attaque Absolue",
				es: "Envite Total",
				it: "Carica Totale",
				pt: "Bombardeio Geral",
				de: "Mächtiger Blitz"
			},
			effect: {
				en: "Search your deck for up to 3 Lightning Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 3 cartes Énergie Lightning dans votre deck et attachez-les à l’un de vos Pokémon. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 3 cartas de Energía Lightning y únelas a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a tre carte Energia Lightning e assegnale a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 3 cartas de Energia Lightning no seu baralho e ligue-as a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 3 Lightning-Energiekarten und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck."
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
				en: "Tag Bolt GX",
				fr: "Escouade Foudroyante GX",
				es: "Rayo Relevo GX",
				it: "Bolide Alleato GX",
				pt: "Relâmpago de Aliados GX",
				de: "Doppel-Blitzschlag GX"
			},

			effect: {
				en: "If this Pokémon has at least 3 extra Lightning Energy attached to it (in addition to this attack’s cost), this attack does 170 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.) (You can’t use more than 1 GX attack in a game.)",
				fr: "Si au moins 3 Énergies Lightning supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 170 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Si este Pokémon tiene por lo menos 3 Energías Lightning adicionales unidas a él (además de las del coste de este ataque), este ataque hace 170 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). (No puedes usar más de 1 ataque GX en una partida).",
				it: "Se questo Pokémon ha almeno tre Energie Lightning extra assegnate, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 170 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina. Non puoi usare più di un attacco GX a partita.",
				pt: "Se este Pokémon tiver pelo menos 3 Energias Lightning adicionais ligadas a ele (além do custo deste ataque), este ataque causará 170 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). (Você não pode usar mais de 1 ataque GX por partida.)",
				de: "Wenn an dieses Pokémon mindestens 3 extra Lightning-Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 1 Pokémon auf der Bank deines Gegners 170 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
		cardmarket: 366888,
		tcgplayer: 183804
	}
}

export default card
