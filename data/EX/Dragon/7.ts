import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Minun",
		fr: "Négapi",
		de: "Minun"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [312],

	hp: 50,

	types: [
		"Lightning"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Chain of Events",
				fr: "Réactions en chaîne",
				de: "Kette der Ereignisse"
			},
			effect: {
				en: "As long as Minun is your Active Pokémon, whenever your other Active Pokémon, if any, attacks, you may use Cheer On after the first attack (you still need the necessary Energy to use Cheer On). You can't use Cheer On more than once in this way even if your other Active Pokémon has the Chain of Events Poké-Body.",
				fr: "Tant que Negapi est votre Pokémon Actif, dès que votre autre Pokémon Actif, si vous en avez un, attaque, vous pouvez utiliser Encouragement après la première attaque (vous avez toujours besoin du nombre d'Énergies nécessaires pour utiliser Encouragement). Vous ne pouvez pas utiliser Encouragement plus d'une fois, même si votre autre Pokémon Actif possède le Poké-Body Réactions en chaîne.",
				de: "Wenn Minun dein Aktives Pokémon ist und dein anderes Aktives Pokémon einen Angriff benutzt, kannst du Anfeuern nach dem ersten Angriff benutzen (nur wenn du die Energiekosten von Anfeuern bezahlen kannst). Du kannst Anfeuern auf diese Weise nicht häufiger als ein Mal benutzen, auch wenn dein anderes Aktives Pokémon auch den Kette der Ereignisse Poké-Body hat."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cheer On",
				fr: "Encouragement",
				de: "Anfeuern"
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon (including Minun).",
				fr: "Retirez un marqueur de dégât à chacun de vos Pokémon (Negapi inclus).",
				de: "Entferne 1 Schadensmarke von allen deinen Pokémon (einschließlich Minun)."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Special Circuit",
				fr: "Circuit spécial",
				de: "Spezial Stromkreis"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. If you choose Pokémon that has a Poké-Power or Poké-Body, this attack does 40 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez un des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. Si vous choisissez un Pokémon possédant un Poké-Power ou un Poké-Body, cette attaque inflige 40 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc).",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt diesem Pokémon 20 Schadenspunkte zu. Falls das ausgewählte Pokémon eine Poké-Power oder ein Poké-Body hat, fügt dieser Angriff stattdessen 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87481,
				cardmarket: 275884
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87481,
				cardmarket: 275884
			},
		},
	],

}
export default card
