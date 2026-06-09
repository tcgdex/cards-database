import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Arbok",
		fr: "Arbok",
		de: "Arbok"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		24,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Ekans",
		fr: "Abo"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Intimidating Fang",
				fr: "Croc intimidant",
				de: "Beeindruckende Fangzähne"
			},
			effect: {
				en: "As long as Arbok is your Active Pokémon, any damage to your Pokémon done by an opponent's attack is reduced by 10 (before applying Weakness and Resistance).",
				fr: "Tant qu'Arbok est votre Pokémon Actif, les dégâts qui lui sont infligés par une attaque de votre adversaire sont réduits de 10 (avant application de la Faiblesse et de la Résistance).",
				de: "Solange Arbok dein Aktives Pokémon ist, wird aller Schaden, der deinen Pokémon durch gegnerische Angriffe zugefügt wird, um 10 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Toxic",
				fr: "Toxik",
				de: "Toxin"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Placez deux marqueurs de dégât sur le Pokémon Défenseur entre les deux tours.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet. Lege zwischen den Zügen 2 Schadensmarken anstelle von 1 Schadensmarke auf das Verteidigende Pokémon."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275806,
		tcgplayer: 83567
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
