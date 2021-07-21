import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Eevee & Snorlax-GX",
		fr: "Évoli et Ronflex-GX",
		es: "Eevee y Snorlax-GX",
		it: "Eevee e Snorlax-GX",
		pt: "Eevee e Snorlax-GX",
		de: "Evoli & Relaxo-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		133,
	],
	hp: 270,
	types: [
		"Colorless",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cheer Up",
				fr: "Courage !",
				es: "Alegrón",
				it: "Incitare",
				pt: "Animar",
				de: "Aufmuntern"
			},
			effect: {
				en: "Attach an Energy card from your hand to 1 of your Pokémon.",
				fr: "Attachez une carte Énergie de votre main à l’un de vos Pokémon.",
				es: "Une 1 carta de Energía de tu mano a 1 de tus Pokémon.",
				it: "Assegna una carta Energia dalla tua mano a uno dei tuoi Pokémon.",
				pt: "Ligue 1 carta de Energia da sua mão a 1 dos seus Pokémon.",
				de: "Lege 1 Energiekarte aus deiner Hand an 1 deiner Pokémon an."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dump Truck Press",
				fr: "Pression Poids Lourd",
				es: "Presión Camión",
				it: "Pressa Devastante",
				pt: "Esmagamento de Caminhão",
				de: "Schuttpresse"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is an Evolution Pokémon, this attack does 120 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 120 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 120 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 120 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 120 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
			},
			damage: "120+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Megaton Friends GX",
				fr: "Amis Mégatonnes GX",
				es: "Amigos Megatón GX",
				it: "Amici Megatonici GX",
				pt: "Amigos Megaton GX",
				de: "Megatonnen-Freunde GX"
			},

			effect: {
				en: "If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack’s cost), draw cards until you have 10 cards in your hand. (You can’t use more than 1 GX attack in a game.)",
				fr: "Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), piochez jusqu’à avoir 10 cartes en main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Si este Pokémon tiene por lo menos 1 Energía adicional unida a él (además de las del coste de este ataque), roba cartas hasta que tengas 10 cartas en tu mano. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Se questo Pokémon ha almeno un’Energia extra assegnata, in aggiunta a quelle del costo di questo attacco, pesca fino ad avere dieci carte in mano. Non puoi usare più di un attacco GX a partita.",
				pt: "Se este Pokémon tiver pelo menos 1 Energia adicional ligada a ele (além do custo deste ataque), compre cartas até ter 10 cartas na sua mão (você não pode usar mais de 1 ataque GX por partida).",
				de: "Wenn an dieses Pokémon mindestens 1 extra Energie angelegt ist (zusätzlich zu den Kosten dieser Attacke), ziehe so lang Karten, bis du 10 Karten auf deiner Hand hast. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

			damage: 210
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
