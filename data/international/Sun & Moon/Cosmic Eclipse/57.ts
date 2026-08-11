import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Phione",
		'fr-fr': "Phione",
		'es-es': "Phione",
		'it-it': "Phione",
		'pt-br': "Phione",
		'de-de': "Phione"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		489,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Whirlpool Suction",
				'fr-fr': "Tourbillon Aspirant",
				'es-es': "Succión Remolino",
				'it-it': "Mulinello Aspirante",
				'pt-br': "Redemoinho de Sucção",
				'de-de': "Strudelsog"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is on your Bench, you may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon. If you do, discard all cards attached to this Pokémon and put it on the bottom of your deck.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez demander à votre adversaire d’échanger son Pokémon Actif avec l’un de ses Pokémon de Banc. Dans ce cas, défaussez toutes les cartes attachées à ce Pokémon et placez-le en dessous de votre deck.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu Banca, puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca. Si lo haces, descarta todas las cartas unidas a este Pokémon y ponlo en la parte inferior de tu baraja.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua panchina, puoi far scambiare al tuo avversario il suo Pokémon attivo con uno della sua panchina. Se lo fai, scarta tutte le carte assegnate a questo Pokémon e mettilo in fondo al tuo mazzo.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon estiver no seu Banco, você poderá fazer com que o seu oponente troque o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a). Se fizer isto, descarte todas as cartas ligadas a este Pokémon e coloque-o como a última carta do seu baralho.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst), wenn sich dieses Pokémon auf deiner Bank befindet, kannst du deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen. Wenn du das machst, lege alle an dieses Pokémon angelegten Karten auf deinen Ablagestapel und lege es unter dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Rain Splash",
				'fr-fr': "Pluie Éclaboussante",
				'es-es': "Golpe de Lluvia",
				'it-it': "Spruzzapioggia",
				'pt-br': "Chuva Borrifante",
				'de-de': "Regenplatscher"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When the water warms, they inflate the flotation sac on their heads and drift languidly on the sea in packs.",
	},

	thirdParty: {
		cardmarket: 407934,
		tcgplayer: 201233
	}
}

export default card
