import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Greninja & Zoroark GX",
		'fr-fr': "Amphinobi et Zoroark GX",
		'es-es': "Greninja y Zoroark GX",
		'it-it': "Greninja e Zoroark GX",
		'pt-br': "Greninja e Zoroark GX",
		'de-de': "Quajutsu & Zoroark GX"
	},

	illustrator: "kodama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [658, 571],
	hp: 250,

	types: [
		"Darkness",
	],

	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dark Pulse",
				'fr-fr': "Vibrobscur",
				'es-es': "Pulso Umbrío",
				'it-it': "Neropulsar",
				'pt-br': "Pulso Sombrio",
				'de-de': "Finsteraura"
			},
			effect: {
				'en-us': "This attack does 30 more damage times the amount of Darkness Energy attached to all of your Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies Darkness attachées à vos Pokémon.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada Energía Darkness unida a todos tus Pokémon.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Energia Darkness assegnata ai tuoi Pokémon.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais vezes a quantidade de Energia Darkness ligada a todos os seus Pokémon.",
				'de-de': "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der an alle deine Pokémon angelegten Darkness-Energien zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dark Union GX",
				'fr-fr': "Union Ténébreuse GX",
				'es-es': "Unión Siniestra GX",
				'it-it': "Alleanza Oscura GX",
				'pt-br': "União Sombria GX",
				'de-de': "Finsterbund GX"
			},
			effect: {
				'en-us': "Put 2 in any combination of Darkness Pokémon-GX and Darkness Pokémon-EX from your discard pile onto your Bench. If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack’s cost), attach 2 Energy cards from your discard pile to each Pokémon that you put onto your Bench in this way. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Ajoutez de votre pile de défausse à votre Banc une combinaison de 2 cartes choisies parmi des Pokémon-GX Darkness et des Pokémon-EX Darkness. Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), attachez 2 cartes Énergie de votre pile de défausse à chacun des Pokémon que vous avez placés sur votre Banc de cette façon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Pon 2 Pokémon-GX Darkness y Pokémon-EX Darkness, en cualquier combinación, de tu pila de descartes en tu Banca. Si este Pokémon tiene por lo menos 1 Energía adicional unida a él (además de las del coste de este ataque), une 2 cartas de Energía de tu pila de descartes a cada Pokémon que hayas puesto en tu Banca de esta manera. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Prendi due Pokémon-GX Darkness e Pokémon-EX Darkness in qualsiasi combinazione dalla tua pila degli scarti e mettili nella tua panchina. Se questo Pokémon ha almeno un’Energia extra assegnata, in aggiunta a quelle del costo di questo attacco, assegna a ciascuno dei Pokémon che hai messo in panchina in questo modo due carte Energia dalla tua pila degli scarti. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Coloque 2 Pokémon GX Darkness e Pokémon EX Darkness da sua pilha de descarte no seu Banco em qualquer combinação. Se este Pokémon tiver pelo menos 1 Energia adicional ligada a ele (além do custo deste ataque), ligue 2 cartas de Energia da sua pilha de descarte a cada Pokémon que colocou no seu Banco desta forma (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Lege eine beliebige Kombination aus 2 Darkness-Pokémon-GX und Darkness-Pokémon-EX aus deinem Ablagestapel auf deine Bank. Wenn an dieses Pokémon mindestens 1 extra Energie angelegt ist (zusätzlich zu den Kosten dieser Attacke), lege 2 Energiekarten aus deinem Ablagestapel an jedes auf diese Weise auf deine Bank gelegte Pokémon an. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 370788,
		tcgplayer: 189310
	}
}

export default card
