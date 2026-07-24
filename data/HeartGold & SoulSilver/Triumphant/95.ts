import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur",
		de: "Machomei"
	},

	illustrator: "Shizurow",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Fighting Tag",
				fr: "Relève guerrière",
				de: "Aufforderung zum Kampf"
			},
			effect: {
				en: "Once during your turn (before your attack), if Machamp is on your Bench, you may move all Fighting Energy attached to your Active Pokémon to Machamp. If you do, switch Machamp with your Active Pokémon.",
				fr: "Une fois pendant votre tour (avant votre attaque), si Mackogneur est sur votre Banc, vous pouvez lui attribuer toutes les cartes Énergie Fighting attachées à votre Pokémon Actif. Dans ce cas, échangez Mackogneur avec votre Pokémon Actif.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn sich Machomei auf deiner Bank befindet, alle an dein Aktives Pokémon angelegten -Energien an Machomei anlegen. Wenn du das machst, tausche Machomei mit deinem Aktiven Pokémon aus."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crushing Punch",
				fr: "Poing dévastateur",
				de: "Schmetterhieb"
			},
			effect: {
				en: "Discard a Special Energy card attached to the Defending Pokémon.",
				fr: "Défaussez une carte Énergie Spéciale attachée au Pokémon Défenseur.",
				de: "Lege 1 Spezialenergiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Champ Buster",
				fr: "Explos’tout",
				de: "Champ-Sprenger"
			},
			effect: {
				en: "Does 100 damage plus 10 more damage for each of your Benched Pokémon that has any damage counters on it.",
				fr: "Inflige 100 dégâts plus 10 dégâts supplémentaires pour chacun de vos Pokémon de Banc ayant des marqueurs de dégât.",
				de: "Dieser Angriff fügt 100 Schadenspunkte plus 10 weitere Schadenspunkte für jedes Pokémon auf deiner Bank, auf dem bereits mindestens 1 Schadensmarke liegt, zu."
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,
	suffix: "Prime",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279556,
		tcgplayer: 86968
	}
}

export default card
