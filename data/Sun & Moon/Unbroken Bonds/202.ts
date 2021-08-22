import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Honchkrow GX",
		fr: "Corboss GX",
		es: "Honchkrow GX",
		it: "Honchkrow GX",
		pt: "Honchkrow GX",
		de: "Kramshef GX"
	},
	illustrator: "sadaji",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		430,
	],
	hp: 210,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Murkrow",
		fr: "Cornèbre",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ruler of the Night",
				fr: "Maître de la Nuit",
				es: "Jefe de la Noche",
				it: "Signore della Notte",
				pt: "Chefão da Noite",
				de: "Herrscher der Nacht"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent can’t play any Pokémon Tool, Special Energy, or Stadium cards from their hand.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Outil Pokémon, de cartes Énergie spéciale ou de cartes Stade de sa main.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, tu rival no puede jugar ninguna carta de Herramienta Pokémon, Energía Especial o Estadio de su mano.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, il tuo avversario non può giocare le carte Oggetto Pokémon, Energia speciale e Stadio che ha in mano.",
				pt: "Enquanto este Pokémon for o seu Pokémon Ativo, seu oponente não poderá jogar nenhuma carta de Ferramenta Pokémon, Energia Especial ou Estádio da própria mão.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, kann dein Gegner keine Pokémon-Ausrüstungen, Spezial-Energien oder Stadionkarten aus seiner Hand spielen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Feather Storm",
				fr: "Volée de Plumes",
				es: "Tormenta de Plumas",
				it: "Tempesta Piumata",
				pt: "Tempestade de Penas",
				de: "Federsturm"
			},
			effect: {
				en: "This attack does 30 damage to 2 of your opponent’s Benched Pokémon-GX and Pokémon-EX. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à 2 des Pokémon-GX et Pokémon-EX de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a 2 de los Pokémon-GX y Pokémon-EX en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a due dei Pokémon-GX e Pokémon-EX nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 pontos de dano a 2 dos Pokémon-GX e Pokémon-EX no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 2 Pokémon-GX und Pokémon-EX auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 90,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Unfair GX",
				fr: "Injuste GX",
				es: "Injusto GX",
				it: "Sleale GX",
				pt: "Injusto GX",
				de: "Unfair GX"
			},
			effect: {
				en: "Your opponent reveals their hand. Discard 2 cards from it. (You can’t use more than 1 GX attack in a game.)",
				fr: "Votre adversaire dévoile sa main. Défaussez-en 2 cartes. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Tu rival enseña las cartas de su mano. Descarta 2 de sus cartas. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Il tuo avversario mostra le carte che ha in mano. Scarta due carte tra esse. Non puoi usare più di un attacco GX a partita.",
				pt: "Seu oponente revela a própria mão. Descarte 2 cartas da mão dele(a) (você não pode usar mais de 1 ataque GX por partida).",
				de: "Dein Gegner zeigt dir seine Handkarten. Lege 2 Karten aus der Hand deines Gegners auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
	retreat: 2,



}

export default card
