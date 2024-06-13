import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [35],
	set: Set,

	name: {
		fr: "Mélofée",
		en: "Clefairy",
		es: "Clefairy",
		it: "Clefairy",
		pt: "Clefairy",
		de: "Piepi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Invitation Clair de Lune",
			en: "Moon-Viewing Invitation",
			es: "Invitación de Avistamiento Lunar",
			it: "Guarda Che Luna",
			pt: "Convite Lunar",
			de: "Mondschaueinladung"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu'à 3 Mélofée, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			en: "Search your deck for up to 3 Clefairy and put them onto your Bench. Then, shuffle your deck.",
			es: "Busca en tu baraja hasta 3 Clefairy y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a tre Clefairy e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 Clefairy no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 3 Piepi und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Claque",
			en: "Smack",
			es: "Palmetazo",
			it: "Schiaffo",
			pt: "Estalo",
			de: "Klatscher"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card