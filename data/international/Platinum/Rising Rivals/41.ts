import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Glaceon",
		'fr-fr': "Givrali Niv. 42",
		'de-de': "Glaziola"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [471],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Evoli"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Frost Wind",
				'fr-fr': "Vent gelant",
				'de-de': "Frostwind"
			},
			effect: {
				'en-us': "As long as Glaceon is your Active Pokémon, any damage done to your Pokémon by your opponent's attacks is reduced by 10 (after applying Weakness and Resistance).",
				'fr-fr': "Tant que Givrali est votre Pokémon Actif, tous dégâts infligés à vos Pokémon par des attaques de votre adversaire sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Solange Glaziola dein Aktives Pokémon ist, wird Schaden, der deinen Pokémon durch gegnerische Angriffe zugefügt wird, um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ice Blade",
				'fr-fr': "Lame de glace",
				'de-de': "Eisklinge"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ice Bind",
				'fr-fr': "Liens de glace",
				'de-de': "Eisbindung"
			},
			effect: {
				'en-us': "If your opponent doesn't discard a card from his or her hand, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Si votre adversaire ne défausse pas de carte de sa main, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wenn dein Gegner keine Karte von seiner Hand auf seinen Ablagestapel legt, ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278615,
				tcgplayer: 85746
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278615,
				tcgplayer: 85746
			}
		},
	],

}

export default card
