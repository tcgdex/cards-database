import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Celesteela-GX",
		fr: "Bamboiselle-GX",
		es: "Celesteela-GX",
		it: "Celesteela-GX",
		pt: "Celesteela-GX",
		de: "Kaguron-GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		797,
	],

	hp: 200,

	types: [
		"Metal",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rocket Fall",
				fr: "Chute Propulsée",
				es: "Caída Cohete",
				it: "Caduta Razzo",
				pt: "Queda Propulsada",
				de: "Raketeneinschlag"
			},
			effect: {
				en: "This attack does 30 more damage for each Colorless in your opponent’s Active Pokémon’s Retreat Cost.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 30 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 30 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der Colorless-Symbole in den Rückzugskosten des Aktiven Pokémon deines Gegners zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Moon Press",
				fr: "Pression Lunaire",
				es: "Presión Lunar",
				it: "Pressa Lunare",
				pt: "Pressão Lunar",
				de: "Mondkraft"
			},

			damage: 130,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blaster GX",
				fr: "Réacteur GX",
				es: "Cohete GX",
				it: "Propulsus GX",
				pt: "Detonador GX",
				de: "Blaster GX"
			},
			effect: {
				en: "Turn all of your Prize cards face up. (Those Prize cards remain face up for the rest of the game.) (You can’t use more than 1 GX attack in a game.)",
				fr: "Tournez toutes vos cartes Récompense face découverte. (Ces cartes Récompense restent face découverte pour le reste de la partie.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Pon todas tus cartas de Premio boca arriba. (Esas cartas de Premio permanecerán boca arriba durante el resto de la partida). (No puedes usar más de 1 ataque GX en una partida).",
				it: "Gira tutte le tue carte Premio a faccia in su (rimarranno così per il resto della partita). Non puoi usare più di un attacco GX a partita.",
				pt: "Vire para cima todas as suas cartas de Prêmio (elas permanecerão viradas para cima pelo resto da partida). (Você não pode usar mais de 1 ataque GX por partida.)",
				de: "Decke alle deine Preiskarten auf. (Jene Preiskarten bleiben für den Rest des Spiels aufgedeckt.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 4
}

export default card
