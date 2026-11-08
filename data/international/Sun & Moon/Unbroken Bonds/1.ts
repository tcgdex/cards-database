import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Pheromosa & Buzzwole GX",
		'fr-fr': "Cancrelove et Mouscoto GX",
		'es-es': "Pheromosa y Buzzwole GX",
		'it-it': "Pheromosa e Buzzwole GX",
		'pt-br': "Pheromosa e Buzzwole GX",
		'de-de': "Schabelle & Masskito GX"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		794,
		795
	],

	hp: 260,

	types: [
		"Grass",
	],

	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Jet Punch",
				'fr-fr': "Coup Rapide",
				'es-es': "Puño Propulsión",
				'it-it': "Pugno Jet",
				'pt-br': "Soco Jato",
				'de-de': "Jet-Schlag"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Elegant Sole",
				'fr-fr': "Semelle Élégante",
				'es-es': "Suela Elegante",
				'it-it': "Rara Eleganza",
				'pt-br': "Sola Elegante",
				'de-de': "Elegante Sohle"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon’s Elegant Sole attack’s base damage is 60.",
				'fr-fr': "Pendant votre prochain tour, les dégâts de base de l’attaque Semelle Élégante de ce Pokémon sont de 60.",
				'es-es': "Durante tu próximo turno, el daño básico del ataque Suela Elegante de este Pokémon es de 60.",
				'it-it': "Durante il tuo prossimo turno, i danni base dell’attacco Rara Eleganza di questo Pokémon sono 60.",
				'pt-br': "Durante a sua próxima vez de jogar, o dano base do ataque Sola Elegante deste Pokémon será 60.",
				'de-de': "Während deines nächsten Zuges beträgt der Grundschaden der Attacke Elegante Sohle dieses Pokémon 60 Schadenspunkte."
			},
			damage: 190,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Beast Game GX",
				'fr-fr': "Jeu Chimérique GX",
				'es-es': "Juego de Entes GX",
				'it-it': "Ultra Azzardo GX",
				'pt-br': "Jogo de Criatura GX",
				'de-de': "Bestienspiel GX"
			},
			effect: {
				'en-us': "If your opponent’s Pokémon is Knocked Out by damage from this attack, take 1 more Prize card. If this Pokémon has at least 7 extra Energy attached to it (in addition to this attack’s cost), take 3 more Prize cards instead. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez une carte Récompense supplémentaire. Si au moins 7 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), récupérez 3 cartes Récompense supplémentaires au lieu d’une. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Si el Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, coge 1 carta de Premio más. Si este Pokémon tiene por lo menos 7 Energías adicionales unidas a él (además de las del coste de este ataque), coge 3 cartas de Premio más. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Se un Pokémon del tuo avversario viene messo KO dai danni di questo attacco, prendi una carta Premio in più. Se questo Pokémon ha almeno sette Energie extra assegnate, in aggiunta a quelle del costo di questo attacco, prendi tre carte Premio in più. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Se algum dos Pokémon do seu oponente for Nocauteado pelo dano deste ataque, pegue 1 carta de Prêmio a mais. Se este Pokémon tiver pelo menos 7 Energias adicionais ligadas a ele (além do custo deste ataque), pegue 3 cartas de Prêmio a mais ao invés de 1 (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Wenn das Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, nimm 1 Preiskarte mehr. Wenn an dieses Pokémon mindestens 7 extra Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), nimm stattdessen 3 Preiskarten mehr. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 50,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'fr-fr': "Jeu Chimérique-GX",
			},
			effect: {
				'fr-fr': "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez une carte Récompense supplémentaire. Si au moins 7 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), récupérez 3 cartes Récompense supplémentaires au lieu d’une. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 370785,
		tcgplayer: 188401
	}
}

export default card
