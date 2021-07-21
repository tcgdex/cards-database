import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Salamence-GX",
		fr: "Drattak-GX",
		es: "Salamence-GX",
		it: "Salamence-GX",
		pt: "Salamence-GX",
		de: "Brutalanda-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		373,
	],
	hp: 250,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Shelgon",
		fr: "Drackhaus",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dragon Lift",
				fr: "Élévation de Dragon",
				es: "Impulso Dragón",
				it: "Dragopassaggio",
				pt: "Elevação do Dragão",
				de: "Drachentransporter"
			},
			effect: {
				en: "Your Pokémon in play have no Retreat Cost, except Pokémon-GX and Pokémon-EX.",
				fr: "Vos Pokémon en jeu n’ont pas de Coût de Retraite, à l’exception des Pokémon-GX et des Pokémon-EX.",
				es: "Tus Pokémon en juego no tienen ningún Coste de Retirada, excepto los Pokémon-GX y los Pokémon-EX.",
				it: "I tuoi Pokémon in gioco non hanno costo di ritirata, a eccezione dei Pokémon-GX e dei Pokémon-EX.",
				pt: "Seus Pokémon em jogo não têm custo de Recuo, exceto por Pokémon-GX e Pokémon-EX.",
				de: "Deine Pokémon im Spiel haben keine Rückzugskosten, außer Pokémon-GX und Pokémon-EX."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bright Flame",
				fr: "Flamme Éclatante",
				es: "Llama Viva",
				it: "Splendifiamma",
				pt: "Chama Reluzente",
				de: "Helle Flamme"
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies de ce Pokémon.",
				es: "Descarta 2 Energías de este Pokémon.",
				it: "Scarta due Energie assegnate a questo Pokémon.",
				pt: "Descarte 2 Energias deste Pokémon.",
				de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 200,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flame Jet GX",
				fr: "Jet de Flamme-GX",
				es: "Jet de Fuego-GX",
				it: "Getto di Fiamma-GX",
				pt: "Jato de Chamas-GX",
				de: "Flammenstrahl-GX"
			},
			effect: {
				en: "This attack does 120 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.) (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 120 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 120 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 120 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 120 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). (Você não pode usar mais de 1 ataque GX por partida.)",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
