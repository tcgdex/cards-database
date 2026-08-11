import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [821],
	set: Set,

	name: {
		'fr-fr': "Minisange",
		'en-us': "Rookidee",
		'es-es': "Rookidee",
		'it-it': "Rookidee",
		'pt-br': "Rookidee",
		'de-de': "Meikro"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Renvoyer",
			'en-us': "Send Back",
			'es-es': "Retornar",
			'it-it': "Mandaindietro",
			'pt-br': "Mandar Embora",
			'de-de': "Zurückschicken"
		},

		effect: {
			'fr-fr': "Envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'en-us': "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'es-es': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'it-it': "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'pt-br': "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			'de-de': "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
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
				cardmarket: 715639,
				tcgplayer: 497583,
				cardtrader: 248807
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715639,
				tcgplayer: 497583,
				cardtrader: 248807
			}
		},
	],

	illustrator: "Naoki Saito",

	description: {
		'en-us': "This Pokémon is brave and reckless. The white markings around a Rookidee's eyes intimidate fainthearted Pokémon.",
	},
}

export default card
