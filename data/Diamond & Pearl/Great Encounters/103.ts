import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Cresselia",
		fr: "Cresselia",
		de: "Cresselia"
	},
	illustrator: "Shizurow",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",

	set: Set,
	dexId: [
		488,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		fr: "Niveau Sup",
	},
	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Full Moon Dance",
				fr: "Danse de pleine lune",
				de: "Vollmondtanz"
			},
			effect: {
				en: "Once during your turn (before your attack), you may move 1 damage counter from either player's Pokémon to another Pokémon (yours or your opponent's). This power can't be used if Cresselia is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez déplacer 1 marqueur de dégât d'1 Pokémon d'1 des joueurs vers 1 autre Pokémon (1 des vôtres ou 1 de votre adversaire). Ce pouvoir ne peut pas être utilisé si Cresselia est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Schadensmarke von 1 Pokémon eines Spielers entfernen und auf ein anderes Pokémon (deines oder das deines Gegners) legen. Diese Poké-Power kann nicht benutzt werden, wenn Cresselia von einem Speziellen Zustand betroffen ist."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Moon Skip",
				fr: "Petit bond lunaire",
				de: "Mondhopser"
			},
			effect: {
				en: "If the Defending Pokémon is Knocked Out by this attack, take 1 more Prize card.",
				fr: "Si le Pokémon Défenseur est mis K.O par cette attaque, récoltez 1 carte Récompense supplémentaire.",
				de: "Wenn das Verteidigende Pokémon durch diesen Angriff kampfunfähig wird, nimm 1 zusätzlichen Preis."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
