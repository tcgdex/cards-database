import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Scizor",
		fr: "Cizayox",
		de: "Scherox"
	},

	illustrator: "Noriko Hotta",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [
		212,
	],

	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Scyther",
		fr: "Insecateur",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Red Armor",
				fr: "Armure rouge",
				de: "Rote Rüstung"
			},
			effect: {
				en: "Prevent all damage done to Scizor by attacks from your opponent’s Pokémon that have any Special Energy cards attached to them.",
				fr: "Évitez tous les dégâts d’attaque infligés à Cizayox par les Pokémon de votre adversaire auxquels sont attachées des cartes Énergie spéciale.",
				de: "Verhindere allen Schaden, der Scherox durch Angriffe von Pokémon deines Gegners, an denen Spezialenergiekarten angelegt sind, zugefügt würde."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Scissors",
				fr: "Ciseaux d’acier",
				de: "Metallscheren"
			},
			effect: {
				en: "Does 30 damage plus 20 more damage for each Metal Energy attached to Scizor.",
				fr: "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie Metal attachée à Cizayox.",
				de: "Dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte für jede an Scherox angelegte -Energie zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,
	suffix: "Prime",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
