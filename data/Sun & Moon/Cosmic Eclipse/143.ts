import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Togepi & Cleffa & Igglybuff GX",
		fr: "Togepi, Mélo et Toudoudou GX",
		es: "Togepi, Cleffa e Igglybuff GX",
		it: "Togepi, Cleffa e Igglybuff GX",
		pt: "Togepi, Cleffa e Igglybuff GX",
		de: "Togepi & Pii & Fluffeluff GX"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		173,
		174,
		175
	],
	hp: 240,
	types: [
		"Fairy",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Rolling Panic",
				fr: "Pagaille Roulante",
				es: "Pánico Rodante",
				it: "Panico Rotolante",
				pt: "Pânico Rolante",
				de: "Purzelnde Panik"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara.",
				it: "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
				pt: "Jogue 1 moeda até sair coroa. Este ataque causa 30 pontos de dano a mais para cada cara.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "120+",

		},
		{
			cost: [
				"Fairy",
				"Fairy",
			],
			name: {
				en: "Supreme Puff GX",
				fr: "Chou-prême GX",
				es: "Bolita Suprema GX",
				it: "Paffutezza Suprema GX",
				pt: "Sopro Supremo GX",
				de: "Superbausch GX"
			},
			effect: {
				en: "Take another turn after this one. (Skip the between-turns step.) If this Pokémon has at least 14 extra Fairy Energy attached to it (in addition to this attack’s cost), your opponent shuffles all of their Benched Pokémon and all cards attached to them into their deck. (You can’t use more than 1 GX attack in a game.)",
				fr: "Jouez de nouveau après ce tour. (Sautez l’étape entre les tours.) Si au moins 14 Énergies Fairy supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), votre adversaire mélange tous ses Pokémon de Banc et les cartes qui leur sont attachées avec son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Toma otro turno después de este. (Sáltate el paso entre turnos). Si este Pokémon tiene por lo menos 14 Energías Fairy adicionales unidas a él (además de las del coste de este ataque), tu rival pone todos sus Pokémon en Banca y todas las cartas unidas a ellos en su baraja, y baraja todas las cartas. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Dopo questo turno, giocane un altro (salta la fase tra i turni). Se questo Pokémon ha almeno 14 Energie Fairy extra assegnate, in aggiunta a quelle del costo di questo attacco, il tuo avversario rimischia tutti i suoi Pokémon in panchina e tutte le carte loro assegnate nel proprio mazzo. Non puoi usare più di un attacco GX a partita.",
				pt: "Jogue novamente após esta vez de jogar (pule o passo “entre as vezes de jogar”). Se este Pokémon tiver pelo menos 14 Energias Fairy adicionais ligadas a ele (além do custo deste ataque), seu oponente embaralha todos os Pokémon no Banco dele(a) e todas as cartas ligadas a eles no próprio baralho (você não pode usar mais de 1 ataque GX por partida).",
				de: "Du bist nach diesem Zug erneut am Zug. (Lasse den Schritt zwischen den Zügen aus.) Wenn an dieses Pokémon mindestens 14 extra Fairy-Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), mischt dein Gegner alle Pokémon auf seiner Bank und alle an sie angelegten Karten in sein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

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
