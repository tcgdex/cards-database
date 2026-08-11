import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [574],
	set: Set,

	name: {
		'fr-fr': "Scrutella",
		'en-us': "Gothita",
		'es-es': "Gothita",
		'it-it': "Gothita",
		'pt-br': "Gothita",
		'de-de': "Mollimorba"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Écras'Face",
			'en-us': "Pound",
			'es-es': "Destructor",
			'it-it': "Botta",
			'pt-br': "Pancada",
			'de-de': "Klaps"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Vague Étrange",
			'en-us': "Eerie Wave",
			'es-es': "Onda Sobrecogedora",
			'it-it': "Ondamistero",
			'pt-br': "Onda Misteriosa",
			'de-de': "Gespenstische Woge"
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
				cardmarket: 715565,
				tcgplayer: 497505,
				cardtrader: 248717
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715565,
				tcgplayer: 497505,
				cardtrader: 248717
			}
		},
	],

	illustrator: "0313",

	description: {
		'en-us': "This Pokémon is normally very innocent. When it is staring at something invisible, it is unblinking and utterly silent.",
	},
}

export default card
