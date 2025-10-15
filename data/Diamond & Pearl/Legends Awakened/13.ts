import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Probopass",
		fr: "Tarinorme",
		de: "Voluminas"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		476,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Nosepass",
		fr: "Nasgnet",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Steel Coating",
				fr: "Couche d'acier",
				de: "Stahlbeschichtung"
			},
			effect: {
				en: "Any damage done to Probopass by your opponent's attacks is reduced by 10 for each Metal Energy attached to Probopass (after applying Weakness and Resistance). You can't reduce more than 20 damage in this way.",
				fr: "Tous dégâts infligés à Tarinorme par des attaques de votre adversaire sont réduits de 10 pour chaque Énergie Metal attachée à Tarinorme (après application de la Faiblesse et de la Résistance). Vous ne pouvez réduire de plus de 20 dégâts de cette façon.",
				de: "Schaden, der Voluminas durch gegnerische Angriffe zugefügt wird, wird für jede an Voluminas angelegte -Energie um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden). Der Schaden kann auf diese Weise nicht um mehr als 20 Schadenspunkte reduziert werden."
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
				en: "Metal Bomber",
				fr: "Bombardier métallique",
				de: "Metallbeschuss"
			},
			effect: {
				en: "Choose a number of your opponent's Benched Pokémon up to the amount of Metal Energy attached to Probopass. This attack does 20 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous pouvez choisir autant de Pokémon de Banc de votre adversaire qu'il y a d'Énergie Metal attachée à Tarinorme. Cette attaque inflige 20 dégâts à chacun de ces Pokémon. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wähle eine Anzahl gegnerischer Pokémon, die höchstens der Anzahl der an Voluminas angelegten -Energien entspricht. Dieser Angriff fügt jedem gewählten Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 3,

	description: {
		fr: "Son corps libère une puissante force magnétique. Il dirige trois petites unités appelées Mini-nez."
	},

	thirdParty: {
		cardmarket: 278162,
		tcgplayer: 88375
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
