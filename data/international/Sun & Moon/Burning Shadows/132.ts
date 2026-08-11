import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Salazzle GX",
		'fr-fr': "Malamandre GX",
		'es-es': "Salazzle GX",
		'it-it': "Salazzle GX",
		'pt-br': "Salazzle GX",
		'de-de': "Amfira GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		758,
	],

	hp: 200,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Salandit",
		'fr-fr': "Tritox",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Diabolical Claws",
				'fr-fr': "Griffes Diaboliques",
				'es-es': "Garras Diabólicas",
				'it-it': "Artigli Diabolici",
				'pt-br': "Garras Malévolas",
				'de-de': "Diabolische Klauen"
			},
			effect: {
				'en-us': "This attack does 50 damage for each Prize card you have taken.",
				'fr-fr': "Cette attaque inflige 50 dégâts pour chaque carte Récompense que vous avez récupérée.",
				'es-es': "Este ataque hace 50 puntos de daño por cada carta de Premio que hayas cogido.",
				'it-it': "Questo attacco infligge 50 danni per ogni carta Premio che hai preso.",
				'pt-br': "Este ataque causa 50 pontos de dano para cada carta de Prêmio que você pegou.",
				'de-de': "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der Preiskarten zu, die du genommen hast."
			},
			damage: "50×",

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Heat Blast",
				'fr-fr': "Explosion de Chaleur",
				'es-es': "Explosión de Calor",
				'it-it': "Caldobomba",
				'pt-br': "Raio de Calor",
				'de-de': "Hitzestoß"
			},

			damage: 110,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Queen’s Haze GX",
				'fr-fr': "Brume de Reine GX",
				'es-es': "Niebla Regia GX",
				'it-it': "Foschia della Regina-GX",
				'pt-br': "Névoa da Rainha GX",
				'de-de': "Dunst der Königin GX"
			},
			effect: {
				'en-us': "Discard all Energy from your opponent’s Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Défaussez toute l’Énergie du Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Descarta todas las Energías del Pokémon Activo de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Scarta tutte le Energie assegnate al Pokémon attivo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Descarte todas as Energias do Pokémon Ativo do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Lege alle Energien vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 299532,
		tcgplayer: 138504
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
