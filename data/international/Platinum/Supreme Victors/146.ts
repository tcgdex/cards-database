import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Rayquaza C LV.X",
		'fr-fr': "Rayquaza ",
		'de-de': "Rayquaza C"
	},
	illustrator: "Shizurow",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",

	set: Set,
	dexId: [384],
	hp: 120,
	types: [
		"Colorless"
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Dragon Spirit",
				'fr-fr': "Esprit de dragon",
				'de-de': "Drachenmut"
			},
			effect: {
				'en-us': "If Rayquaza C is your Active Pokémon and is damaged but not Knocked Out by an opponent's attack, you may search your discard pile for an Energy card and attach it to Rayquaza C.",
				'fr-fr': "Si Rayquaza  est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts sans le mettre K.O., vous pouvez choisir dans votre pile de défausse une carte Énergie et l'attacher à Rayquaza .",
				'de-de': "Wenn Rayquaza C dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält, aber nicht kampfunfähig wird, kannst du deinen Ablagestapel nach 1 Energiekarte durchsuchen und sie an Rayquaza C anlegen."
			}
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Psychic",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Final Blowup",
				'fr-fr': "Explosion finale",
				'de-de': "Letztes Donnerwetter"
			},
			effect: {
				'en-us': "Discard all Energy attached to Rayquaza C. Ignore this effect if you have no cards in your hand.",
				'fr-fr': "Défaussez toutes les Énergies attachées à Rayquaza . Ignorez cet effet si vous n'avez plus de cartes en main.",
				'de-de': "Lege alle an Rayquaza C angelegten Energien auf deinen Ablagestapel. Dieser Effekt gilt nur, wenn du mindestens 1 Handkarte hast."
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278837,
				tcgplayer: 88640
			}
		},
	],

}

export default card
