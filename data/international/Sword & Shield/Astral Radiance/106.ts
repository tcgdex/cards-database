import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [82],
	set: Set,

	name: {
		'en-us': "Magneton",
		'fr-fr': "Magnéton",
		'es-es': "Magneton",
		'it-it': "Magneton",
		'pt-br': "Magneton",
		'de-de': "Magneton"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Magnemite",
		'fr-fr': "Magnéti",
		'es-es': "Magnemite",
		'it-it': "Magnemite",
		'pt-br': "Magnemite",
		'de-de': "Magnetilo"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Bounce Back",
			'fr-fr': "Retour à l'Envoyeur",
			'es-es': "Recuperarse",
			'it-it': "Rimbalzo Indietro",
			'pt-br': "Ricochete de Retrocesso",
			'de-de': "Zurückprallen"
		},

		effect: {
			'en-us': "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			'fr-fr': "Votre adversaire échange son Pokémon Actif contre l'un de ses Pokémon de Banc.",
			'es-es': "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
			'it-it': "Il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
			'pt-br': "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
			'de-de': "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "This Pokémon is three Magnemite that have linked together. Magneton sends out powerful radio waves to study its surroundings.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658767,
				tcgplayer: 272307
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658767,
				tcgplayer: 272307
			}
		},
	],
}

export default card
