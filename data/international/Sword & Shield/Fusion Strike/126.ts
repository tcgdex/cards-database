import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [770],
	set: Set,

	name: {
		'en-us': "Palossand",
		'fr-fr': "Trépassable",
		'es-es': "Palossand",
		'it-it': "Palossand",
		'pt-br': "Palossand",
		'de-de': "Colossand"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Sandygast",
		'fr-fr': "Bacabouh",
		'es-es': "Sandygast",
		'it-it': "Sandygast",
		'pt-br': "Sandygast",
		'de-de': "Sankabuh"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 4,
	regulationMark: "E",
	illustrator: "Shibuzoh.",

	description: {
		'en-us': "Once it has whipped up a sandstorm to halt its opponents in their tracks, this terrifying Pokémon snatches away their vitality."
	},

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Spooky Sand",
			'fr-fr': "Sable Effrayant",
			'de-de': "Spuksand",
			'es-es': "Arena Embrujada",
			'pt-br': "Areia Assustadora",
			'it-it': "Sabbia Inquietante"
		},

		damage: 120
	}, {
		cost: ["Psychic", "Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Oppressing Sandstorm",
			'fr-fr': "Sirocco Étouffant",
			'de-de': "Schrecklicher Sandsturm",
			'es-es': "Tormenta de Arena Opresiva",
			'pt-br': "Tempestade de Areia Opressiva",
			'it-it': "Terrempesta Opprimente"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Basic Pokémon, it is Knocked Out.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon de base, il est mis K.O.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, ist es kampfunfähig.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Básico, queda Fuera de Combate.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, ele será Nocauteado.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Base, viene messo KO."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582660,
				tcgplayer: 253313
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582660,
				tcgplayer: 253313
			}
		},
	],
}

export default card
