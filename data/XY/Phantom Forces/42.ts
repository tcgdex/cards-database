import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Lampent",
		fr: "Mélancolux",
		es: "Lampent",
		it: "Lampent",
		pt: "Lampent",
		de: "Laternecto"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		608,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Litwick",
		fr: "Funécire",
		es: "Litwick",
		it: "Litwick",
		pt: "Litwick",
		de: "Lichtel"
	},

	stage: "Stage1",

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
				en: "Put 3 damage counters on your opponent's Pokémon in any way you like.",
				fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				es: "Pon 3 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				it: "Distribuisci a piacimento tre segnalini danno sui Pokémon del tuo avversario.",
				pt: "Coloque 3 contadores de danos nos Pokémon do seu oponente do jeito que desejar.",
				de: "Verteile 3 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Night March",
				fr: "Marche Nocturne",
				es: "Marcha Nocturna",
				it: "Marcia Notturna",
				pt: "Marcha Noturna",
				de: "Nachtwanderung"
			},
			effect: {
				en: "This attack does 20 damage times the number of Pokémon in your discard pile that have the Night March attack.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon dans votre pile de défausse possédant l'attaque Marche Nocturne.",
				es: "Este ataque hace 20 puntos de daño por cada Pokémon en tu pila de descartes que tenga el ataque Marcha Nocturna.",
				it: "Questo attacco infligge 20 danni per ogni Pokémon nella tua pila degli scarti che conosce l'attacco Marcia Notturna.",
				pt: "Esse ataque causa 20 de danos vezes o número de Pokémon em sua pilha de descarte que possuem o ataque Marcha Noturna.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der Pokémon in deinem Ablagestapel, die Nachtwanderung beherrschen, zu."
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
		cardmarket: 281848,
		tcgplayer: 94500
	}
}

export default card
