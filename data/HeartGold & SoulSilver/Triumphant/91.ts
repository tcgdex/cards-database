import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Absol",
		fr: "Absol",
		de: "Absol"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [
		359,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Eye of Disaster",
				fr: "Œil du chaos",
				de: "Auge des Unheils"
			},
			effect: {
				en: "As long as Absol is your Active Pokémon, whenever your opponent puts a Basic Pokémon from his or her hand onto his or her Bench, put 2 damage counters on that Pokémon.",
				fr: "Tant qu’Absol est votre Pokémon Actif, chaque fois que votre adversaire ajoute un Pokémon de base de sa main à son Banc, placez 2 marqueurs de dégât sur ce Pokémon.",
				de: "Solange Absol dein Aktives Pokémon ist, lege jedes Mal, wenn dein Gegner 1 Basis-Pokémon von seiner Hand auf seine Bank legt, 2 Schadensmarken auf dieses Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Vicious Claw",
				fr: "Pince vicieuse",
				de: "Tückische Klauen"
			},
			effect: {
				en: "Choose 1 Pokémon from your hand and put it in the Lost Zone. (If you can’t put a Pokémon in the Lost Zone, this attack does nothing.)",
				fr: "Choisissez un Pokémon dans votre main et placez-le dans la Zone Perdue. (Si vous ne pouvez pas, cette attaque ne fait rien.)",
				de: "Wähle 1 Pokémon-Karte von deiner Hand und lege sie ins Nirgendwo. (Wenn du keine Pokémon-Karte ins Nirgendwo legen kannst, hat dieser Angriff keine Auswirkung.)"
			},
			damage: 70,

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

	retreat: 1,
	suffix: "Prime",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
