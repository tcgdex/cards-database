import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Gliscor",
		fr: "Scorvol",
		de: "Skorgro"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		472,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Gligar",
		fr: "Scorplane"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Bind Eye",
				fr: "Aveugle d'un oeil",
				de: "Fesselnder Blick"
			},
			effect: {
				en: "As long as Gliscor is your Active Pokémon, your opponent can't remove any Special Conditions by evolving or devolving his or her Pokémon. (This also includes putting a Pokémon Level-Up card onto that Pokémon.)",
				fr: "Tant que Scorvol est votre Pokémon Actif, votre adversaire ne peut pas retirer d'États Spéciaux en faisant évoluer ou en dés-évoluant son Pokémon. (Placer une carte Niveau Sup sur ce Pokémon inclus.)",
				de: "Solange Skorgro dein Aktives Pokémon ist, kann dein Gegner durch Entwickeln oder Rückentwickeln keine Speziellen Zustände von seinen Pokémon entfernen. (Dies gilt auch für das Spielen einer Pokémon Level-Up-Karte auf das jeweilige Pokémon.)"
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cutting Turn",
				fr: "Tour coupant",
				de: "Schneidedreher"
			},
			effect: {
				en: "Flip a coin. If heads, put damage counters on the Defending Pokémon until it is 10HP away from being Knocked Out. If you do, shuffle Gliscor and all cards attached to it into your deck.",
				fr: "Lancez une pièce. Si c'est face, placez des marqueurs de dégât sur le Pokémon Défenseur jusqu'à ce qu'il ne lui reste plus que 10 PV. Mélangez ensuite à votre deck Scorvol ainsi que toutes les cartes qui lui sont attachées.",
				de: "Wirf 1 Münze. Bei \"Kopf\" lege so viele Schadensmarken auf das Verteidigende Pokémon, dass es nur noch 10 Schadenspunkte davon entfernt ist, kampfunfähig zu werden. Wenn du das machst, mische Skorgro und alle daran angelegten Karten in dein Deck."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Friction Heat",
				fr: "Friction chauffante",
				de: "Reibungshitze"
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	variants: [
		{
			type: "holo",
		}
	],
}

export default card
