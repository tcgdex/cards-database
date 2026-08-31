import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Leafeon-GX",
		fr: "Phyllali-GX",
		de: "Folipurba-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		470,
	],
	hp: 200,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Breath of the Leaves",
				fr: "Souffle du Feuillage",
				de: "Atem der Blätter"
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon, once during your turn (before your attack), you may heal 50 damage from 1 of your Pokémon that has any Energy attached to it.",
				fr: "Si ce Pokémon est votre Pokémon Actif, une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 50 dégâts à l’un de vos Pokémon auquel de l’Énergie est attachée.",
				de: "Wenn dieses Pokémon dein Aktives Pokémon ist, kannst du einmal während deines Zuges (bevor du angreifst) 50 Schadenspunkte bei 1 deiner Pokémon heilen, an das mindestens 1 Energie angelegt ist."
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
				en: "Solar Beam",
				fr: "Lance-Soleil",
				de: "Solarstrahl"
			},

			damage: 110,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Grand Bloom-GX",
				fr: "Efflorescence-GX",
				de: "Blütezeit-GX"
			},
			effect: {
				en: "For each of your Benched Basic Pokémon, search your deck for a card that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)",
				fr: "Pour chacun de vos Pokémon de Banc de base, cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Durchsuche pro Basis-Pokémon auf deiner Bank dein Deck nach 1 Karte, die sich aus jenem Pokémon entwickelt, und lege sie auf jenes Pokémon, um es zu entwickeln. Mische anschließend dein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
