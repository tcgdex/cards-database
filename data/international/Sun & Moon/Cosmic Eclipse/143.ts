import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Togepi & Cleffa & Igglybuff GX",
		'fr-fr': "Togepi, Mélo et Toudoudou GX",
		'es-es': "Togepi, Cleffa e Igglybuff GX",
		'it-it': "Togepi, Cleffa e Igglybuff GX",
		'pt-br': "Togepi, Cleffa e Igglybuff GX",
		'de-de': "Togepi & Pii & Fluffeluff GX"
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
				'en-us': "Rolling Panic",
				'fr-fr': "Pagaille Roulante",
				'es-es': "Pánico Rodante",
				'it-it': "Panico Rotolante",
				'pt-br': "Pânico Rolante",
				'de-de': "Purzelnde Panik"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
				'fr-fr': "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara.",
				'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
				'pt-br': "Jogue 1 moeda até sair coroa. Este ataque causa 30 pontos de dano a mais para cada cara.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "120+",

		},
		{
			cost: [
				"Fairy",
				"Fairy",
			],
			name: {
				'en-us': "Supreme Puff GX",
				'fr-fr': "Chou-prême GX",
				'es-es': "Bolita Suprema GX",
				'it-it': "Paffutezza Suprema GX",
				'pt-br': "Sopro Supremo GX",
				'de-de': "Superbausch GX"
			},
			effect: {
				'en-us': "Take another turn after this one. (Skip the between-turns step.) If this Pokémon has at least 14 extra Fairy Energy attached to it (in addition to this attack’s cost), your opponent shuffles all of their Benched Pokémon and all cards attached to them into their deck. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Jouez de nouveau après ce tour. (Sautez l’étape entre les tours.) Si au moins 14 Énergies Fairy supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), votre adversaire mélange tous ses Pokémon de Banc et les cartes qui leur sont attachées avec son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Toma otro turno después de este. (Sáltate el paso entre turnos). Si este Pokémon tiene por lo menos 14 Energías Fairy adicionales unidas a él (además de las del coste de este ataque), tu rival pone todos sus Pokémon en Banca y todas las cartas unidas a ellos en su baraja, y baraja todas las cartas. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Dopo questo turno, giocane un altro (salta la fase tra i turni). Se questo Pokémon ha almeno 14 Energie Fairy extra assegnate, in aggiunta a quelle del costo di questo attacco, il tuo avversario rimischia tutti i suoi Pokémon in panchina e tutte le carte loro assegnate nel proprio mazzo. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Jogue novamente após esta vez de jogar (pule o passo “entre as vezes de jogar”). Se este Pokémon tiver pelo menos 14 Energias Fairy adicionais ligadas a ele (além do custo deste ataque), seu oponente embaralha todos os Pokémon no Banco dele(a) e todas as cartas ligadas a eles no próprio baralho (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Du bist nach diesem Zug erneut am Zug. (Lasse den Schritt zwischen den Zügen aus.) Wenn an dieses Pokémon mindestens 14 extra Fairy-Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), mischt dein Gegner alle Pokémon auf seiner Bank und alle an sie angelegten Karten in sein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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

	thirdParty: {
		cardmarket: 398484,
		tcgplayer: 200353
	}
}

export default card
