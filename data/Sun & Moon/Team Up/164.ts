import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Gengar & Mimikyu GX",
		fr: "Ectoplasma et Mimiqui GX",
		es: "Gengar y Mimikyu GX",
		it: "Gengar e Mimikyu GX",
		pt: "Gengar e Mimikyu GX",
		de: "Gengar & Mimigma GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		94,
	],
	hp: 240,
	types: [
		"Psychic",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Poltergeist",
				fr: "Poltergeist",
				es: "Poltergeist",
				it: "Poltergeist",
				pt: "Poltergeist",
				de: "Poltergeist"
			},
			effect: {
				en: "Your opponent reveals their hand. This attack does 50 damage for each Trainer card you find there.",
				fr: "Votre adversaire dévoile sa main. Cette attaque inflige 50 dégâts pour chaque carte Dresseur que vous y trouvez.",
				es: "Tu rival enseña las cartas de su mano. Este ataque hace 50 puntos de daño por cada carta de Entrenador que encuentres entre ellas.",
				it: "Il tuo avversario mostra le carte che ha in mano. Questo attacco infligge 50 danni per ogni carta Allenatore presente tra quelle carte.",
				pt: "Seu oponente revela a própria mão. Este ataque causa 50 pontos de dano para cada carta de Treinador que encontrar lá.",
				de: "Dein Gegner zeigt dir seine Handkarten. Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der Trainerkarten zu, die du dort findest."
			},
			damage: "50×",

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Horror House GX",
				fr: "Maison Terrifiante GX",
				es: "Casa del Terror GX",
				it: "Casa degli Orrori GX",
				pt: "Casa do Horror GX",
				de: "Spukhaus GX"
			},
			effect: {
				en: "Your opponent can’t play any cards from their hand during their next turn. If this Pokémon has at least 1 extra Psychic Energy attached to it (in addition to this attack’s cost), each player draws cards until they have 7 cards in their hand. (You can’t use more than 1 GX attack in a game.)",
				fr: "Votre adversaire ne peut pas jouer de carte de sa main pendant son prochain tour. Si au moins une Énergie Psychic supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), chaque joueur pioche jusqu’à avoir 7 cartes en main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Tu rival no puede jugar ninguna carta de su mano durante su próximo turno. Si este Pokémon tiene por lo menos 1 Energía Psychic adicional unida a él (además de las del coste de este ataque), cada jugador roba cartas hasta tener 7 cartas en su mano. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Il tuo avversario non può giocare le carte che ha in mano durante il suo prossimo turno. Se questo Pokémon ha almeno un’Energia Psychic extra assegnata, in aggiunta a quelle del costo di questo attacco, ciascun giocatore pesca fino ad avere sette carte in mano. Non puoi usare più di un attacco GX a partita.",
				pt: "Seu oponente não poderá jogar nenhuma carta da própria mão durante a próxima vez dele(a) jogar. Se este Pokémon tiver pelo menos 1 Energia Psychic adicional ligada a ele (além do custo deste ataque), cada jogador comprará cartas até ter 7 cartas na própria mão (você não pode usar mais de 1 ataque GX por partida).",
				de: "Dein Gegner kann während seines nächsten Zuges keine Karten aus seiner Hand spielen. Wenn an dieses Pokémon mindestens 1 extra Psychic-Energie angelegt ist (zusätzlich zu den Kosten dieser Attacke), zieht jeder Spieler so lang Karten, bis er 7 Karten auf seiner Hand hat. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
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
