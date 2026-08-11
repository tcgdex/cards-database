import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [133, 143],
	name: {
		'fr-fr': "Évoli et Ronflex GX",
		'en-us': "Eevee & Snorlax GX",
		'es-es': "Eevee y Snorlax GX",
		'it-it': "Eevee e Snorlax GX",
		'pt-br': "Eevee e Snorlax GX",
		'de-de': "Evoli & Relaxo GX"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,

	hp: 270,
	types: [
		"Colorless",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			name: {
				'fr-fr': "Courage !",
				'en-us': "Cheer Up",
				'es-es': "Alegrón",
				'it-it': "Incitare",
				'pt-br': "Animar",
				'de-de': "Aufmuntern"
			},

			effect: {
				'en-us': "Attach an Energy card from your hand to 1 of your Pokémon.",
				'fr-fr': "Attachez une carte Énergie de votre main à l’un de vos Pokémon.",
				'es-es': "Une 1 carta de Energía de tu mano a 1 de tus Pokémon.",
				'it-it': "Assegna una carta Energia dalla tua mano a uno dei tuoi Pokémon.",
				'pt-br': "Ligue 1 carta de Energia da sua mão a 1 dos seus Pokémon.",
				'de-de': "Lege 1 Energiekarte aus deiner Hand an 1 deiner Pokémon an."
			},

			cost: ["Colorless"]
		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

			name: {
				'fr-fr': "Pression Poids Lourd",
				'en-us': "Dump Truck Press",
				'es-es': "Presión Camión",
				'it-it': "Pressa Devastante",
				'pt-br': "Esmagamento de Caminhão",
				'de-de': "Schuttpresse"
			},

			effect: {
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 120 dégâts supplémentaires.",
				'en-us': "If your opponent’s Active Pokémon is an Evolution Pokémon, this attack does 120 more damage.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 120 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 120 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 120 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
			},

			damage: "120+"
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'fr-fr': "Amis Mégatonnes GX",
				'en-us': "Megaton Friends GX",
				'es-es': "Amigos Megatón GX",
				'it-it': "Amici Megatonici GX",
				'pt-br': "Amigos Megaton GX",
				'de-de': "Megatonnen-Freunde GX"
			},
			effect: {
				'fr-fr': "Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), piochez jusqu’à avoir 10 cartes en main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'en-us': "If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack’s cost), draw cards until you have 10 cards in your hand. (You can’t use more than 1 GX attack in a game.)",
				'es-es': "Si este Pokémon tiene por lo menos 1 Energía adicional unida a él (además de las del coste de este ataque), roba cartas hasta que tengas 10 cartas en tu mano. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Se questo Pokémon ha almeno un’Energia extra assegnata, in aggiunta a quelle del costo di questo attacco, pesca fino ad avere dieci carte in mano. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Se este Pokémon tiver pelo menos 1 Energia adicional ligada a ele (além do custo deste ataque), compre cartas até ter 10 cartas na sua mão (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Wenn an dieses Pokémon mindestens 1 extra Energie angelegt ist (zusätzlich zu den Kosten dieser Attacke), ziehe so lang Karten, bis du 10 Karten auf deiner Hand hast. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 210,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'fr-fr': "Amis Mégatonnes-GX",
			},
			effect: {
				'fr-fr': "Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), piochez jusqu’à avoir 10 cartes en main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 210,

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
