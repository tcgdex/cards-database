import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [197, 491],
	set: Set,

	name: {
		en: "Umbreon & Darkrai GX",
		fr: "Noctali et Darkrai GX",
		es: "Umbreon y Darkrai GX",
		it: "Umbreon e Darkrai GX",
		pt: "Umbreon e Darkrai GX",
		de: "Nachtara & Darkrai GX"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],

	attacks: [{
		name: {
			en: "Black Lance",
			fr: "Lance Noire",
			es: "Lanza Negra",
			it: "Lancia Oscura",
			pt: "Lança Negra",
			de: "Finsterlanze"
		},

		damage: 150,

		effect: {
			en: "This attack does 60 damage to 1 of your opponent’s Benched Pokémon-GX or Benched Pokémon-EX. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 60 dégâts à l’un des Pokémon-GX ou Pokémon-EX de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 60 puntos de daño a 1 de los Pokémon-GX en Banca o Pokémon-EX en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 60 danni a uno dei Pokémon-GX o dei Pokémon-EX nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 60 pontos de dano a 1 dos Pokémon-GX ou Pokémon-EX no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt 1 Pokémon-GX oder Pokémon-EX auf der Bank deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Darkness", "Darkness", "Colorless"]
	}, {
		name: {
			en: "Dark Moon GX",
			fr: "Lune Sombre GX",
			es: "Luna Siniestra GX",
			it: "Oscurità Lunare GX",
			pt: "Lua Sombria GX",
			de: "Finstermond GX"
		},

		effect: {
			en: "Your opponent can’t play any Trainer cards from their hand during their next turn. If this Pokémon has at least 5 extra Darkness Energy attached to it (in addition to this attack’s cost), your opponent’s Active Pokémon is Knocked Out. (You can’t use more than 1 GX attack in a game.)",
			fr: "Votre adversaire ne peut pas jouer de carte Dresseur de sa main pendant son prochain tour. Si au moins 5 Énergies Darkness supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), le Pokémon Actif de votre adversaire est mis K.O. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			es: "Tu rival no puede jugar ninguna carta de Entrenador de su mano durante su próximo turno. Si este Pokémon tiene por lo menos 5 Energías Darkness adicionales unidas a él (además de las del coste de este ataque), el Pokémon Activo de tu rival queda Fuera de Combate. (No puedes usar más de 1 ataque GX en una partida).",
			it: "Il tuo avversario non può giocare le carte Allenatore che ha in mano durante il suo prossimo turno. Se questo Pokémon ha almeno cinque Energie Darkness extra assegnate, in aggiunta a quelle del costo di questo attacco, il Pokémon attivo del tuo avversario viene messo KO. Non puoi usare più di un attacco GX a partita.",
			pt: "Seu oponente não poderá jogar nenhuma carta de Treinador da própria mão durante a próxima vez dele(a) jogar. Se este Pokémon tiver pelo menos 5 Energias Darkness adicionais ligadas a ele (além do custo deste ataque), o Pokémon Ativo do seu oponente será Nocauteado (você não pode usar mais de 1 ataque GX por partida).",
			de: "Dein Gegner kann während seines nächsten Zuges keine Trainerkarten aus seiner Hand spielen. Wenn an dieses Pokémon mindestens 5 extra Darkness-Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), ist das Aktive Pokémon deines Gegners kampfunfähig. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Psychic",
		value: "-20"
	}],

	retreat: 2
}

export default card