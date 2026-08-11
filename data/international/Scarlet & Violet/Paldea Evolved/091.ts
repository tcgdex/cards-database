import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [575],
	set: Set,

	name: {
		'fr-fr': "Mesmérella",
		'en-us': "Gothorita",
		'es-es': "Gothorita",
		'it-it': "Gothorita",
		'pt-br': "Gothorita",
		'de-de': "Hypnomorba"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Scrutella",
		'en-us': "Gothita",
		'es-es': "Gothita",
		'it-it': "Gothita",
		'pt-br': "Gothita",
		'de-de': "Mollimorba"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Contrôleur d'Esprit",
			'en-us': "Mind Bend",
			'es-es': "Fusión Mental",
			'it-it': "Fusione Mentale",
			'pt-br': "Dobra Mentes",
			'de-de': "Gedankenverbiegung"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Super Psy",
			'en-us': "Super Psy Bolt",
			'es-es': "Superrayo Psi",
			'it-it': "Superpsico",
			'pt-br': "Super-raio Psíquico",
			'de-de': "Super-Psischlag"
		},

		damage: 40
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
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715566,
				tcgplayer: 497506,
				cardtrader: 248718
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715566,
				tcgplayer: 497506,
				cardtrader: 248718
			}
		},
	],

	illustrator: "Aya Kusube",

	description: {
		'en-us': "This Pokémon will hypnotize children to put them to sleep before carrying them away. Be wary of nights when the starlight is bright.",
	},
}

export default card
