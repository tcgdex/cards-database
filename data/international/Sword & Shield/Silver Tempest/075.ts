import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [561],
	set: Set,

	name: {
		'en-us': "Sigilyph",
		'fr-fr': "Cryptéro",
		'es-es': "Sigilyph",
		'it-it': "Sigilyph",
		'pt-br': "Sigilyph",
		'de-de': "Symvolara"
	},

	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Warning",
			'fr-fr': "Avertissement",
			'es-es': "Aviso",
			'it-it': "Avvertimento",
			'pt-br': "Alerta",
			'de-de': "Warnung"
		},

		effect: {
			'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck. If your opponent's Active Pokémon is a Pokémon V, you may put up to 5 Basic Pokémon onto your Bench in this way instead.",
			'fr-fr': "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck. Si le Pokémon Actif de votre adversaire est un Pokémon-V, vous pouvez placer jusqu'à 5 Pokémon de base sur votre Banc de cette façon.",
			'es-es': "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja. Si el Pokémon Activo de tu rival es un Pokémon V, puedes poner hasta 5 Pokémon Básicos en tu Banca de esta manera en vez de 1.",
			'it-it': "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo. Se il Pokémon attivo del tuo avversario è un Pokémon-V, invece puoi mettere fino a cinque Pokémon Base nella tua panchina in questo modo.",
			'pt-br': "Procure por 1 Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho. Se o Pokémon Ativo do seu oponente for um Pokémon V, você poderá colocar até 5 Pokémon Básicos no seu Banco desta forma ao invés de 1.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck. Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, kannst du auf diese Weise stattdessen bis zu 5 Basis-Pokémon auf deine Bank legen."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Cutting Wind",
			'fr-fr': "Vent Glacial",
			'es-es': "Viento Helado",
			'it-it': "Vento Tagliente",
			'pt-br': "Vento Dilacerante",
			'de-de': "Schneidender Wind"
		},

		damage: 70
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
	regulationMark: "F",


	description: {
		'en-us': "Psychic power allows these Pokémon to fly. Some say they were the guardians of an ancient city. Others say they were the guardians' emissaries.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682122,
				tcgplayer: 451729
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682122,
				tcgplayer: 451729
			}
		},
	],
}

export default card
