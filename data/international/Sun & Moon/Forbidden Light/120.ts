import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Greninja GX",
		'fr-fr': "Amphinobi GX",
		'es-es': "Greninja GX",
		'it-it': "Greninja GX",
		'pt-br': "Greninja GX",
		'de-de': "Quajutsu GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		658,
	],

	hp: 230,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Frogadier",
		'fr-fr': "Croâporal",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Shuriken Flurry",
				'fr-fr': "Rafale de Shuriken",
				'es-es': "Ciclón Shuriken",
				'it-it': "Lameturbine",
				'pt-br': "Enxurrada de Estrelas Ninja",
				'de-de': "Shurikenschauer"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 3 damage counters on 1 of your opponent’s Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer 3 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes poner 3 contadores de daño en 1 de los Pokémon de tu rival.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi mettere tre segnalini danno su uno dei Pokémon del tuo avversario.",
				'pt-br': "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode colocar 3 contadores de dano em 1 dos Pokémon do seu oponente.",
				'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 3 Schadensmarken auf 1 Pokémon deines Gegners legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Haze Slash",
				'fr-fr': "Brouillard Lacérant",
				'es-es': "Cuchillada Niebla",
				'it-it': "Sferzanube",
				'pt-br': "Talho de Bruma",
				'de-de': "Dunstschlitzer"
			},
			effect: {
				'en-us': "You may shuffle this Pokémon and all cards attached to it into your deck.",
				'fr-fr': "Vous pouvez mélanger ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
				'es-es': "Puedes poner este Pokémon y todas las cartas unidas a él en tu baraja y barajarlas todas.",
				'it-it': "Puoi rimischiare questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
				'pt-br': "Você pode embaralhar este Pokémon e todas as cartas ligadas a ele no seu baralho.",
				'de-de': "Du kannst dieses Pokémon und alle an es angelegten Karten in dein Deck mischen."
			},
			damage: 110,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shadowy Hunter GX",
				'fr-fr': "Chasseur Tapi GX",
				'es-es': "Cazador Sombrío GX",
				'it-it': "Cacciatore Oscuro-GX",
				'pt-br': "Caçador das Sombras GX",
				'de-de': "Verborgener Jäger GX"
			},
			effect: {
				'en-us': "This attack does 130 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.) (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 130 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Este ataque hace 130 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Questo attacco infligge 130 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Este ataque causa 130 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). (Você não pode usar mais de 1 ataque GX por partida.)",
				'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 130 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 355631,
		tcgplayer: 165674
	}
}

export default card
