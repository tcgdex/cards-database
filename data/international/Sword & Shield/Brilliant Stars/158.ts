import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [26],
	set: Set,

	name: {
		'en-us': "Raichu V",
		'fr-fr': "Raichu V",
		'es-es': "Raichu V",
		'it-it': "Raichu V",
		'pt-br': "Raichu V",
		'de-de': "Raichu V"
	},

	illustrator: "MUGENUP",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Fast Charge",
			'fr-fr': "Charge Express",
			'es-es': "Carga Veloz",
			'it-it': "Velocicarica",
			'pt-br': "Carga Veloz",
			'de-de': "Schneller Ladevorgang"
		},

		effect: {
			'en-us': "If you go first, you can use this attack during your first turn. Search your deck for a Lightning Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Si vous jouez en premier, vous pouvez utiliser cette attaque pendant votre premier tour. Cherchez dans votre deck une carte Énergie Lightning, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Si sales primero, puedes usar este ataque durante tu primer turno. Busca en tu baraja 1 carta de Energía Lightning y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno. Cerca nel tuo mazzo una carta Energia Lightning e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Se você for primeiro, poderá usar este ataque no seu primeiro turno. Procure por 1 carta de Energia Lightning no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Wenn du als Erster am Zug bist, kannst du diese Attacke während deines ersten Zuges einsetzen. Durchsuche dein Deck nach 1 Lightning-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Dynamic Spark",
			'fr-fr': "Étincelle Dynamique",
			'es-es': "Chispa Dinámica",
			'it-it': "Dinamiscintilla",
			'pt-br': "Faísca Dinâmica",
			'de-de': "Dynamischer Funke"
		},

		effect: {
			'en-us': "You may discard any amount of Lightning Energy from your Pokémon. This attack does 60 damage for each card you discarded in this way.",
			'fr-fr': "Vous pouvez défausser autant d'Énergie Lightning que vous le voulez de vos Pokémon. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
			'es-es': "Puedes descartar cualquier cantidad de Energías Lightning de tus Pokémon. Este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
			'it-it': "Puoi scartare tutte le Energie Lightning che vuoi dai tuoi Pokémon. Questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo.",
			'pt-br': "Você pode descartar qualquer quantidade de Energia Lightning dos seus Pokémon. Este ataque causa 60 pontos de dano para cada carta descartada desta forma.",
			'de-de': "Du kannst beliebig viele Lightning-Energien von deinen Pokémon auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte zu."
		},

		damage: "60×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608704,
				tcgplayer: 263877
			}
		},
	],
}

export default card
