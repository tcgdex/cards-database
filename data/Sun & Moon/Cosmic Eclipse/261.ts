import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Mega Lopunny & Jigglypuff GX",
		fr: "Méga-Lockpin et Rondoudou GX",
		es: "Mega-Lopunny y Jigglypuff GX",
		it: "Mega Lopunny e Jigglypuff GX",
		pt: "Mega Lopunny e Jigglypuff GX",
		de: "Mega-Schlapor & Pummeluff GX"
	},
	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		39,
		428,
	],
	hp: 240,
	types: [
		"Colorless",
	],

	stage: "Basic",
	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jumping Balloon",
				fr: "Ballon Bondissant",
				es: "Globo Saltador",
				it: "Palloncino Saltellante",
				pt: "Balão Saltitante",
				de: "Ballonsprung"
			},
			effect: {
				en: "This attack does 60 more damage for each of your opponent’s Pokémon-GX and Pokémon-EX in play.",
				fr: "Cette attaque inflige 60 dégâts supplémentaires pour chacun des Pokémon-GX et Pokémon-EX en jeu de votre adversaire.",
				es: "Este ataque hace 60 puntos de daño más por cada uno de los Pokémon-GX y Pokémon-EX en juego de tu rival.",
				it: "Questo attacco infligge 60 danni in più per ogni Pokémon-GX e ogni Pokémon-EX in gioco del tuo avversario.",
				pt: "Este ataque causa 60 pontos de dano a mais para cada um dos Pokémon-GX e Pokémon-EX do seu oponente em jogo.",
				de: "Diese Attacke fügt 60 Schadenspunkte mehr mal der Anzahl der Pokémon-GX und Pokémon-EX deines Gegners im Spiel zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Puffy Smashers GX",
				fr: "Écrasement Rebondi GX",
				es: "Golpes Inflados GX",
				it: "Distruttori Paffutelli GX",
				pt: "Arraso Fofinho GX",
				de: "Bauschbombe GX"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep. If this Pokémon has at least 4 extra Energy attached to it (in addition to this attack’s cost), this attack does 200 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.) (You can’t use more than 1 GX attack in a game.)",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi. Si au moins 4 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 200 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido. Si este Pokémon tiene por lo menos 4 Energías adicionales unidas a él (además de las del coste de este ataque), este ataque hace 200 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). (No puedes usar más de 1 ataque GX en una partida).",
				it: "Il Pokémon attivo del tuo avversario viene addormentato. Se questo Pokémon ha almeno quattro Energie extra assegnate, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 200 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina. Non puoi usare più di un attacco GX a partita.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido. Se este Pokémon tiver pelo menos 4 Energias adicionais ligadas a ele (além do custo deste ataque), este ataque causará 200 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). (Você não pode usar mais de 1 ataque GX por partida.)",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt. Wenn an dieses Pokémon mindestens 4 extra Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 1 Pokémon auf der Bank deines Gegners 200 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
