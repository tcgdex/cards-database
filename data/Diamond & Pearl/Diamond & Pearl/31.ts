import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur",
		de: "Machomei"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Revenge",
				fr: "Vendetta",
				de: "Vergeltung"
			},
			effect: {
				en: "If any of your Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, this attack does 20 damage plus 50 more damage.",
				fr: "Si un de vos Pokémon est mis K.O par des dégâts infligés par une attaque de votre adversaire lors de son dernier tour, cette attaque inflige 20 dégâts plus 50 dégâts supplémentaires.",
				de: "Wenn im letzten Zug deines Gegners mindestens 1 deiner Pokémon durch Schaden eines Angriffs deines Gegners kampfunfähig gemacht wurde, fügt dieser Angriff 20 Schadenspunkte plus 50 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Dynamic Punch",
				fr: "Dynamo-poing",
				de: "Wuchtschlag"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 60 damage plus 30 more damage and the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts plus 30 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf 1 Münze. Bei 'Kopf' fügt dieser Angriff 60 Schadenspunkte plus 30 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],

	retreat: 3,

	description: {
		fr: "Ses quatre bras frappent à une vitesse aveuglante. Il peut porter 1000 coups en deux secondes."
	},

	thirdParty: {
		cardmarket: 277530
	}
}

export default card
