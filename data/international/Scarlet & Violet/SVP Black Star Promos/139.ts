import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [380],
	set: Set,

	name: {
		'en-us': "Latias",
		'fr-fr': "Latias",
		'es-es': "Latias",
		'it-it': "Latias",
		'pt-br': "Latias",
		'de-de': "Latias"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Mist Float",
			'fr-fr': "Flottaison Brume",
			'es-es': "Flotación Nebulosa",
			'it-it': "Salvagente Nebbioso",
			'pt-br': "Névoa Flutuante",
			'de-de': "Gischtgleiter"
		},

		effect: {
			'en-us': "If this Pokémon has any {P} Energy attached, it has no Retreat Cost.",
			'fr-fr': "Si au moins une Énergie {P} est attachée à ce Pokémon, il n'a pas de Coût de Retraite.",
			'es-es': "Si este Pokémon tiene alguna Energía {P} unida, no tiene ningún Coste de Retirada.",
			'it-it': "Se questo Pokémon ha delle Energie {P} assegnate, non ha costo di ritirata.",
			'pt-br': "Se este Pokémon tiver alguma Energia {P} ligada a ele, não terá custo de Recuo.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 {P}-Energie angelegt ist, hat es keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Psychic Sphere",
			'fr-fr': "Sphère Psy",
			'es-es': "Esfera Psíquica",
			'it-it': "Psicosfera",
			'pt-br': "Esfera Psíquica",
			'de-de': "Psychosphäre"
		},

		damage: 100
	}],

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
	retreat: 2,
	regulationMark: "G",
	illustrator: "hncl",
	description: {
		'en-us': "It can telepathically communicate with people. It changes its appearance using its down that refracts light.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 785848,
				tcgplayer: 585579
			},
		}
	],
}

export default card
