import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Lumineon",
		fr: "Luminéon",
		de: "Lumineon"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		457,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Finneon",
		fr: "Écayon"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Lure Ring",
				fr: "Cercle trompeur",
				de: "Lockring"
			},
			effect: {
				en: "Once during your turn (before your attack), if Lumineon is your Active Pokémon, you may choose 1 of your opponent's Benched Pokémon that has maximum HP of 100 or more and switch it with 1 of the Defending Pokémon. This power can't be used if Lumineon is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Luminéon est votre Pokémon Actif, vous pouvez choisir 1 des Pokémon de Banc de votre adversaire possédant un maximum de 100 PV ou plus et l'échanger avec 1 des Pokémon Défenseurs. Ce pouvoir ne peut pas être utilisé si Luminéon est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Lumineon dein Aktives Pokémon ist, 1 Pokémon auf der Bank deines Gegners wählen, dessen Grund-KP 100 oder mehr betragen, und es gegen 1 Verteidigendes Pokémon austauschen. Diese Poké-Power kann nicht benutzt werden, wenn Lumineon von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reverse Stream",
				fr: "Courant inverse",
				de: "Gegenströmung"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Water Energy attached to Lumineon. Then, return all Water Energy attached to Lumineon to your hand.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Water attachée à Luminéon. Ensuite, reprenez dans votre main toutes les Énergies Water attachées à Luminéon.",
				de: "Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Lumineon angelegte -Energie zu. Danach nimm alle an Lumineon angelegte -Energie zurück auf deine Hand."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	description: {
		fr: "Il vit au plus profond de l'océan. Il attire sa proie en illuminant les motifs de ses 4 nageoires."
	},

	thirdParty: {
		cardmarket: 277640,
		tcgplayer: 86921
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
