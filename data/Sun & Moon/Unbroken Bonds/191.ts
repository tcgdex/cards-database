import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Pheromosa & Buzzwole-GX",
		fr: "Cancrelove et Mouscoto-GX",
		es: "Pheromosa y Buzzwole-GX",
		it: "Pheromosa e Buzzwole-GX",
		pt: "Pheromosa e Buzzwole-GX",
		de: "Schabelle & Masskito-GX"
	},
	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		794,
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
				en: "Jet Punch",
				fr: "Coup Rapide",
				es: "Puño Propulsión",
				it: "Pugno Jet",
				pt: "Soco Jato",
				de: "Jet-Schlag"
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
				en: "Elegant Sole",
				fr: "Semelle Élégante",
				es: "Suela Elegante",
				it: "Rara Eleganza",
				pt: "Sola Elegante",
				de: "Elegante Sohle"
			},
			effect: {
				en: "During your next turn, this Pokémon’s Elegant Sole attack’s base damage is 60.",
				fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Semelle Élégante de ce Pokémon sont de 60.",
				es: "Durante tu próximo turno, el daño básico del ataque Suela Elegante de este Pokémon es de 60.",
				it: "Durante il tuo prossimo turno, i danni base dell’attacco Rara Eleganza di questo Pokémon sono 60.",
				pt: "Durante a sua próxima vez de jogar, o dano base do ataque Sola Elegante deste Pokémon será 60.",
				de: "Während deines nächsten Zuges beträgt der Grundschaden der Attacke Elegante Sohle dieses Pokémon 60 Schadenspunkte."
			},
			damage: 190,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Beast Game GX",
				fr: "Jeu Chimérique GX",
				es: "Juego de Entes GX",
				it: "Ultra Azzardo GX",
				pt: "Jogo de Criatura GX",
				de: "Bestienspiel GX"
			},
			effect: {
				en: "If your opponent’s Pokémon is Knocked Out by damage from this attack, take 1 more Prize card. If this Pokémon has at least 7 extra Energy attached to it (in addition to this attack’s cost), take 3 more Prize cards instead. (You can’t use more than 1 GX attack in a game.)",
				fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez une carte Récompense supplémentaire. Si au moins 7 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), récupérez 3 cartes Récompense supplémentaires au lieu d’une. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Si el Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, coge 1 carta de Premio más. Si este Pokémon tiene por lo menos 7 Energías adicionales unidas a él (además de las del coste de este ataque), coge 3 cartas de Premio más. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Se un Pokémon del tuo avversario viene messo KO dai danni di questo attacco, prendi una carta Premio in più. Se questo Pokémon ha almeno sette Energie extra assegnate, in aggiunta a quelle del costo di questo attacco, prendi tre carte Premio in più. Non puoi usare più di un attacco GX a partita.",
				pt: "Se algum dos Pokémon do seu oponente for Nocauteado pelo dano deste ataque, pegue 1 carta de Prêmio a mais. Se este Pokémon tiver pelo menos 7 Energias adicionais ligadas a ele (além do custo deste ataque), pegue 3 cartas de Prêmio a mais ao invés de 1 (você não pode usar mais de 1 ataque GX por partida).",
				de: "Wenn das Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, nimm 1 Preiskarte mehr. Wenn an dieses Pokémon mindestens 7 extra Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), nimm stattdessen 3 Preiskarten mehr. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 50,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				fr: "Jeu Chimérique-GX",
			},
			effect: {
				fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez une carte Récompense supplémentaire. Si au moins 7 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), récupérez 3 cartes Récompense supplémentaires au lieu d’une. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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



}

export default card
