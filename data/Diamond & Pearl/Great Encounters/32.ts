import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
		de: "Knuddeluff"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		40,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Good Night Melody",
				fr: "Mélodie endormante",
				de: "Gutenachtlied"
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this power. Each Active Pokémon (both yours and your opponent's) is now Asleep. This power can't be used if Wigglytuff is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Chaque Pokémon Actif (les vôtres et ceux de votre adversaire) est maintenant Endormi. Ce pouvoir ne peut pas être utilisé si Grodoudou est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du diese Poké-Power benutzen. Jedes Aktive Pokémon (deine und die deines Gegners) schläft jetzt. Diese Poké-Power kann nicht benutzt werden, wenn Knuddeluff von einem Speziellen Zustand betroffen ist."
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
				en: "Balloon Attack",
				fr: "Attaque de ballon",
				de: "Ballonangriff"
			},
			effect: {
				en: "If Igglybuff is anywhere under Wigglytuff, this attack does 40 damage plus 20 more damage.",
				fr: "Si Toudoudou se trouve sous Grodoudou, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn Fluffeluff sich an beliebiger Stelle unter Knuddeluff befindet, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
