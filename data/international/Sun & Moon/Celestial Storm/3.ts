import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Victreebel",
		'fr-fr': "Empiflor",
		'es-es': "Victreebel",
		'it-it': "Victreebel",
		'pt-br': "Victreebel",
		'de-de': "Sarzenia"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		71,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Weepinbell",
		'fr-fr': "Boustiflor",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Fragrance Trap",
				'fr-fr': "Piège Parfumé",
				'es-es': "Trampa Fragancia",
				'it-it': "Trappola Aromatica",
				'pt-br': "Armadilha Cheirosa",
				'de-de': "Aromafalle"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes lanzar 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi lanciare una moneta. Se esce testa, scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode jogar 1 moeda. Se sair cara, troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Münze werfen. Tausche bei Kopf 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Corrosive Acid",
				'fr-fr': "Acide Corrosif",
				'es-es': "Ácido Corrosivo",
				'it-it': "Acido Corrosivo",
				'pt-br': "Ácido Corrosivo",
				'de-de': "Zersetzendes Gift"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Burned.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Queimado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verbrannt."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Once ingested into this Pokémon's body, even the hardest object will melt into nothing.",
	},

	thirdParty: {
		cardmarket: 361250,
		tcgplayer: 170808
	}
}

export default card
