import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Moltres & Zapdos & Articuno GX",
		fr: "Sulfura, Électhor et Artikodin GX",
		es: "Moltres, Zapdos y Articuno GX",
		it: "Moltres, Zapdos e Articuno GX",
		pt: "Moltres, Zapdos e Articuno GX",
		de: "Lavados & Zapdos & Arktos GX"
	},
	illustrator: "HYOGONOSUKE",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [146, 145, 144],
	hp: 300,
	types: [
		"Colorless",
	],

	stage: "Basic",
	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Fire",
				"Lightning",
				"Water",
				"Colorless",
			],
			name: {
				en: "Trinity Burn",
				fr: "Triple Brûlure",
				es: "Quemadura Trinidad",
				it: "Triade Ardente",
				pt: "Queimadura Tríptica",
				de: "Dreiheitsbrand"
			},

			damage: 210,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sky Legends GX",
				fr: "Légendes Célestes GX",
				es: "Leyendas del Cielo GX",
				it: "Leggende Celesti GX",
				pt: "Lendas do Céu GX",
				de: "Legenden der Lüfte GX"
			},
			effect: {
				en: "Shuffle this Pokémon and all cards attached to it into your deck. If this Pokémon has at least 1 extra Fire, Water, and Lightning Energy attached to it (in addition to this attack’s cost), this attack does 110 damage to 3 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.) (You can’t use more than 1 GX attack in a game.)",
				fr: "Mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck. Si au moins une Énergie Fire, Water et Lightning supplémentaire sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 110 dégâts à 3 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Pon este Pokémon y todas las cartas unidas a él en tu baraja y barájalas todas. Si este Pokémon tiene por lo menos 1 Energía Fire, Water y Lightning adicionales unidas a él (además de las del coste de este ataque), este ataque hace 110 puntos de daño a 3 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). (No puedes usar más de 1 ataque GX en una partida).",
				it: "Rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo. Se questo Pokémon ha almeno un’Energia Fire, un’Energia Water e un’Energia Lightning extra assegnate, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 110 danni a tre dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina. Non puoi usare più di un attacco GX a partita.",
				pt: "Embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho. Se este Pokémon tiver pelo menos 1 Energia Fire, Water e Lightning adicional ligada a ele (além do custo deste ataque), este ataque causará 110 pontos de dano a 3 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). (Você não pode usar mais de 1 ataque GX por partida.)",
				de: "Mische dieses Pokémon und alle an es angelegten Karten in dein Deck. Wenn an dieses Pokémon mindestens 1 extra Fire-, Water- und Lightning-Energie angelegt ist (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 3 Pokémon deines Gegners 110 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
