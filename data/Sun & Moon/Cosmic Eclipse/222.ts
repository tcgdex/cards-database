import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Reshiram & Zekrom GX",
		fr: "Reshiram et Zekrom GX",
		es: "Reshiram y Zekrom GX",
		it: "Reshiram e Zekrom GX",
		pt: "Reshiram e Zekrom GX",
		de: "Reshiram & Zekrom GX"
	},

	illustrator: "Naoki Saito",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		643,
	],

	hp: 270,

	types: [
		"Dragon",
	],

	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Fire",
				"Lightning",
			],
			name: {
				en: "Fabled Flarebolts",
				fr: "Flamme-Foudre Fabuleuse",
				es: "Llamas Fulgor Míticas",
				it: "Mitica Luce Blu",
				pt: "Labaredas de Raios Mitológicos",
				de: "Sagenhafte Flammenblitze"
			},
			effect: {
				en: "Discard up to 3 in any combination of basic Fire and basic Lightning Energy cards from your Benched Pokémon. This attack does 90 damage for each card you discarded in this way.",
				fr: "Défaussez une combinaison d’un maximum de 3 cartes Énergie Fire de base et Énergie Lightning de base de vos Pokémon de Banc. Cette attaque inflige 90 dégâts pour chaque carte défaussée de cette façon.",
				es: "Descarta, en cualquier combinación, hasta 3 cartas de Energía Fire Básica y Energía Lightning Básica de tus Pokémon en Banca. Este ataque hace 90 puntos de daño por cada carta que hayas descartado de esta manera.",
				it: "Scarta fino a tre carte Energia base Fire e Lightning, in qualsiasi combinazione, assegnate ai tuoi Pokémon in panchina. Questo attacco infligge 90 danni per ogni carta che hai scartato in questo modo.",
				pt: "Descarte até 3 cartas de Energia Fire básica e Lightning básica dos seus Pokémon no Banco em qualquer combinação. Este ataque causa 90 pontos de dano para cada carta descartada desta forma.",
				de: "Lege eine beliebige Kombination aus bis zu 3 Fire-Basis- und Lightning-Basis-Energiekarten von den Pokémon auf deiner Bank auf deinen Ablagestapel. Diese Attacke fügt 90 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "90×",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Cross Break GX",
				fr: "Fracture Croisée GX",
				es: "Asalto Cruzado GX",
				it: "Sfondamento Incrociato GX",
				pt: "Rompimento Cruzado GX",
				de: "Kreuzbruch GX"
			},
			effect: {
				en: "This attack does 170 damage to 1 of your opponent’s Benched Pokémon. If you played N’s Resolve from your hand during this turn, this attack also does 170 damage to 1 of your opponent’s other Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.) (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 170 dégâts à l’un des Pokémon de Banc de votre adversaire. Si vous avez joué Résolution de N de votre main pendant ce tour, cette attaque inflige également 170 dégâts à l’un des autres Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 170 puntos de daño a 1 de los Pokémon en Banca de tu rival. Si has jugado 1 carta de Decisión de N de tu mano durante este turno, este ataque también hace 170 puntos de daño a 1 de los otros Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 170 danni a uno dei Pokémon nella panchina del tuo avversario. Se hai giocato Grinta di N dalla tua mano durante questo turno, questo attacco infligge 170 danni anche a uno degli altri Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 170 pontos de dano a 1 dos Pokémon no Banco do seu oponente. Se você jogou Resolução do N da sua mão durante esta vez de jogar, este ataque também causará 170 pontos de dano a 1 outro Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). (Você não pode usar mais de 1 ataque GX por partida.)",
				de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 170 Schadenspunkte zu. Wenn du Ns Entschluss während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke auch 1 anderen Pokémon auf der Bank deines Gegner 170 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		}
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 398474
	}
}

export default card
