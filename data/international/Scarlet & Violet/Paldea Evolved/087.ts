import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [200],
	set: Set,

	name: {
		'fr-fr': "Feuforêve",
		'en-us': "Misdreavus",
		'es-es': "Misdreavus",
		'it-it': "Misdreavus",
		'pt-br': "Misdreavus",
		'de-de': "Traunfugil"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Hypnoblast",
			'en-us': "Hypnoblast",
			'es-es': "Hipnorrayo",
			'it-it': "Ipnobomba",
			'pt-br': "Borrifada Hipnótica",
			'de-de': "Hypnoschuss"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 10
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
				cardmarket: 715562,
				tcgplayer: 497501,
				cardtrader: 248714
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715562,
				tcgplayer: 497501,
				cardtrader: 248714
			}
		},
	],

	illustrator: "Megumi Higuchi",

	description: {
		'en-us': "This Pokémon startles people in the middle of the night. It gathers fear as its energy.",
	},
}

export default card
