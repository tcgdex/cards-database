import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Gallade",
		fr: "Gallame",
		de: "Galagladi"
	},
	illustrator: "Daisuke Ito",
	rarity: "Rare Holo",
	category: "Pokemon",

	set: Set,
	dexId: [
		475,
	],
	hp: 130,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Sonic Blade",
				fr: "Lame sonique",
				de: "Schallklinge"
			},
			effect: {
				en: "Put damage counters on the Defending Pokémon until it is 50 HP away from being Knocked Out. If you do, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Placez des marqueurs de dégât sur le Pokémon Défenseur jusqu'à ce qu'il soit à 50 PV d'être mis K.O. Votre adversaire échange alors le Pokémon Défenseur avec 1 des Pokémon de son Banc.",
				de: "Lege so viele Schadensmarken auf das Verteidigende Pokémon, dass es nur noch 50 Schadenspunkte davon entfernt ist, kampfunfähig zu sein. Wenn du das machst, tauscht dein Gegner das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic Cut",
				fr: "Coupe Psycho",
				de: "Psychoklinge"
			},
			effect: {
				en: "You may choose as many of your face-down Prize cards as you like and put them face up. If you do, this attack does 60 damage plus 20 more damage for each Prize card you chose. (These cards remain face up for the rest of the game.)",
				fr: "Vous pouvez choisir autant de cartes Récompense se trouvant face cachée que vous le voulez et les retourner. Cette attaque inflige alors 60 dégâts plus 20 dégâts supplémentaires pour chaque carte Récompense choisie. (Ces cartes restent retournées pour le reste de la partie).",
				de: "Du kannst beliebig viele deiner verdeckten Preise wählen und aufdecken. Wenn du das machst, fügt dieser Angriff 60 Schadenspunkte plus 20 weitere Schadenspunkte für jeden so gewählten Preis zu. (Die gewählten Preise werden nicht wieder verdeckt.)"
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

	retreat: 2,



}

export default card
