import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [198],
	set: Set,

	name: {
		en: "Murkrow",
		fr: "Cornèbre",
		es: "Murkrow",
		it: "Murkrow",
		pt: "Murkrow",
		de: "Kramurx"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flock",
			fr: "Nuée",
			es: "Multitud",
			it: "Frotta",
			pt: "Bando",
			de: "Ausschwärmen"
		},

		effect: {
			en: "Search your deck for up to 2 Murkrow and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 Cornèbre, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Murkrow y ponlas en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due Murkrow e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 Murkrow no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Kramurx und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Darkness"],

		name: {
			en: "Peck",
			fr: "Picpic",
			es: "Picotazo",
			it: "Beccata",
			pt: "Bicada",
			de: "Pikser"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card