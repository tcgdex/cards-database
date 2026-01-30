import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Umbreon δ",
		fr: "Noctali δ",
		de: "Nachtara"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		197,
	],

	hp: 70,

	types: [
		"Darkness",
		"Metal",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Delta Moon",
				fr: "Lune Delta",
				de: "Delta-Mond"
			},
			effect: {
				en: "When your opponent attaches a Special Energy card from his or her hand to 1 of his or her Pokémon, put 1 damage counter on that Pokémon. You can't use more than 1 Delta Moon Poké-Body each turn.",
				fr: "Lorsque votre adversaire attache une carte Énergie spéciale de sa main à 1 de ses Pokémon, placez 1 marqueur de dégât sur ce Pokémon. Vous ne pouvez pas utiliser plus d'1 Poké-Body Lune Delta par tour.",
				de: "Wenn dein Gegner eine Spezialenergiekarte von seiner Hand an 1 seiner Pokémon anlegt, lege 1 Schadensmarke auf dieses Pokémon. Du kannst nicht mehr als 1 Delta-Mond Poké-Body pro Zug benutzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Darkness",
			],
			name: {
				en: "Feint Attack",
				fr: "Feinte",
				de: "Finte"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur ce Pokémon.",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. Schwäche, Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},

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
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276780
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
