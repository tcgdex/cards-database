import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Pokémon Flute",
		fr: "Flûte Pokémon",
		de: "Pokémon-Flöte",
		it: "Poké Flauto"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez 1 carte Pokémon de base dans la pile de défausse de votre adversaire et placez-la sur son Banc. (Vous ne pouvez pas jouer Flûte Pokémon si le Banc de votre adversaire est plein).",
		de: "Wähle eine Basis-Pokémon-Karte vom Ablagestapel Deines Gegners und platziere sie auf seiner Bank. (Du kannst Pokémon-Flöte nicht spielen, falls die Bank Deines Gegners voll ist.)",
		it: "Scegli un Pokémon Base dalla pila degli scarti del tuo avversario e mettilo nella sua Panchina. (Se la Panchina del tuo avversario è già completa, non puoi giocare Poké Flauto.)",
	},

	thirdParty: {
		cardmarket: 273781
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
