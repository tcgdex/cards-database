import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Drapion",
		'fr-fr': "Drascore",
		'es-es': "Drapion",
		'it-it': "Drapion",
		'pt-br': "Drapion",
		'de-de': "Piondragi"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		452,
	],

	hp: 140,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Skorupi",
		'fr-fr': "Rapion",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cross Poison",
				'fr-fr': "Poison-Croix",
				'es-es': "Veneno X",
				'it-it': "Velenocroce",
				'pt-br': "Corte-veneno",
				'de-de': "Giftstreich"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 50 damage for each heads. If at least 2 of them are heads, your opponent’s Active Pokémon is now Poisoned.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 50 dégâts pour chaque côté face. Si vous obtenez au moins 2 côtés face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "Lanza 4 monedas. Este ataque hace 50 puntos de daño por cada cara. Si sale cara en por lo menos 2 de ellas, el Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa. Se esce almeno due volte testa, il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "Jogue 4 moedas. Este ataque causa 50 pontos de dano para cada cara. Se pelo menos 2 delas saírem cara, o Pokémon Ativo do seu oponente será Envenenado.",
				'de-de': "Wirf 4 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu. Zeigen mindestens 2 davon Kopf, ist das Aktive Pokémon deines Gegners jetzt vergiftet."
			},
			damage: "50×",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slicing Blade",
				'fr-fr': "Lame Tranchante",
				'es-es': "Cuchilla Cortante",
				'it-it': "Affettalama",
				'pt-br': "Lâmina Fatiante",
				'de-de': "Schwertschneide"
			},

			damage: 120,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It takes pride in its strength. Even though it can tear foes apart, it finishes them off with powerful poison.",
	},

	thirdParty: {
		cardmarket: 388467,
		tcgplayer: 195105
	}
}

export default card
