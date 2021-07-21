import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Drapion",
		fr: "Drascore",
		es: "Drapion",
		it: "Drapion",
		pt: "Drapion",
		de: "Piondragi"
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
		en: "Skorupi",
		fr: "Rapion",
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
				en: "Cross Poison",
				fr: "Poison-Croix",
				es: "Veneno X",
				it: "Velenocroce",
				pt: "Corte-veneno",
				de: "Giftstreich"
			},
			effect: {
				en: "Flip 4 coins. This attack does 50 damage for each heads. If at least 2 of them are heads, your opponent’s Active Pokémon is now Poisoned.",
				fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts pour chaque côté face. Si vous obtenez au moins 2 côtés face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "Lanza 4 monedas. Este ataque hace 50 puntos de daño por cada cara. Si sale cara en por lo menos 2 de ellas, el Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Lancia quattro volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa. Se esce almeno due volte testa, il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "Jogue 4 moedas. Este ataque causa 50 pontos de dano para cada cara. Se pelo menos 2 delas saírem cara, o Pokémon Ativo do seu oponente será Envenenado.",
				de: "Wirf 4 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu. Zeigen mindestens 2 davon Kopf, ist das Aktive Pokémon deines Gegners jetzt vergiftet."
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
				en: "Slicing Blade",
				fr: "Lame Tranchante",
				es: "Cuchilla Cortante",
				it: "Affettalama",
				pt: "Lâmina Fatiante",
				de: "Schwertschneide"
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



}

export default card
