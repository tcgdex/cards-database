import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [549],
	set: Set,

	name: {
		'en-us': "Hisuian Lilligant",
		'fr-fr': "Fragilady de Hisui",
		'es-es': "Lilligant de Hisui",
		'it-it': "Lilligant di Hisui",
		'pt-br': "Lilligant de Hisui",
		'de-de': "Hisui-Dressella"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Petilil",
		'fr-fr': "Chlorobule",
		'es-es': "Petilil",
		'it-it': "Petilil",
		'pt-br': "Petilil",
		'de-de': "Lilminip"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Swelling Scent",
			'fr-fr': "Parfum Amplifiant",
			'es-es': "Aroma Rebosante",
			'it-it': "Aroma Amplificato",
			'pt-br': "Aroma Abundante",
			'de-de': "Duftschwall"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Grass Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie Grass, puis attachez-les à vos Pokémon de Banc comme il vous plaît. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Grass y únelas a tus Pokémon en Banca de la manera que desees. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia Grass e assegnale ai tuoi Pokémon in panchina nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia Grass no seu baralho e ligue-as aos seus Pokémon no Banco como desejar. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Grass-Energiekarten und lege sie beliebig an die Pokémon auf deiner Bank an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Spiral Kick",
			'fr-fr': "Coup'd Pied en Spirale",
			'es-es': "Patada Espiral",
			'it-it': "Spiralcalcio",
			'pt-br': "Chute Espiral",
			'de-de': "Drehtritt"
		},

		damage: 50
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
		'en-us': "I suspect that its well-developed legs are the result of a life spent on mountains covered in deep snow. The scent it exudes from its flower crown heartens those in proximity.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682049,
				tcgplayer: 451630
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682049,
				tcgplayer: 451630
			}
		},
	],
}

export default card
