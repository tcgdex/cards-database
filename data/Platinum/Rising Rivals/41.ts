import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Glaceon",
		fr: "Givrali Niv. 42",
		de: "Glaziola"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		471,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Frost Wind",
				fr: "Vent gelant",
				de: "Frostwind"
			},
			effect: {
				en: "As long as Glaceon is your Active Pokémon, any damage done to your Pokémon by your opponent's attacks is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Tant que Givrali est votre Pokémon Actif, tous dégâts infligés à vos Pokémon par des attaques de votre adversaire sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				de: "Solange Glaziola dein Aktives Pokémon ist, wird Schaden, der deinen Pokémon durch gegnerische Angriffe zugefügt wird, um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Ice Blade",
				fr: "Lame de glace",
				de: "Eisklinge"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ice Bind",
				fr: "Liens de glace",
				de: "Eisbindung"
			},
			effect: {
				en: "If your opponent doesn't discard a card from his or her hand, the Defending Pokémon is now Paralyzed.",
				fr: "Si votre adversaire ne défausse pas de carte de sa main, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wenn dein Gegner keine Karte von seiner Hand auf seinen Ablagestapel legt, ist das Verteidigende Pokémon jetzt gelähmt."
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

	thirdParty: {
		cardmarket: 278615
	}
}

export default card
