import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Furret",
		fr: "Ectoplasma",
		de: "Gengar"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [162],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Scavenger Hunt",
				fr: "Mouvement chaotique",
				de: "Chaotische Bewegung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put 2 cards from your hand into your deck. Then, search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Furret is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si votre adversaire a un maximum de 3 Récompenses, vous pouvez déplacer 1 marqueur de dégâts depuis un Pokémon (le vôtre ou celui de l'adversaire) vers un autre (même si cela met l'autre Pokémon K.O.). Ce pouvoir ne peut pas être utilisé si Ectoplasma est affecté par un État spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, falls dein Gegner 3 oder weniger Preise hat, 1 Schadensmarke von 1 Pokémon (von dir oder deinem Gegner) nehmen und auf ein anderes legen (selbst wenn dies das andere Pokémon kampfunfähig macht). Diese Fähigkeit kann nicht verwendet werden, falls Gengar von einem Speziellen Zustand betroffen ist."
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
				en: "Spinning Attack",
				fr: "Cache-ombre",
				de: "Im Schatten verstecken"
			},
			effect: {
				en: "Switch Gengar with one of your Benched Pokémon.",
				fr: "Échangez Ectoplasma contre l'un des Pokémon de votre Banc, si vous en avez.",
				de: "Tausche Gengar mit 1 der Pokémon auf deiner Bank, falls du dort mindestens eins hast."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85673,
				cardmarket: 274888
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
