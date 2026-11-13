import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Azurill",
		fr: "Azurill",
		de: "Azurill",
		es: "Azurill",
		it: "Azurill",
		pt: "Azurill",
		'es-mx': "Azurill"
	},

	illustrator: "Narumi Sato",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 30,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Bouncy-Bounce Charge",
			fr: "Charge Boing‑Bondissante",
			de: "Hüpf-Hüpf-Ladung",
			es: "Carga Rebote",
			it: "Rimbalzacarica",
			pt: "Carga Pula‑pula",
			'es-mx': "Carga Rebotona"
		},

		effect: {
			en: "<p>Search your deck for an Energy card and attach it to 1 of your Benched Pokémon. Then, shuffle your deck.</p>",
			fr: "<p>Cherchez dans votre deck une carte Énergie, puis attachez-la à l'un de vos Pokémon de Banc. Mélangez ensuite votre deck.</p>",
			de: "<p>Durchsuche dein Deck nach 1 Energiekarte und lege sie an 1 Pokémon auf deiner Bank an. Mische anschließend dein Deck.</p>",
			es: "<p>Busca en tu baraja 1 carta de Energía y únela a uno de tus Pokémon en Banca. Después, baraja las cartas de tu baraja.</p>",
			it: "<p>Cerca nel tuo mazzo una carta Energia e assegnala a uno dei Pokémon nella tua panchina. Poi rimischia il tuo mazzo.</p>",
			pt: "<p>Procure por uma carta de Energia no seu baralho e ligue-a a 1 dos seus Pokémon no Banco. Em seguida, embaralhe o seu baralho.</p>",
			'es-mx': "<p>Busca en tu mazo 1 carta de Energía y únela a 1 de tus Pokémon en Banca. Después, baraja tu mazo.</p>"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 726566,
		cardmarket: 918954
	}
}

export default card