import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Phione",
		fr: "Phione",
		es: "Phione",
		it: "Phione",
		pt: "Phione",
		de: "Phione"
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
				en: "Whirlpool Suction",
				fr: "Tourbillon Aspirant",
				es: "Succión Remolino",
				it: "Mulinello Aspirante",
				pt: "Redemoinho de Sucção",
				de: "Strudelsog"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon. If you do, discard all cards attached to this Pokémon and put it on the bottom of your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez demander à votre adversaire d’échanger son Pokémon Actif avec l’un de ses Pokémon de Banc. Dans ce cas, défaussez toutes les cartes attachées à ce Pokémon et placez-le en dessous de votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu Banca, puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca. Si lo haces, descarta todas las cartas unidas a este Pokémon y ponlo en la parte inferior de tu baraja.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua panchina, puoi far scambiare al tuo avversario il suo Pokémon attivo con uno della sua panchina. Se lo fai, scarta tutte le carte assegnate a questo Pokémon e mettilo in fondo al tuo mazzo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon estiver no seu Banco, você poderá fazer com que o seu oponente troque o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a). Se fizer isto, descarte todas as cartas ligadas a este Pokémon e coloque-o como a última carta do seu baralho.",
				de: "Einmal während deines Zuges (bevor du angreifst), wenn sich dieses Pokémon auf deiner Bank befindet, kannst du deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen. Wenn du das machst, lege alle an dieses Pokémon angelegten Karten auf deinen Ablagestapel und lege es unter dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Rain Splash",
				fr: "Pluie Éclaboussante",
				es: "Golpe de Lluvia",
				it: "Spruzzapioggia",
				pt: "Chuva Borrifante",
				de: "Regenplatscher"
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

	thirdParty: {
		cardmarket: 407934
	}
}

export default card
