import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Sigilyph",
		fr: "Cryptéro",
		es: "Sigilyph",
		it: "Sigilyph",
		pt: "Sigilyph",
		de: "Symvolara"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Warning",
			fr: "Avertissement",
			es: "Aviso",
			it: "Avvertimento",
			pt: "Alerta",
			de: "Warnung"
		},

		effect: {
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck. If your opponent's Active Pokémon is a Pokémon V, you may put up to 5 Basic Pokémon onto your Bench in this way instead.",
			fr: "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck. Si le Pokémon Actif de votre adversaire est un Pokémon-V, vous pouvez placer jusqu'à 5 Pokémon de base sur votre Banc de cette façon.",
			es: "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja. Si el Pokémon Activo de tu rival es un Pokémon V, puedes poner hasta 5 Pokémon Básicos en tu Banca de esta manera en vez de 1.",
			it: "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo. Se il Pokémon attivo del tuo avversario è un Pokémon-V, invece puoi mettere fino a cinque Pokémon Base nella tua panchina in questo modo.",
			pt: "Procure por 1 Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho. Se o Pokémon Ativo do seu oponente for um Pokémon V, você poderá colocar até 5 Pokémon Básicos no seu Banco desta forma ao invés de 1.",
			de: "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck. Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, kannst du auf diese Weise stattdessen bis zu 5 Basis-Pokémon auf deine Bank legen."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Cutting Wind",
			fr: "Vent Glacial",
			es: "Viento Helado",
			it: "Vento Tagliente",
			pt: "Vento Dilacerante",
			de: "Schneidender Wind"
		},

		damage: 70
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