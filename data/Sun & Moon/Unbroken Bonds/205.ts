import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Gardevoir & Sylveon GX",
		fr: "Gardevoir et Nymphali GX",
		es: "Gardevoir y Sylveon GX",
		it: "Gardevoir e Sylveon GX",
		pt: "Gardevoir e Sylveon GX",
		de: "Guardevoir & Feelinara GX"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		282,
	],
	hp: 260,
	types: [
		"Fairy",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fairy Song",
				fr: "Chant Féérique",
				es: "Canción de Hadas",
				it: "Canto di Fata",
				pt: "Canção de Fadas",
				de: "Feenlied"
			},
			effect: {
				en: "Search your deck for up to 2 Fairy Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 cartes Énergie Fairy dans votre deck et attachez-les à vos Pokémon de Banc, de la manière que vous voulez. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 cartas de Energía Fairy y únelas a tus Pokémon en Banca de la manera que desees. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due carte Energia Fairy e assegnale a piacimento ai tuoi Pokémon in panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 cartas de Energia Fairy no seu baralho e ligue-as aos seus Pokémon no Banco como desejar. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Fairy-Energiekarten und lege sie beliebig an die Pokémon auf deiner Bank an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Kaleidostorm",
				fr: "Kaléidouragan",
				es: "Caleidotempestad",
				it: "Caleidotempesta",
				pt: "Temporal Calidoscópico",
				de: "Kaleidosturm"
			},
			effect: {
				en: "Move any number of Energy from your Pokémon to your other Pokémon in any way you like.",
				fr: "Déplacez autant de cartes Énergie attachées à vos Pokémon que vous le voulez vers vos autres Pokémon, de la manière que vous voulez.",
				es: "Mueve cualquier cantidad de Energías de tus Pokémon a tus otros Pokémon de la manera que desees.",
				it: "Distribuisci a piacimento tutte le Energie assegnate ai tuoi Pokémon.",
				pt: "Mova qualquer número de Energia dos seus Pokémon para outros Pokémon seus como desejar.",
				de: "Verschiebe beliebig viele Energien von deinen Pokémon beliebig auf deine anderen Pokémon."
			},
			damage: 150,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Fairy",
			],

			name: {
				en: "Magical Miracle GX",
				fr: "Miracle Magique GX",
				es: "Milagro Mágico GX",
				it: "Magia Miracolosa GX",
				pt: "Milagre Mágico GX",
				de: "Magisches Wunder GX"
			},

			effect: {
				en: "If this Pokémon has at least 3 extra Fairy Energy attached to it (in addition to this attack’s cost), your opponent shuffles their hand into their deck. (You can’t use more than 1 GX attack in a game.)",
				fr: "Si au moins 3 Énergies Fairy supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), votre adversaire mélange sa main avec son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Si este Pokémon tiene por lo menos 3 Energías Fairy adicionales unidas a él (además de las del coste de este ataque), tu rival pone las cartas de su mano en su baraja y las baraja todas. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Se questo Pokémon ha almeno tre Energie Fairy extra assegnate, in aggiunta a quelle del costo di questo attacco, il tuo avversario rimischia le carte che hai in mano nel proprio mazzo. Non puoi usare più di un attacco GX a partita.",
				pt: "Se este Pokémon tiver pelo menos 3 Energias Fairy adicionais ligadas a ele (além do custo deste ataque), seu oponente embaralha a própria mão no baralho dele(a) (você não pode usar mais de 1 ataque GX por partida).",
				de: "Wenn an dieses Pokémon mindestens 3 extra Fairy-Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), mischt dein Gegner seine Handkarten in sein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

			damage: 200
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
