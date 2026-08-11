import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Zekrom GX",
		'fr-fr': "Zekrom GX",
		'es-es': "Zekrom GX",
		'it-it': "Zekrom GX",
		'pt-br': "Zekrom GX",
		'de-de': "Zekrom GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		644,
	],
	hp: 180,
	types: [
		"Lightning",
	],

	stage: "Basic",
	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bullet Uppercut",
				'fr-fr': "Uppercut Projeté",
				'es-es': "Gancho Bala",
				'it-it': "Montante Lampo",
				'pt-br': "Gancho Projétil",
				'de-de': "Hakentreffer"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is a Pokémon-GX or a Pokémon-EX, this attack does 60 more damage. This attack’s damage isn’t affected by Weakness.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou un Pokémon-EX, cette attaque inflige 60 dégâts supplémentaires. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon-GX o un Pokémon-EX, este ataque hace 60 puntos de daño más. El daño de este ataque no se ve afectado por Debilidad.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-GX o un Pokémon-EX, questo attacco infligge 60 danni in più. I danni di questo attacco non sono influenzati dalla debolezza.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon-GX ou um Pokémon-EX, este ataque causará 60 pontos de dano a mais. O dano deste ataque não é afetado por Fraqueza.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-GX oder ein Pokémon-EX ist, fügt diese Attacke 60 Schadenspunkte mehr zu. Der Schaden dieser Attacke wird durch Schwäche nicht verändert."
			},
			damage: "10+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Swift Bolt Strike",
				'fr-fr': "Charge Foudre Fulgurante",
				'es-es': "Ataque Fulgor Súbito",
				'it-it': "Lucesiluro Folgorante",
				'pt-br': "Ataque de Raios Veloz",
				'de-de': "Turboblitzschlag"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 60 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 60 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 60 puntos de daño más por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 60 danni in più ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 60 pontos de dano a mais para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 60 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "80+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Rampage Bolt GX",
				'fr-fr': "Éclair Saccageur GX",
				'es-es': "Furia Fulgor GX",
				'it-it': "Bolide Impazzito GX",
				'pt-br': "Ataque de Raios Veloz",
				'de-de': "Turboblitzschlag"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 60 pontos de dano a mais para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 60 Schadenspunkte mehr pro Kopf zu."
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
