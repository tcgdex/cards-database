import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Scizor",
		'fr-fr': "Cizayox",
		'de-de': "Scherox"
	},

	illustrator: "Noriko Hotta",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [212],

	hp: 100,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Scyther",
		'fr-fr': "Insecateur"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Red Armor",
				'fr-fr': "Armure rouge",
				'de-de': "Rote Rüstung"
			},
			effect: {
				'en-us': "Prevent all damage done to Scizor by attacks from your opponent's Pokémon that have any Special Energy cards attached to them.",
				'fr-fr': "Évitez tous les dégâts d’attaque infligés à Cizayox par les Pokémon de votre adversaire auxquels sont attachées des cartes Énergie spéciale.",
				'de-de': "Verhindere allen Schaden, der Scherox durch Angriffe von Pokémon deines Gegners, an denen Spezialenergiekarten angelegt sind, zugefügt würde."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Metal Scissors",
				'fr-fr': "Ciseaux d’acier",
				'de-de': "Metallscheren"
			},
			effect: {
				'en-us': "Does 30 damage plus 20 more damage for each Metal Energy attached to Scizor.",
				'fr-fr': "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie Metal attachée à Cizayox.",
				'de-de': "Dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte für jede an Scherox angelegte -Energie zu."
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

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279337,
				tcgplayer: 88964
			}
		},
	],

}

export default card
