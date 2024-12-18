import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Omanyte",
		fr: "Amonita",
		de: "Amonitas"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		138,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Fossil",
				fr: "Réanimation Fossile",
				de: "Fossil wiederbeleben"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a card that evolves from Mysterious Fossil and put it on your Bench. Shuffle your deck afterward. Treat that card as a Basic Pokémon. This power can't be used if Omanyte is Asleep, Confused, or Paralyzed (or if your Bench is full).",
				fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, cherchez dans votre deck une carte Évolution de Mystérieux Fossile et placez-la sur votre Banc. Utilisez cette carte comme un Pokémon de base. Ce pouvoir ne peut pas être utilisé si Amonita est Endormi, Confus ou Paralysé (ou si votre Banc est plein).",
				de: "Du kannst einmal während deines Zuges (vor deinem Angriff) eine Münze werfen. Durchsuche bei \"Kopf\" dein Deck nach einer Karte, die aus dem Geheimnis-Fossil entsteht und lege sie auf deine Bank. Mische danach dein Deck. Behandle diese Karte wie ein basis-Pokémon. Diese Fähigkeit kann nicht verwendet werden, falls Amonitas schläft, verwirrt oder gelähmt ist (oder deine Bank voll ist)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Bind",
				fr: "Étreinte",
				de: "Klammergriff"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Un ancien fossile ramené à la vie, ce Pokémon utilise l'air conservé dans sa carapace pour plonger dans l'eau et refaire surface."
	},

	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	}
}

export default card
