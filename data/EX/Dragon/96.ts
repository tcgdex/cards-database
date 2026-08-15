import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Muk ex",
		fr: "Grotadmorv ex",
		de: "Sleimok ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [89],

	hp: 100,

	stage: "Basic",
	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Grimer",
		fr: "Tadmorv",
		de: "Sleima"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Toxic Gas",
				fr: "Gaz chimique",
				de: "Giftgas"
			},
			effect: {
				en: "As long as Muk ex is your Active Pokémon, ignore all Poké-Powers and Poké-Bodies other than Toxic Gas.",
				fr: "Tant que Grotadmorv ex est votre Pokémon Actif, ignorez tous les Poké-Powers et les Poké-Bodies autres que Puanteur.",
				de: "Solange Sleimok ex dein Aktives Pokémon ist, ignoriere jede Poké-Power und jeden Poké-Body außer Giftgas."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Breath",
				fr: "Haleine empoisonnée",
				de: "Gifthauch"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Slimy Water",
				fr: "Eau gluante",
				de: "Glitschiges Wasser"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Colorless Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost).",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  dans le Coût de retraite du Pokémon Défenseur (après application des effets sur le Coût de retraite).",
				de: "Fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jede {C}-Energie in den Rückzugskosten des Verteidigenden Pokémon (nachdem Effekte auf die Rückzugskosten verrechnet wurden)."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87628,
				cardmarket: 275973
			},
		},
	],

}

export default card
