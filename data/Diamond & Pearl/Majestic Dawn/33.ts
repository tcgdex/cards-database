import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Unown P",
		fr: "Zarbi P",
		de: "Icognito P"
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "PUT",
				fr: "PLACER",
				de: "PUT"
			},
			effect: {
				en: "Once during your turn (before your attack), if Unown P is on your Bench, you may put 1 damage counter on 1 of your Pokémon (excluding any Unown).",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi P est sur votre Banc, vous pouvez placer 1 marqueur de dégât sur 1 de vos Pokémon (Pokémon Zarbi exclus).",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Icognito P auf deiner Bank ist, 1 Schadensmarke auf 1 deiner Pokémon (außer allen Icognito) legen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},
			effect: {
				en: "Each player discards the top card of his or her deck. This attack does 20 damage plus 20 more damage for each Unown discarded in this way.",
				fr: "Chaque joueur défausse la carte du dessus de son deck. Cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires pour chaque Zarbi défaussée de cette façon.",
				de: "Jeder Spieler legt die oberste Karte seines Decks auf den Ablagestapel. Dieser Angriff fügt 20 Schadenspunkte plus 20 weitere Schadenspunkte für jede Icognito-Karte, die auf diese Weise abgelegt wurde, zu."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
