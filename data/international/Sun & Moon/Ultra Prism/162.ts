import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Celesteela GX",
		'fr-fr': "Bamboiselle GX",
		'es-es': "Celesteela GX",
		'it-it': "Celesteela GX",
		'pt-br': "Celesteela GX",
		'de-de': "Kaguron GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
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
				'en-us': "Rocket Fall",
				'fr-fr': "Chute Propulsée",
				'es-es': "Caída Cohete",
				'it-it': "Caduta Razzo",
				'pt-br': "Queda Propulsada",
				'de-de': "Raketeneinschlag"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each Colorless in your opponent’s Active Pokémon’s Retreat Cost.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der Colorless-Symbole in den Rückzugskosten des Aktiven Pokémon deines Gegners zu."
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
				'en-us': "Moon Press",
				'fr-fr': "Pression Lunaire",
				'es-es': "Presión Lunar",
				'it-it': "Pressa Lunare",
				'pt-br': "Pressão Lunar",
				'de-de': "Mondkraft"
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
				'en-us': "Blaster GX",
				'fr-fr': "Réacteur-GX",
				'es-es': "Cohete GX",
				'it-it': "Propulsus-GX",
				'pt-br': "Detonador GX",
				'de-de': "Blaster GX"
			},
			effect: {
				'en-us': "Turn all of your Prize cards face up. (Those Prize cards remain face up for the rest of the game.) (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Tournez toutes vos cartes Récompense face découverte. (Ces cartes Récompense restent face découverte pour le reste de la partie.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Pon todas tus cartas de Premio boca arriba. (Esas cartas de Premio permanecerán boca arriba durante el resto de la partida). (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Gira tutte le tue carte Premio a faccia in su (rimarranno così per il resto della partita). Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Vire para cima todas as suas cartas de Prêmio (elas permanecerão viradas para cima pelo resto da partida). (Você não pode usar mais de 1 ataque GX por partida.)",
				'de-de': "Decke alle deine Preiskarten auf. (Jene Preiskarten bleiben für den Rest des Spiels aufgedeckt.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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

	retreat: 4,

	thirdParty: {
		cardmarket: 316068,
		tcgplayer: 157778
	}
}

export default card
