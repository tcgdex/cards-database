import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Camerupt EX",
		fr: "Camérupt EX",
		es: "Camerupt EX",
		it: "Camerupt EX",
		pt: "Camerupt EX",
		de: "Camerupt EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		323,
	],

	hp: 180,

	types: [
		"Fire",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Tumbling Attack",
				fr: "Attaque Trébuchante",
				es: "Ataque Tambaleante",
				it: "Attacco Capriola",
				pt: "Ataque Cambalhota",
				de: "Taumler"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, esse ataque causará 30 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Explosive Jet",
				fr: "Souffle Explosif",
				es: "Propulsión Explosiva",
				it: "Getto Esplosivo",
				pt: "Jato Explosivo",
				de: "Explosiver Antrieb"
			},
			effect: {
				en: "Discard as many Fire Energy attached to your Pokémon as you like. This attack does 50 damage times the number of Energy cards you discarded.",
				fr: "Défaussez autant d'Énergies Fire attachées à vos Pokémon que vous voulez. Cette attaque inflige 50 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
				es: "Descarta tantas Energías Fire unidas a tus Pokémon como quieras. Este ataque hace 50 puntos de daño por cada carta de Energía que hayas descartado.",
				it: "Scarta a piacimento le Energie Fire assegnate ai tuoi Pokémon. Questo attacco infligge 50 danni per ogni carta Energia che hai scartato.",
				pt: "Descarte tantas Energias Fire ligadas a seus Pokémon quanto desejar. Esse ataque causa 50 de danos vezes o número de cards de Energia descartados.",
				de: "Lege beliebig viele Fire-Energien, die an deine Pokémon angelegt sind, auf deinen Ablagestapel. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl abgelegter Energiekarten zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,
	stage: "Basic"
}

export default card
