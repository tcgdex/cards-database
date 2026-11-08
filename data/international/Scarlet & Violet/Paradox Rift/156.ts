import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [962],
	set: Set,

	name: {
		'en-us': "Bombirdier ex",
		'fr-fr': "Lestombaile-ex",
		'es-es': "Bombirdier ex",
		'it-it': "Bombirdier-ex",
		'pt-br': "Bombirdier ex",
		'de-de': "Adebom-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Fast Carrier",
			'fr-fr': "Transporteur Rapide",
			'es-es': "Transportista Veloz",
			'it-it': "Corriere Celere",
			'pt-br': "Entrega a Jato",
			'de-de': "Schneller Lieferant"
		},

		effect: {
			'en-us': "If you go first, you can use this attack during your first turn. Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Si vous jouez en premier, vous pouvez utiliser cette attaque pendant votre premier tour. Cherchez dans votre deck jusqu'à 3 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Si sales en primer lugar, puedes usar este ataque durante tu primer turno. Busca en tu baraja hasta 3 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno. Cerca nel tuo mazzo fino a tre Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Se você for o primeiro a jogar, poderá usar este ataque durante o seu primeiro turno. Procure por até 3 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Wenn du als Erster am Zug bist, kannst du diese Attacke während deines ersten Zuges einsetzen. Durchsuche dein Deck nach bis zu 3 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Shadowy Wind",
			'fr-fr': "Vent Sombre",
			'es-es': "Viento Sombrío",
			'it-it': "Vento Ombroso",
			'pt-br': "Vento Sombrio",
			'de-de': "Schattenwind"
		},

		effect: {
			'en-us': "You may put this Pokémon and all attached cards into your hand.",
			'fr-fr': "Vous pouvez ajouter à votre main ce Pokémon et toutes les cartes qui lui sont attachées.",
			'es-es': "Puedes poner este Pokémon y todas las cartas unidas a él en tu mano.",
			'it-it': "Puoi riprendere in mano questo Pokémon e tutte le carte a esso assegnate.",
			'pt-br': "Você pode colocar este Pokémon e todas as cartas ligadas a ele na sua mão.",
			'de-de': "Du kannst dieses Pokémon und alle angelegten Karten auf deine Hand nehmen."
		},

		damage: 130
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
			type: 'holo',
			thirdParty: {
				cardmarket: 740696,
				tcgplayer: 523837,
				cardtrader: 265567
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Mochizuki",

	
}

export default card
