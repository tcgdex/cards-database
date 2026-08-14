import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Scrafty",
		fr: "Baggaïd",
		es: "Scrafty",
		it: "Scrafty",
		pt: "Scrafty",
		de: "Irokex"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		560,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Scraggy",
		fr: "Baggiguane",
		de: "Zurrokex"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Rock Head",
				fr: "Tête de Roc",
				de: "Steinhaupt"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer Kick",
				fr: "Marto-Pied",
				de: "Hammerkick"
			},
			effect: {
				en: "If this Pokémon has fewer remaining HP than the Defending Pokémon, this attack does 30 more damage.",
				fr: "S'il reste moins de PV à ce Pokémon qu'au Pokémon Défenseur, cette attaque inflige 30 dégâts supplémentaires.",
				de: "Wenn dieses Pokémon weniger verbliebene KP hat als das Verteidigende Pokémon, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: 50,

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

	retreat: 2,

	description: {
		en: "It can smash concrete blocks with its kicking attacks. The one with the biggest crest is the group leader.",
		de: "Wählt seinen Anführer über die Größe des Kamms auf dem Kopf. Ein Tritt von ihm reicht, um Betonblöcke zu zertrümmern."
	},

	thirdParty: {
		cardmarket: 280299,
		tcgplayer: 88978
	}
}

export default card
