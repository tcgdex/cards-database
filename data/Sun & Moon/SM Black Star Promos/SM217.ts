import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Trevenant & Dusknoir GX",
		fr: "Desséliande et Noctunoir GX",
		es: "Trevenant y Dusknoir GX",
		it: "Trevenant e Dusknoir GX",
		pt: "Trevenant e Dusknoir GX",
		de: "Trombork & Zwirrfinst GX"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [


		709,


		477,


	],

	hp: 270,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Night Watch",
				fr: "Veillée Nocturne",
				es: "Vigilancia Nocturna",
				it: "Guardia Notturna",
				pt: "Vigília Noturna",
				de: "Nachtwache"
			},
			effect: {
				en: "Choose 2 random cards from your opponent’s hand. Your opponent reveals those cards and shuffles them into their deck.",
				fr: "Choisissez 2 cartes au hasard dans la main de votre adversaire. Votre adversaire montre ces cartes et les mélange avec son deck.",
				es: "Elige 2 cartas aleatorias de la mano de tu rival. Tu rival enseña esas cartas, las pone en su baraja y las baraja todas.",
				it: "Scegli due carte a caso dalla mano del tuo avversario. Il tuo avversario mostra quelle carte e le rimischia nel suo mazzo.",
				pt: "Escolha 2 cartas aleatórias da mão do seu oponente. Seu oponente revela aquelas cartas e as embaralha no próprio baralho.",
				de: "Wähle 2 zufällige Karten aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karten und mischt sie in sein Deck."
			},
			damage: 150,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Pale Moon GX",
				fr: "Lune Pâle GX",
				es: "Luna Pálida GX",
				it: "Luna Pallida GX",
				pt: "Lua Pálida GX",
				de: "Fahler Mond GX"
			},
			effect: {
				en: "At the end of your opponent’s next turn, the Defending Pokémon will be Knocked Out. If this Pokémon has at least 1 extra Psychic Energy attached to it (in addition to this attack’s cost), discard all Energy from your opponent’s Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur sera K.O. Si au moins une Énergie Psychic supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), défaussez toute l’Énergie du Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Al final del próximo turno de tu rival, el Pokémon Defensor quedará Fuera de Combate. Si este Pokémon tiene por lo menos 1 Energía Psychic adicional unida a él (además de las del coste de este ataque), descarta todas las Energías del Pokémon Activo de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Alla fine del turno del tuo avversario, il Pokémon difensore verrà messo KO. Se questo Pokémon ha almeno un’Energia Psychic extra assegnata, in aggiunta a quelle del costo di questo attacco, scarta tutte le Energie assegnate al Pokémon attivo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "O Pokémon Defensor será Nocauteado no final da próxima vez de jogar do seu oponente. Se este Pokémon tiver pelo menos 1 Energia Psychic adicional ligada a ele (além do custo deste ataque), descarte todas as Energias do Pokémon Ativo do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Am Ende des nächsten Zuges deines Gegners wird das Verteidigende Pokémon kampfunfähig. Wenn an dieses Pokémon mindestens 1 extra Psychic-Energie angelegt ist (zusätzlich zu den Kosten dieser Attacke), lege alle Energien vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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

	retreat: 3
}

export default card
