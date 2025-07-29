import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Goodra",
		fr: "Muplodocus",
		es: "Goodra",
		it: "Goodra",
		pt: "Goodra",
		de: "Viscogon"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		706,
	],

	hp: 150,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Sliggoo",
		fr: "Colimucus",
		es: "Sliggoo",
		it: "Sliggoo",
		pt: "Sliggoo",
		de: "Viscargot"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Gooey Regeneration",
				fr: "Régénération Visqueuse",
				es: "Regeneración Pegajosa",
				it: "Viscogenerazione",
				pt: "Regeneração Pegajosa",
				de: "Viskositätsauffrischung"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may discard an Energy attached to this Pokémon. If you do, heal 60 damage from this Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, soignez 60 dégâts à ce Pokémon.",
				es: "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes descartar 1 Energía unida a este Pokémon. Si lo haces, cura 60 puntos de daño a este Pokémon.",
				it: "Durante il tuo turno, prima di attaccare, puoi scartare un'Energia assegnata a questo Pokémon tutte le volte che vuoi. Se lo fai, cura questo Pokémon da 60 danni.",
				pt: "Tantas vezes quanto desejar durante sua vez de jogar (antes de atacar), você poderá descartar uma Energia ligada a este Pokémon. Se fizer isso, cure 60 de danos deste Pokémon.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel legen. Wenn du das machst, heile 60 Schadenspunkte bei diesem Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Heavy Whip",
				fr: "Choc-Fouet",
				es: "Látigo Potente",
				it: "Fortefrusta",
				pt: "Chicote Pesado",
				de: "Kräftiger Hieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 40 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 281557
	}
}

export default card
