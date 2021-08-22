import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Salazzle GX",
		fr: "Malamandre GX",
		es: "Salazzle GX",
		it: "Salazzle GX",
		pt: "Salazzle GX",
		de: "Amfira GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
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
		en: "Salandit",
		fr: "Tritox",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Diabolical Claws",
				fr: "Griffes Diaboliques",
				es: "Garras Diabólicas",
				it: "Artigli Diabolici",
				pt: "Garras Malévolas",
				de: "Diabolische Klauen"
			},
			effect: {
				en: "This attack does 50 damage for each Prize card you have taken.",
				fr: "Cette attaque inflige 50 dégâts pour chaque carte Récompense que vous avez récupérée.",
				es: "Este ataque hace 50 puntos de daño por cada carta de Premio que hayas cogido.",
				it: "Questo attacco infligge 50 danni per ogni carta Premio che hai preso.",
				pt: "Este ataque causa 50 pontos de dano para cada carta de Prêmio que você pegou.",
				de: "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der Preiskarten zu, die du genommen hast."
			},
			damage: "50×",

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Heat Blast",
				fr: "Explosion de Chaleur",
				es: "Explosión de Calor",
				it: "Caldobomba",
				pt: "Raio de Calor",
				de: "Hitzestoß"
			},

			damage: 110,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Queen’s Haze GX",
				fr: "Brume de Reine GX",
				es: "Niebla Regia GX",
				it: "Foschia della Regina-GX",
				pt: "Névoa da Rainha GX",
				de: "Dunst der Königin GX"
			},
			effect: {
				en: "Discard all Energy from your opponent’s Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Défaussez toute l’Énergie du Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Descarta todas las Energías del Pokémon Activo de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Scarta tutte le Energie assegnate al Pokémon attivo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Descarte todas as Energias do Pokémon Ativo do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege alle Energien vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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



}

export default card
