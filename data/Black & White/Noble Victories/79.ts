import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
		es: "Hydreigon",
		it: "Hydreigon",
		pt: "Hydreigon",
		de: "Trikephalo"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		635,
	],

	hp: 150,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dark Aura",
				fr: "Aura de Ténèbres",
				es: "Aura Oscura",
				it: "Auroscura",
				pt: "Aura Negra",
				de: "Finsterer Schein"
			},
			effect: {
				en: "All Energy attached to this Pokémon are Darkness Energy instead of their usual type.",
				fr: "Toutes les Énergies attachées à ce Pokémon sont des Énergies Darkness au lieu de leur type habituel.",
				es: "Todas las Energía unidas a este Pokémon son Energía Darkness en vez del tipo habitual.",
				it: "Tutte le Energie assegnate a questo Pokémon sono Energie Darkness anziché del loro solito tipo.",
				pt: "Toda Energia ligada a este Pokémon é Energia Darkness em vez do tipo usual.",
				de: "Alle Energien, die an dieses Pokémon angelegt sind, liefern Darkness-Energie anstelle ihres normalen Typs."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Berserker Blade",
				fr: "Lame Folle",
			},
			effect: {
				en: "Does 40 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 40 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280202,
		tcgplayer: 86239
	}
}

export default card
