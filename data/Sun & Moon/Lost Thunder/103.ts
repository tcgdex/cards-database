import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
		es: "Chandelure",
		it: "Chandelure",
		pt: "Chandelure",
		de: "Skelabra"
	},

	illustrator: "so-taro",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		609,
	],

	hp: 140,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Cursed Drop",
				fr: "Chute Maudite",
				es: "Caída Maldita",
				it: "Caduta Maledetta",
				pt: "Queda Amaldiçoada",
				de: "Verfluchter Fall"
			},
			effect: {
				en: "Put 4 damage counters on your opponent’s Pokémon in any way you like.",
				fr: "Placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire de la manière que vous voulez.",
				es: "Pon 4 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				it: "Distribuisci a piacimento quattro segnalini danno sui Pokémon del tuo avversario.",
				pt: "Coloque 4 contadores de dano nos Pokémon do seu oponente como desejar.",
				de: "Lege 4 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Vortex of Pain",
				fr: "Vortex Douloureux",
				es: "Vórtice de Dolor",
				it: "Vortice Infausto",
				pt: "Vórtice de Dor",
				de: "Wirbel der Qual"
			},
			effect: {
				en: "This attack does 20 damage for each damage counter on all of your opponent’s Pokémon.",
				fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé sur les Pokémon de votre adversaire.",
				es: "Este ataque hace 20 puntos de daño por cada contador de daño en todos los Pokémon de tu rival.",
				it: "Questo attacco infligge 20 danni per ogni segnalino danno presente sui Pokémon del tuo avversario.",
				pt: "Este ataque causa 20 pontos de dano para cada contador de dano em todos os Pokémon do seu oponente.",
				de: "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der Schadensmarken auf allen Pokémon deines Gegners zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 365740
	}
}

export default card
