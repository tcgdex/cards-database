import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [44],
	set: Set,

	name: {
		'en-us': "Gloom",
		'fr-fr': "Ortide",
		'es-es': "Gloom",
		'it-it': "Gloom",
		'pt-br': "Gloom",
		'de-de': "Duflor"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Oddish",
		'fr-fr': "Mystherbe",
		'es-es': "Oddish",
		'it-it': "Oddish",
		'pt-br': "Oddish",
		'de-de': "Myrapla"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Offensive Scent",
			'fr-fr': "Parfum Offensif",
			'es-es': "Aroma Ofensivo",
			'it-it': "Aroma Offensivo",
			'pt-br': "Aroma Ofensivo",
			'de-de': "Widerlicher Duft"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused and Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691719,
				tcgplayer: 478042
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691719,
				tcgplayer: 478042
			}
		},
	],
}

export default card
