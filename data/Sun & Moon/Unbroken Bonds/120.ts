import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Lucario & Melmetal GX",
		fr: "Lucario et Melmetal GX",
		es: "Lucario y Melmetal GX",
		it: "Lucario e Melmetal GX",
		pt: "Lucario e Melmetal GX",
		de: "Lucario & Melmetal GX"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		448,
	],

	hp: 260,

	types: [
		"Metal",
	],

	suffix: "TAG TEAM-GX",

	attacks: [{
		name: {
			en: "Steel Fist",
			fr: "Poing d’Acier",
			es: "Puño de Acero",
			it: "Pugno di Acciaio",
			pt: "Punho de Aço",
			de: "Stahlfaust"
		},

		damage: 50,

		effect: {
			en: "Search your deck for a Metal Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez une carte Énergie Metal dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta de Energía Metal y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Energia Metal e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por 1 carta de Energia Metal no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Metal-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
			es: "Impacto Pesado",
			it: "Impatto Pesante",
			pt: "Impacto Pesado",
			de: "Schwerer Einschlag"
		},

		damage: 150,
		cost: ["Metal", "Metal", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Full Metal Wall GX",
			fr: "Mur Métal Plein GX",
			es: "Muro Metálico Total GX",
			it: "Metalmuraglia GX",
			pt: "Muralha Metálica GX",
			de: "Metallwand GX"
		},

		effect: {
			en: "For the rest of this game, your Metal Pokémon take 30 less damage from your opponent’s attacks (after applying Weakness and Resistance). If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack’s cost), discard all Energy from your opponent’s Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
			fr: "Jusqu’à la fin de la partie, vos Pokémon Metal subissent 30 dégâts de moins des attaques de votre adversaire (après application de la Faiblesse et de la Résistance). Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), défaussez toute l’Énergie du Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			es: "Durante el resto de la partida, los ataques de tu rival hacen 30 puntos de daño menos a tus Pokémon Metal (después de aplicar Debilidad y Resistencia). Si este Pokémon tiene por lo menos 1 Energía adicional unida a él (además de las del coste de este ataque), descarta todas las Energías del Pokémon Activo de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
			it: "Per il resto della partita, i tuoi Pokémon Metal subiscono 30 danni in meno dagli attacchi del tuo avversario, dopo aver applicato debolezza e resistenza. Se questo Pokémon ha almeno un’Energia extra assegnata, in aggiunta a quelle del costo di questo attacco, scarta tutte le Energie assegnate al Pokémon attivo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
			pt: "Pelo resto da partida, seus Pokémon Metal receberão 30 pontos de dano a menos dos ataques do seu oponente (após a aplicação de Fraqueza e Resistência). Se este Pokémon tiver pelo menos 1 Energia adicional ligada a ele (além do custo deste ataque), descarte todas as Energias do Pokémon Ativo do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
			de: "Für den Rest des Spiels werden deinen Metal-Pokémon durch Attacken deines Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden). Wenn an dieses Pokémon mindestens 1 extra Energie angelegt ist (zusätzlich zu den Kosten dieser Attacke), lege alle Energien vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 370789
	}
}

export default card
